import './CartEntry.css';
import { useContext } from 'react';
import CartContext from './CartContext';
import RemoveSVG from './icons/RemoveSVG';

function CartEntry ({ product }) {
    const { editCart } = useContext(CartContext)

    function removeFromCart (e) {
        e.preventDefault()
        editCart({ product, action: "remove" })
    }

    return (
        <article className="cart-entry">
            <img
                src={"./images/tiny/" + product.id + "_" + product.color + ".jpg"}
                alt={product.name + ", " + product.colorName}
            />
            <div className="details">
                <div className="name">
                    <h5>{product.name}</h5>
                    <span className="color">{product.colorName}</span>
                </div>
                {product.salePrice ? (
                    <div>
                        <strike>${product.defaultPrice}</strike> <span className="price">${product.salePrice}</span>
                    </div>
                ) : (
                    <span className="price">${product.defaultPrice}</span>
                )}
            </div>
            <div className="remove">
                <button onClick={removeFromCart} title="Remove">
                    <RemoveSVG />
                </button>
            </div>
        </article>
    )
}

export default CartEntry