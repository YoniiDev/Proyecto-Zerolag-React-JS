import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { getProducts } from "../firebase/firebase";
export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()
    useEffect(() => {
        getProducts()
            .then(productArray => {
                const productWithStock = productArray.filter(product => product.stock > 0)
                if (cid) {
                    const productByCategory = productWithStock.filter(product => product.category == cid)
                    setProducts(productByCategory)
                } else {
                    setProducts(productWithStock)
                }
            })
            .catch((error) => console.log(error))
    }, [cid])
    return (
        <div className="contenedor_de_tarjetas_de_producto">
            <ItemList products={products} plantilla={"Item"} />
        </div>
    );
    
}

