import '../sass/item.scss'
import { Link } from 'react-router-dom';
export const Item = ({ product }) => {
    return (
        <div className="tarjeta_de_producto">
            <Link to={`/product/${product.idDeProducto}`}>
                <div className='contenedor_de_imagen'>
                    <img className="imagen_del_producto" src={`${product.imagenDelProducto}`} alt={`Imagen de ${product.descripcionDeProducto}`} />
                </div>
            </Link>
            <div className='información_del_producto'>
                <h3 className='marca_del_producto'>{product.marcaDeProducto}</h3>
                <p className="descripcion_del_producto">{product.descripcionDeProducto}</p>
                <div className="precio_normal_y_porcentaje_de_descuento_contenedor">
                    <p className="porcentaje_de_descuento">{product.descuentoDeProducto * 100}% descuento</p>
                    <p className="precio_normal">${product.precioNormalDeProducto}</p>
                </div>
                <div className='informacion_de_precios'>
                    <p className='texto_trasferencia'>Transferencia</p>
                    <p className='precio_transferencia'>${product.precioTransferenciaDeProducto}</p>
                    <p className='texto_otros_medios_de_pago'>Otros medios de pago</p>
                    <p className='precio_otros_medios_de_pago'>${product.precioOtrosMediosDePagoDeProducto}</p>
                </div>
            </div>
        </div >
    );
}