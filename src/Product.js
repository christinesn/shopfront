import { useState, useEffect } from 'react';
import './Product.css';
import productDetails from './productDetails';

function Product ({ product = productDetails[0] }) {
    const [currentColor, setCurrentColor] = useState(product.defaultColor)
    const [hovered, setHovered] = useState(false)

    function handleColorClick (e) {
        e.preventDefault();
        setCurrentColor(e.target.dataset.color)
    }

    function toggleHover () {
        setHovered(!hovered)
    }

    return (
        <div className="product">
            <div className="product-image-container" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <button className="product-image">
                    <img
                        src={"/images/" + product.id + "_" + currentColor + ".jpg"}
                        alt={product.name + ", " + product.colors.find(el => el.id === currentColor).name}
                    />
                </button>
                {hovered && (
                    <div className="quick-add-container">
                        <button className="quick-add" data-product={product.id} data-color={currentColor}>
                            Quick Add +
                        </button>
                    </div>
                )}
            </div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">
                {product.salePrice ? (
                    <span><strike>${product.defaultPrice}</strike> ${product.salePrice}</span>
                ) : (
                    <span>{product.defaultPrice}</span>
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