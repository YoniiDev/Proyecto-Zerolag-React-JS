import '../sass/checkout.scss'
import { useRef } from "react";
export const Checkout = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current)
        const data = Object.fromEntries(datForm)
        console.log(data)
        e.target.reset()
    }

    return (
        <div className="checkout">
            <h1>Datos de la compra</h1>
            <div className="contenedor_de_datos_del_cliente_y_de_informacion_de_los_productos">
                <div className="datos_del_cliente">
                    <h2>Información del cliente</h2>
                    <form action="" ref={formRef} onSubmit={handleSubmit} method="" encType="">
                        <div className="nombre_del_cliente">
                            <label htmlFor="nombreDelCliente">Nombre</label>
                            <input type="text" required="" name="nombreDelCliente" id="nombreDelCliente" />
                        </div>
                        <div className="apellido_del_cliente">
                            <label htmlFor="apellidoDelCliente">Apellido</label>
                            <input type="text" name="apellidoDelCliente" required="" id="apellidoDelCliente" />
                        </div>
                        <div className="email_del_cliente">
                            <label htmlFor="emailDelCliente">E-mail</label>
                            <input type="email" name="emailDelCliente" required="" id="emailDelCliente" />
                        </div>
                        <div className="contenedor_de_telefono_y_rut_del_cliente">
                            <div className="telefono_del_cliente">
                                <label htmlFor="telefonoDelCliente">Teléfono</label>
                                <input type="tel" name="telefonoDelCliente" pattern="[0-9]{3}-[0-9]{8}" placeholder="569-12345678" required="" id="telefonoDelCliente" />
                            </div>
                            <div className="rut_del_cliente">
                                <label htmlFor="rutDelCliente">RUT</label>
                                <input type="text" name="rutDelCliente" placeholder="00.000.000-0" required="" id="rutDelCliente" />
                            </div>
                        </div>
                        <div className="contenedor_de_region_y_comuna">
                            <div className="region">
                                <label htmlFor="region">Región</label>
                                <select name="region" required="" id="region">
                                    {/* AQUI SE MUESTRAN LAS REGIONES DINAMICAMENTE CON JAVASCRIPT */}
                                </select>
                            </div>
                            <div className="comuna">
                                <label htmlFor="comuna">Comuna</label>
                                <select name="comuna" required="" id="comuna">
                                    {/* AQUI SE MUESTRAN LAS COMUNAS DINAMICAMENTE CON JAVASCRIPT */}
                                </select>
                            </div>
                        </div>
                        <div className="contenedor_de_direccion_y_numero">
                            <div className="direccion">
                                <label htmlFor="direccion">Dirección</label>
                                <input type="text" name="direccion" required="" id="direccion" />
                            </div>
                            <div className="numero_de_casa">
                                <label htmlFor="numeroDeCasa">Número</label>
                                <input type="text" name="numeroDeCasa" required="" id="numeroDeCasa" />
                            </div>
                        </div>
                        <div className="contenedor_de_aceptar_terminos_y_condiciones">
                            <input type="checkbox" name="aceptarTerminosYCondiciones" required="" id="aceptarTerminosYCondiciones" />
                            <label htmlFor="aceptarTerminosYCondiciones"> Acepto los Términos y Condiciones de ZeroLag y la Política de Privacidad de Datos.</label>
                        </div>
                        <button className="btn_continuar" type="submit">Finalizar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}