import { useCarritoContext } from "../context/CartContext";
import { Link } from "react-router-dom";
export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
        <>
            <div className="contenedor_del_icono_carrito_y_del_contador_de_productos">
                <Link to={'/cart'}>
                    <img className="icono_carrito" src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/carritoDeCompra.png?alt=media&token=356d27d7-b914-4de6-adf7-0633c5bede26" alt="icono_del_carrito de compra" />
                </Link>
                <p className="contador_de_productos">{getItemQuantity()}</p>
            </div>
        </>
    );
}