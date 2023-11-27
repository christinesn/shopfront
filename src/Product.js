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

    const currentColorName = (() => {
        const color = product.colors.filter(col => col.id === currentColor)
        return color[0].name
    })();

    const selectedProduct = {
        id: product.id,
        name: product.name,
        defaultPrice: product.defaultPrice,
        salePrice: product.salePrice,
        color: currentColor,
        colorName: currentColorName
    }

    function handleAddToCart () {
        editCart({ product: selectedProduct, action: "add" })
    }

    const inCart = (() => {
        const inCart = cart.filter(item => {
            return item.id === product.id && item.color === currentColor
        })

        return !!inCart.length
    })();

    return (
        <div className="product">
            <div
                className="product-image-container"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                <img
                    src={"/images/" + product.id + "_" + currentColor + ".jpg"}
                    alt={product.name + ", " + product.colors.find(el => el.id === currentColor).name}
                />
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