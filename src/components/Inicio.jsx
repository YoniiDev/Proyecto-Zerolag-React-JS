import '../sass/inicio.scss'
import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { Carrusel } from './Carrusel';
import { getProducts } from '../firebase/firebase';
export const Inicio = () => {
    const [productsOnSale, setProductsOnsale] = useState([])
    useEffect(() => {
        getProducts()
            .then(productArray => {
                const productsWithStock = productArray.filter(product => product.stock > 0)
                const productosConDescuento = productsWithStock.filter(product => product.descuentoDeProducto >= 0.40 || product.descuentoDeProducto >= 0.30)
                setProductsOnsale(productosConDescuento)
            })
            .catch((error) => console.log(error))
    }, [])
    return (

        <main>
            {/* CARRUSEL HERO SECTION */}
            <Carrusel />

            {/* SECCION DE PRODUCTOS */}
            <div className="ofertas_imperdibles">
                <h2 className='titulo_h2_ofertas_imperdibles'>OFERTAS IMPERDIBLES</h2>
                <div className="productos_ofertas_imperdibles">
                    <ItemList products={productsOnSale} plantilla={"Item"} />
                </div>
            </div>
        </main>
    );
}