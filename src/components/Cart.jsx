import '../sass/cart.scss'
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from "./ItemList";
import { useCounter } from '../hooks/useCounter';
export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext();
    const { count } = useCounter();

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
                                    <p className='cantidad_total'>{count}</p>
                                    <p className='texto_pago_con_transferencia'>Pago con transferencia:</p>
                                    <p className='total_pago_con_transferencia'>$00000</p>
                                    <p className='texto_otros_medios_de_pago'>Otros medios de pago:</p>
                                    <p className='total_otros_medios_de_pago'>$00000</p>
                                    <p className='texto_costo_de_envio'>Costo de envio</p>
                                    <p className='costo_de_envio'>$8990</p>
                                </div>
                                <p className='total_de_prueba'>Resumen de la compra: ${totalPrice()}</p>
                                <div className='contenedor_de_botones'>
                                    <button className='btn_vaciar_carrito' onClick={emptyCart}>Vaciar Carrito</button>
                                    <Link to={'/'}>
                                        <button className='btn_continuar_comprando'>Continuar Comprando</button>
                                    </Link>
                                </div>
                                <Link to={'/checkout'}>
                                    <button className='btn_finalizar_compra'>Finalizar compra</button>
                                </Link>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}