import './Product.css';
import { useState, useContext } from 'react';
import CartContext from './CartContext';
import ProductColors from './ProductColors';
import ProductDetails from './ProductDetails';
import AddToCartButton from './AddToCartButton';

function Product ({ product }) {
    const { cart } = useContext(CartContext)
    const [currentColor, setCurrentColor] = useState(product.defaultColor)

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

    return (
        <div className="product">
            <div className="product-image-container">
                <img
                    src={"/images/" + product.id + "_" + currentColor + ".jpg"}
                    alt={product.name + ", " + currentColorName}
                    title={product.name + ", " + currentColorName}
                />
                <AddToCartButton
                    selectedProduct={selectedProduct}
                    inCart={inCart}
                />
            </div>
            <ProductDetails product={product} />
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