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
        },
        {
            product: {
                "id": 4,
                "name": "IPhone 4s",
                "price": 150,
                "image": "/img/2.png",
                "description": "Apple iPhone 4s smartphone. Announced Oct 2011. Features 3.5″ display, Apple A5 chipset, 8 MP primary camera, 1432 mAh battery, 64 GB storage, 512 MB"
            },
            quantity: 2
        }
    ]
}

function reducers(state = initialState) {
    return state
}

const store = createStore(reducers)

export default store