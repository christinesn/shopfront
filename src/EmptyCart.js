import './EmptyCart.css';

function EmptyCart () {
    return (
        <div className="empty-cart">
            <div className="empty-cart-body">
                <div>Your cart is empty.</div>
                <div>Add something to see it here.</div>
            </div>
            <img
                src="./images/scoop_neck_tee_white_md.jpg"
                alt="The Scoop Neck Tee, White"
            />
        </div>
    )
}

export default EmptyCart