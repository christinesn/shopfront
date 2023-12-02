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
        <div className="cart-product">
            <img
                src={"/images/" + product.id + "_" + product.color + ".jpg"}
                alt={product.name + ", " + product.colorName}
            />
            <div className="details">
                <span className="name">{product.name}</span>
                <br/>
                <span className="color">{product.colorName}</span>
                <br/>
                <div className="price-container">
                    {product.salePrice ? (
                        <span>
                            <strike>${product.defaultPrice}</strike> <span className="price">${product.salePrice}</span>
                        </span>
                    ) : (
                        <span className="price">${product.defaultPrice}</span>
                    )}
                </div>
            </div>
            <div className="remove">
                <button onClick={removeFromCart} title="Remove">
                    <RemoveSVG />
                </button>
            </div>
        </div>
    )
}

export default CartEntry