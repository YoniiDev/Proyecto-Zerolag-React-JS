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
            <ItemList products={products} plantilla={"Item"} />
        </div>
    );
    
}

