import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams()

    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(products => {
                const productFound = products.find(product => product.idDeProducto == pid)
                console.log(productFound)
                if (productFound) {
                    setItem(productFound)
                }
            })
    }, [])
    return (
        <>
            <ItemDetail item={item} />
        </>
    );
}