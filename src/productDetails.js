import './ProductDetails.css';

function ProductDetails ({ product }) {
    return (
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
    )
}

export default ProductDetails