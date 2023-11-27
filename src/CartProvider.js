import CartContext from './CartContext';
import cartReducer from './cartReducer';
import { useReducer } from 'react';

const CartProvider = (props) => {
    const [cart, editCart] = useReducer(cartReducer, [])

    return (
        <CartContext.Provider
            value={{
                cart,
                editCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider