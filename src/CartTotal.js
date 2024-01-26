import './CartTotal.css';

function CartTotal ({ total, count }) {
    let itemText = 'items';
    if (count === 1) itemText = 'item'

    return (
        <section className="total">
            <div className="subtotal">
                <div>
                    <h6>Subtotal</h6>
                    <span className="cart-count">({count} {itemText})</span>
                </div>
                <span>${total}</span>
            </div>
            <button className="checkout">
                Checkout
            </button>
        </section>
    )
}

export default CartTotal