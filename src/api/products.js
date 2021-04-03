import products from './products.json'

function getProducts() {
    return Promise.resolve(products);
}

export default getProducts