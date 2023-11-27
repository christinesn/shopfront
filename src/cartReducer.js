const cartReducer = (cart, { product, action }) => {
    if (action === "add") {
        return [...cart, product]
    }

    if (action === "remove") {
        return cart.filter(item => item !== product)
    }

    return cart
}

export default cartReducer