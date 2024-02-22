import { Link } from "react-router-dom";
import { useCounter } from "../hooks/useCounter"
import "../sass/itemdetail.scss"
export const ItemDetail = ({ item }) => {
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        console.log(`Estoy comprando ${count} de ${item.descripcionDeProducto}`)
        console.log("Poducto agregado al carrito")
    }
    return (
        <div className="detalle_del_producto">
            <div className="contenedor_de_imagen">
                <img src={`../img/${item.imagenDelProducto}`} alt={`Imagen de ${item.descripcionDeProducto}`} />
            </div>
            <div className="información_del_producto">
                <p className="descripción_del_producto">{item.descripcionDeProducto}</p>
                <p className="marca_del_producto">{item.marcaDeProducto}</p>
                <div className="informacion_de_precios">
                    <span className="texto_normal">Normal</span>
                    <span className="precio_normal">${item.precioNormalDeProducto}</span>
                    <span className="texto_descuento">Descuento</span>
                    <span className="porcentaje_de_descuento">{item.descuentoDeProducto * 100}%</span>
                    <span className="texto_pago_con_transferencia">Pago con Transferencia</span>
                    <span className="precio_transferencia">${item.precioTransferenciaDeProducto}</span>
                    <span className="texto_otros_medios_de_pago">Otros medios de pago</span>
                    <span className="precio_otros_medios_de_pago">${item.precioOtrosMediosDePagoDeProducto}</span>
                </div>
                <div className="informacion_de_stock">
                    <p className="texto_stock">Stock</p>
                    <p className="cantidad_de_stock">{item.stock} Unidades</p>
                </div>
                <div className='item_count_container'>
                    <div className="decrement_count_increment_container">
                        <button className="drecrement_button" onClick={decrement}>-</button>
                        <span className="count">{count}</span>
                        <button className="increment_button" onClick={increment}>+</button>
                    </div>
                    <div className="reset_and_add_to_card_button_container">
                        <button className="reset_button" onClick={reset}>Reset</button>
                        <button className="add_to_card_button" onClick={handleAddToCart}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

