import '../sass/item.scss'
import { Link } from 'react-router-dom';
export const Item = ({ product }) => {
    return (
        <div className="tarjeta_de_producto">
            <Link to={`/product/${product.idDeProducto}`}>
                <img className="imagen_del_producto" src={`../img/${product.imagenDelProducto}`} alt={`Imagen de ${product.descripcionDeProducto}`} />
            </Link>
            <h3 className='marca_del_producto'>{product.marcaDeProducto}</h3>
            <p className="descripcion_del_producto">{product.descripcionDeProducto}</p>
            <div className="precio_normal_y_porcentaje_de_descuento_contenedor">
                <p className="porcentaje_de_descuento">{product.descuentoDeProducto * 100}% descuento</p>
                <p className="precio_normal">$<s>{product.precioNormalDeProducto}</s></p>
            </div>
            <p className="precio_de_producto_con_transferencia">Transferencia $<span>{product.precioTransferenciaDeProducto}</span></p>
            <p className="precio_de_producto_con_otros_medios_de_pago">Otros medios de pago $<span>{product.precioOtrosMediosDePagoDeProducto}</span></p>
        </div >
    );
}