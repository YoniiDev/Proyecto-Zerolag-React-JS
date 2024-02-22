import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()
    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(productArray => {
                if (cid) {
                    const productByCategory = productArray.filter(product => product.category == cid)
                    setProducts(productByCategory)
                } else {
                    setProducts(productArray)
                }
            })
            .catch((error) => console.log(error))
    }, [cid])
    return (
        <div className="contenedor_de_tarjetas_de_producto">
            <ItemList products={products} />
        </div>
    );
}

