import {Fragment, useContext} from 'react';
import './AddToCartButton.css';
import CartContext from './CartContext';

function AddToCartButton ({ hovered, selectedProduct, inCart }) {
    const { editCart } = useContext(CartContext)

    function handleAddToCart () {
        editCart({ product: selectedProduct, action: "add" })
    }

    return (
        <Fragment>
            {hovered && (
                <div className="add-to-cart-container">
                    <button
                        onClick={handleAddToCart}
                        className="add-to-cart"
                        disabled={inCart}
                    >
                        {inCart ? "Added to Cart" : "Add to Cart"}
                    </button>
                </div>
            )}
        </Fragment>
    )
}

export default AddToCartButton