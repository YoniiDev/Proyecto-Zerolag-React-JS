import '../sass/itemcount.scss'
import { useCounter } from "../hooks/useCounter"
export const ItemCount = () => {
    const { count, increment, decrement, reset } = useCounter(1, 10, 1)

    const handleAddToCart = () => {
        console.log("Producto agregado al carrito")
    }
    return (
        <div className='item_count_container'>
            <div className="decrement_count_increment_container">
                <button className="drecrement_button" onClick={decrement}>-</button>
                <span className="count">{count}</span>
                <button className="increment_button" onClick={increment}>+</button>
            </div>
            <div className="reset_add_to_card_button_container">
                <button className="reset_button" onClick={reset}>Reset</button>
                <button className="add_to_card_button" onClick={handleAddToCart}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

