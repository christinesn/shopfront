import { useState, useContext } from 'react';
import './Product.css';
import CartContext from './CartContext';
import ProductColors from './ProductColors';

function Product ({ product }) {
    const { cart, editCart } = useContext(CartContext)
    const [currentColor, setCurrentColor] = useState(product.defaultColor)
    const [hovered, setHovered] = useState(false)

    const [currentColorName, setCurrentColorName] = useState((() => {
        const color = product.colors.filter(col => col.id === product.defaultColor)
        return color[0].name
    })());

    const inCart = (() => {
        const inCart = cart.filter(item => {
            return item.id === product.id && item.color === currentColor
        })

        return !!inCart.length
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

    function toggleHover () {
        setHovered(!hovered)
    }

    return (
        <div className="product">
            <div
                className="product-image-container"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                <img
                    src={"/images/" + product.id + "_" + currentColor + ".jpg"}
                    alt={product.name + ", " + currentColorName}
                />
                {hovered && (
                    <div className="add-to-cart-container">
                        <button
                            onClick={handleAddToCart}
                            className="add-to-cart"
                            data-product={product.id}
                            data-color={currentColor}
                            disabled={inCart}
                        >
                            {inCart ? "Added to Cart" : "Add to Cart"}
                        </button>
                    </div>
                )}
            </div>
            <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-price">
                    {product.salePrice ? (
                        <span>
                            <strike>${product.defaultPrice}</strike>&nbsp;
                            <span className="current-price">${product.salePrice}</span>
                        </span>
                    ) : (
                        <span className="current-price">${product.defaultPrice}</span>
                    )}
                </div>
            </div>
            <ProductColors
                colors={product.colors}
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
                setCurrentColorName={setCurrentColorName}
            />
        </div>
    )
}

export default Product