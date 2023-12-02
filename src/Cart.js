import './Cart.css';
import { useState, useContext } from 'react';
import CartContext from './CartContext';
import CartEntry from './CartEntry';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';
import CloseSVG from './icons/CloseSVG';
import CartSVG from './icons/CartSVG';

function Cart () {
    const { cart } = useContext(CartContext)
    const [open, setOpen] = useState(false)

    const cartTotal = (() => {
        if (cart.length === 0) return 0
        let total = 0;

        cart.forEach((item) => {
            total += item.salePrice || item.defaultPrice
        })
        
        return total
    })();

    function toggleCart (e) {
        e.preventDefault();
        setOpen(!open)
    }

    return (
        <div className="cart">
            {open && (<div onClick={toggleCart} className="cart-backdrop"></div>)}
            <button onClick={toggleCart}>
                <CartSVG />
            </button>
            <div className={"cart-modal" + (open ? " open" : "")}>
                <button
                    className="close-cart"
                    onClick={toggleCart}
                    title="Close"
                >
                    <CloseSVG />
                </button>
                {cart.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <div className="cart-body">
                        <h3>Your Cart</h3>
                        {cart.map(product => (
                            <CartEntry product={product} key={product.id + product.color} />
                        ))}
                        <CartTotal total={cartTotal} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart