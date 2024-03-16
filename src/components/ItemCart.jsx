import { useCarritoContext } from "../context/CartContext";
import { useCounter } from "../hooks/useCounter";
export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)

    return (

        <div className="itemcart"> 
            <div className="contenedor_de_imagen"> 
                <img src={`${product.imagenDelProducto}`} alt={`Imagen de ${product.descripcionDeProducto}`} />
            </div>
            <div className="contenedor_descripcion_y_btn_eliminar">
                <h2 className="descripcion_del_producto_h2">{product.descripcionDeProducto}</h2>
                <button className="btn_eliminar" onClick={() => removeItem(product.idDeProducto)}>Eliminar</button>
            </div>
            <div className="decrement_count_increment_container">
                <button className="drecrement_button" onClick={() => {
                    updateItem(product.idDeProducto, count - 1)
                    decrement()
                    }}>-</button>
                <span className="count">{count}</span>
                <button className="increment_button" onClick={() => {
                    updateItem(product.idDeProducto, count + 1)
                    increment()
                }}>+</button>
            </div>
            <div className="informacion_de_subtotales">
                <p className="texto_transferencia">Transferencia:</p>
                <p className="subtotal_transferencia">${product.precioTransferenciaDeProducto * count}</p>
                <p className="texto_otros_medios_de_pago">Otros medios de pago:</p>
                <p className="subtotal_otros_medios_de_pago">${product.precioOtrosMediosDePagoDeProducto * count}</p>
            </div>

        </div>

    );
}