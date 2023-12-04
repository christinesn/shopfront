import './ProductColors.css';

function ProductColors ({ colors, currentColor, setCurrentColor, setCurrentColorName }) {
    function handleColorChange (e, color) {
        e.preventDefault();
        setCurrentColor(color.id);
        setCurrentColorName(color.name);
    }

    return (
        <div className="colors">
            {colors.map(color => (
                <button
                    key={color.id}
                    className={"color-select" + (color.id === currentColor ? " selected" : "")}
                    disabled={color.id === currentColor}
                    onClick={(e) => handleColorChange(e, color)}
                    title={color.name}
                >
                    <div className="color-border">
                        <div className="color-fill"
                            style={{
                                backgroundColor: color.hex
                            }}
                        />
                    </div>
                </button>
            ))}
        </div>
    )
}

export default ProductColors