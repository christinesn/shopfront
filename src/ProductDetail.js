import './ProductDetail.css';

function ProductDetail ({ product }) {
    return (
        <div className="details">
            <h3>{product.name}</h3>
            {product.salePrice ? (
                <span>
                    <strike>${product.defaultPrice}</strike>&nbsp;
                    <span className="price">${product.salePrice}</span>
                </span>
            ) : (
                <span className="price">${product.defaultPrice}</span>
            )}
        </div>
    )
}

export default ProductDetail