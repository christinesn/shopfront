import './CartTotal.css';

function CartTotal ({ total, count }) {
    let itemText = 'items';
    if (count === 1) itemText = 'item'

    return (
        <div className="total">
            <div className="subtotal">
                <div>Subtotal <span className="cart-count">({count} {itemText})</span></div>
                <div>${total}</div>
            </div>
            <button className="checkout">
                Checkout
            </button>
        </div>
    )
}

export default CartTotal