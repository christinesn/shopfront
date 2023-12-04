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

    const count = cart.length;

    return (
        <div className="cart">
            {open && (<div onClick={toggleCart} className="cart-backdrop"></div>)}
            <button className="open-cart" onClick={toggleCart} title="Open Cart">
                <CartSVG />
                <div className={"cart-badge" + (count === 0 ? " empty" : "")}>
                    <div className="cart-badge-count">{count}</div>
                </div>
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
                        <div className="cart-items">
                            {cart.map(product => (
                                <CartEntry product={product} key={product.id + product.color} />
                            ))}
                        </div>
                        <CartTotal total={cartTotal} count={cart.length} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart