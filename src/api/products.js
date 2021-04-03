import products from './products.json'

function getProducts() {
    return Promise.resolve(products);
}

function getProductById(id) {
    const product = products.find(prod => prod.id === id)
    return Promise.resolve(product);
}

export { getProducts, getProductById }