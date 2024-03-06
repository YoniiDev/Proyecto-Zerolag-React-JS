import '../sass/cart.scss'
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from "./ItemList";
export const Cart = () => {
    const { carrito, totalTransferPrice, totalPriceOtherPaymentMethods, emptyCart, getItemQuantity } = useCarritoContext();

    return (
        <>
            {
                carrito.length === 0
                    ?
                    <>
                        <div className='contenedor_carrito_vacio'>
                            <h1 className='carrito_vacio_h1'>Carrito Vacio</h1>
                            <p className='mensaje_carrito_vacio'>"¡Tu carrito está más ligero que un byte en reposo! ¿Por qué no exploras nuestra increíble selección de productos tecnológicos y llenas tu carrito de maravillas digitales?"</p>
                            <div className='contenedor_del_btn_volver_al_inicio'>
                                <Link to={'/'}>
                                    <button className='btn_volver_al_inicio'>Volver al Inicio</button>
                                </Link>
                            </div>

                        </div>
                    </>
                    :
                    <>
                        <div className='detalle_de_la_compra'>
                            <div className="contenedor_de_itemcart">
                                {<ItemList products={carrito} plantilla={"ItemCart"} />}
                            </div>
                            <div className='resumen_de_la_compra'>
                                <h1 className='resumen_de_la_compra_h1'>Resumen de la Compra</h1>
                                <div className='información_de_compra'>
                                    <p className='texto_cantidad_total'>Cantidad total</p>
                                    <p className='cantidad_total'>{getItemQuantity()}</p>
                                    <p className='texto_pago_con_transferencia'>Pago con transferencia:</p>
                                    <p className='total_pago_con_transferencia'>${totalTransferPrice() + 10000}</p>
                                    <p className='texto_otros_medios_de_pago'>Otros medios de pago:</p>
                                    <p className='total_otros_medios_de_pago'>${totalPriceOtherPaymentMethods() + 10000}</p>
                                </div>
                                <div className='informacion_de_envio'>
                                    <p className='texto_costo_de_envio'>El costo de envío a todo Chile es de $10.000.</p>
                                    <p className='aviso_costo_de_envio'>El total en el resumen de compra incluye el costo de envío.</p>
                                </div>
                                <div className='contenedor_de_botones'>
                                    <button className='btn_vaciar_carrito' onClick={emptyCart}>Vaciar Carrito</button>
                                    <Link to={'/'}>
                                        <button className='btn_continuar_comprando'>Continuar Comprando</button>
                                    </Link>
                                </div>
                                <div className='contenedor_btn_finalizar_compra'>
                                    <Link to={'/checkout'}>
                                        <button className='btn_finalizar_compra'>Finalizar compra</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}