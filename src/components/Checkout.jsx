import '../sass/checkout.scss'
import { useRef } from "react";
import { useCarritoContext } from "../context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase";
import { toast } from "react-toastify"
export const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate()
    const { carrito, totalTransferPrice, totalPriceOtherPaymentMethods, emptyCart } = useCarritoContext()
    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current)
        const cliente = Object.fromEntries(datForm)

        //Modificar stock
        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.idDeProducto).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) {
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.idDeProducto, prodBDD)
                } else {
                    toast.info(`El producto con el nombre ${prodBDD.descripcionDeProducto} no se puede comprar por que no tiene stock suficiente`, {
                        position: "top-right",
                        autoClose: 5000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                    })
                    aux.filter(prod => prod.idDeProducto != prodBDD.idDeProducto)
                }
            })
        })

        //Generar la orden de compra
        const aux2 = aux.map(prod => (
            {
                idDeProducto: prod.idDeProducto,
                quantity: prod.quantity,
                precioNormalDeProducto: prod.precioNormalDeProducto,
                precioTransferenciaDeProducto: prod.precioTransferenciaDeProducto,
                precioOtrosMediosDePagoDeProducto: prod.precioOtrosMediosDePagoDeProducto,
            }
        ))

        createOrdenCompra(cliente, totalTransferPrice(), totalPriceOtherPaymentMethods(), aux2, new Date().toLocaleDateString('es-CL', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`🛒 Muchas gracias por comprar en ZeroLag. La ID de la compra es: ${ordenCompra.id}. En unos minutos resivira su comprobante de compra en su email`, {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                })

                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                toast.error(`Error al generar orden de compra: ${error}`, {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                })
            })
    }

    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <div className='empty_checkout'>
                            <h1 className='mensaje_agregar_productos_h1'>No hay nada para comprar. Para finanlizar la compra debes agregar algunos de nuestros productos al carrito.</h1>
                            <Link to={"/"}>
                                <button className='btn_volver_al_inicio'>Volver al inicio</button>
                            </Link>
                        </div>
                    </>
                    :
                    <div className="checkout">
                        <h1>Datos de la compra</h1>
                        <div className="contenedor_de_datos_del_cliente_y_de_informacion_de_los_productos">
                            <div className="datos_del_cliente">
                                <h2>Información del cliente</h2>
                                <form action="" ref={formRef} onSubmit={handleSubmit} method="" encType="">
                                    <div className="nombre_del_cliente">
                                        <label>Nombre</label>
                                        <input type="text" required="" name="nombreDelCliente" />
                                    </div>
                                    <div className="apellido_del_cliente">
                                        <label>Apellido</label>
                                        <input type="text" name="apellidoDelCliente" required="" />
                                    </div>
                                    <div className="email_del_cliente">
                                        <label>E-mail</label>
                                        <input type="email" name="emailDelCliente" required="" />
                                    </div>
                                    <div className="contenedor_de_telefono_y_rut_del_cliente">
                                        <div className="telefono_del_cliente">
                                            <label>Teléfono</label>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{8}" placeholder="569-12345678" name="telefonoDelCliente" required="" />
                                        </div>
                                        <div className="rut_del_cliente">
                                            <label>RUT</label>
                                            <input type="text" placeholder="00.000.000-0" name="rutDelCliente" required="" />
                                        </div>
                                    </div>
                                    <div className="contenedor_de_region_y_comuna">
                                        <div className="region">
                                            <label>Región</label>
                                            <select name="region" required="">
                                                {/* AQUI SE MUESTRAN LAS REGIONES DINAMICAMENTE*/}
                                            </select>
                                        </div>
                                        <div className="comuna">
                                            <label>Comuna</label>
                                            <select name="comuna" required="">
                                                {/* AQUI SE MUESTRAN LAS COMUNAS DINAMICAMENTE*/}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="contenedor_de_direccion_y_numero">
                                        <div className="direccion">
                                            <label>Dirección</label>
                                            <input type="text" name="direccion" required="" />
                                        </div>
                                        <div className="numero_de_casa">
                                            <label>Número</label>
                                            <input type="text" name="numeroDeCasa" required="" />
                                        </div>
                                    </div>
                                    <div className="contenedor_de_aceptar_terminos_y_condiciones">
                                        <input type="checkbox" name="aceptarTerminosYCondiciones" required="" />
                                        <label> Acepto los Términos y Condiciones de ZeroLag y la Política de Privacidad de Datos.</label>
                                    </div>
                                    <button className="btn_finalizar" type="submit">Finalizar</button>
                                </form>
                            </div>
                        </div>
                    </div>

            }

        </>
    );
}