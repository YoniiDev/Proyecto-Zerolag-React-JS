import { useCarritoContext } from "../context/CartContext";
import { Link } from "react-router-dom";
export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
        <>
            <div className="contenedor_del_icono_carrito_y_del_contador_de_productos">
                <Link to={'/cart'}>
                    <img className="icono_carrito" src="../img/carritoDeCompra.png" alt="icono_del_carrito de compra" />
                </Link>
                <p className="contador_de_productos">{getItemQuantity()}</p>
            </div>
            <div className="carrito_de_productos" id="carritoDeProductosId">
                <div className="contenedor_btn_cerrar_carrito_y_titulo_carrito_de_productos">
                    <h3 className="titulo_carrito_de_productos">Carrito de productos</h3>
                    <button className="btn_cerrar_carrito" id="btnCerrarCarritoId">X</button>
                </div>
                <div className="contenedor_de_items_de_carrito_de_productos" id="contenedorDeItemsDeCarritoDeProductosId">
                    {/*ACA SE MUESTRAN LOS ITEMS AGREGADOS AL CARRITO*/}
                </div>
                <div className="contenedor_de_totales_a_pagar_y_del_boton_iniciar_pago">
                    <div className="contenedor_de_total_de_pago_con_transferencia_y_de_total_con_otros_medios_de_pago">
                        <p className="pago_con_transferencia">Pago con transferencia $<span className="valor_total_pago_con_transferencia" id="valorTotalPagoConTransferenciaId">0</span></p>
                        <p className="Otros_medios_de_pago">Otros medios de pago $<span className="valor_total_otros_medios_de_pago" id="valorTotalOtrosMediosDePagoId">0</span></p>
                    </div>
                    <a className="btn_iniciar_pago" href="#" id="btnIniciarPagoId">Iniciar pago</a>
                </div>
            </div>
        </>
    );
}