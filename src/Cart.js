import './Cart.css';
import { useState, useContext, useRef, useEffect } from 'react';
import CartContext from './CartContext';
import CartEntry from './CartEntry';

function Cart () {
    const { cart } = useContext(CartContext)
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function handleClickOutsideCart (e) {
            if (!open) return

            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }

        window.addEventListener("click", handleClickOutsideCart)

        return () => window.removeEventListener("click", handleClickOutsideCart)
    })

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
        <div ref={ref}>
            <button onClick={toggleCart}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
            </button>
            <div className={"cart-modal" + (open ? " open" : "")}>
                {cart.length === 0 ? (
                    <div>Your cart is empty.</div>
                ) : (
                    <div>
                        {cart.map(product => (
                            <CartEntry product={product} key={product.id + product.color} />
                        ))}
                        <hr />
                        <div className="cart-total">
                            Total: ${cartTotal}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart