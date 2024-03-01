import { Item } from "./Item";
import { ItemCart } from "./ItemCart";
export const ItemList = ({ products, plantilla }) => {
    return (
        <>
            {
                plantilla === 'Item'
                    ?
                    products.map(product => <Item key={product.idDeProducto} product={product} />)
                    :
                    products.map(product => <ItemCart key={product.idDeProducto} product={product} />)
            }
        </>
    );
}

