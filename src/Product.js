import { useState, useContext } from 'react';
import './Product.css';
import CartContext from './CartContext';

function Product ({ product }) {
    const { cart, editCart } = useContext(CartContext)
    const [currentColor, setCurrentColor] = useState(product.defaultColor)
    const [hovered, setHovered] = useState(false)

    function handleColorClick (e) {
        e.preventDefault();
        setCurrentColor(e.target.dataset.color)
    }

    function toggleHover () {
        setHovered(!hovered)
    }

    const selectedProduct = {
        id: product.id,
        name: product.name,
        defaultPrice: product.defaultPrice,
        salePrice: product.salePrice,
        color: currentColor
    }

    function handleAddToCart () {
        editCart({ product: selectedProduct, action: "add" })
    }

    function isInCart () {
        const inCart = cart.filter(item => {
            return item.id === product.id && item.color === currentColor
        })

        return !!inCart.length
    }

    const inCart = isInCart();

    return (
        <div className="product">
            <div
                className="product-image-container"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                <button className="product-image">
                    <img
                        src={"/images/" + product.id + "_" + currentColor + ".jpg"}
                        alt={product.name + ", " + product.colors.find(el => el.id === currentColor).name}
                    />
                </button>
                {hovered && (
                    <div className="quick-add-container">
                        <button
                            onClick={handleAddToCart}
                            className="quick-add"
                            data-product={product.id}
                            data-color={currentColor}
                            disabled={inCart}
                        >
                            {inCart ? "Added to Cart" : "Add to Cart"}
                        </button>
                    </div>
                )}
            </div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">
                {product.salePrice ? (
                    <span><strike>${product.defaultPrice}</strike> ${product.salePrice}</span>
                ) : (
                    <span>${product.defaultPrice}</span>
                )}
            </div>
            <div className="product-colors">
                {product.colors.map(color => (
                    <button
                        data-color={color.id}
                        key={color.id}
                        className="product-color-select"
                        style={{
                            backgroundColor: color.hex
                        }}
                        onClick={handleColorClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default Product