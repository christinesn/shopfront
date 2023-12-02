import './CartTotal.css';

function CartTotal ({ total }) {
    return (
        <div className="total">
            <div className="subtotal">
                <div>Subtotal</div>
                <div>${total}</div>
            </div>
            <button className="checkout">
                Checkout
            </button>
        </div>
    )
}

export default CartTotal