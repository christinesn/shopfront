import {useContext} from 'react';
import './AddToCartButton.css';
import CartContext from './CartContext';

function AddToCartButton ({ selectedProduct, inCart }) {
    const { editCart } = useContext(CartContext)

    function handleAddToCart () {
        editCart({ product: selectedProduct, action: "add" })
    }

    return (
        <button
            onClick={handleAddToCart}
            className="add-to-cart"
            disabled={inCart}
        >
            {inCart ? "In cart" : "Add to Cart"}
        </button>
    )
}

export default AddToCartButton