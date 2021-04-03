import { createStore } from 'redux'

const initialState = {
    cart: [
        {
            product: {
                "id": 6,
                "name": "Honor 8x",
                "price": 200,
                "image": "/img/6.png",
                "description": "6.5-inch Borderless fullview display · Colorful texture back lens · Kirin 710 powerful chipset · GPU Turbo · 3750mAh (typ.) long-lasting battery · 128GB ROM (64GB)"
            },
            quantity: 5
        }
    ]
}

function reducers(state = initialState) {
    return state
}

const store = createStore(reducers)

export default store