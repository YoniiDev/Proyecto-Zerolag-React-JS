import { useState, createContext, useContext } from "react"

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    //Buscar Producto
    const isInCart = (id) => {
        return carrito.some(prod => prod.idDeProducto === id)
    }

    //Agregar producto
    const addItem = (item, cantidad) => {
        if (isInCart(item.idDeProducto)) {
            const indice = carrito.findIndex(prod => prod.idDeProducto === item.idDeProducto)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            setCarrito(aux)
        } else {
            const newItem = {
                ...item, 
                quantity: cantidad
            }
            setCarrito([...carrito, newItem])
        }
    }

    //Eliminar producto
    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.idDeProducto !== id))
    }

    //Vaciar carrito
    const emptyCart = () => {
        setCarrito([])
    }

    const updateItem = (id, newQuantity) => {
        const indice = carrito.findIndex(prod => prod.idDeProducto === id)
        const aux = carrito
        aux[indice].quantity = newQuantity
        setCarrito([...aux])
    }

    //Obtener cantidad de productos
    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    //Obtener precio total con transferencia del carrito
    const totalTransferPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.precioTransferenciaDeProducto), 0)
    }

    //Obtener precio total con otros medios de pago del carrito
    const totalPriceOtherPaymentMethods = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.precioOtrosMediosDePagoDeProducto), 0)
    }

    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, updateItem, emptyCart, getItemQuantity, totalTransferPrice, totalPriceOtherPaymentMethods }}>
            {props.children}
        </CarritoContext.Provider>
    )
}

