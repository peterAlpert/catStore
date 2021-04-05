import { createStore } from 'redux'
import cartReducer from './reducers/index'

// function to load cart from localStorage
const getCarItems = () => {
    const cartItems = localStorage.getItem('cart');

    if (cartItems !== null)
        return JSON.parse(cartItems)

    return {
        cart: []
    }
}

// function to set cart to localStorage
const setCartItems = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const store = createStore(cartReducer, getCarItems(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// to make store know if items added to cart in localStorage
store.subscribe(() => { setCartItems(store.getState()) })

export default store