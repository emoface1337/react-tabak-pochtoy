import { constants } from '../constants'

export const addItemToCart = item => ({
    type: constants.ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = id => ({
    type: constants.REMOVE_ITEM_FROM_CART,
    payload: id
})

export const increaseItemCart = (id, price) => ({
    type: constants.INCREASE_ITEM_CART,
    payload: { id, price }
})

export const decreaseItemCart = (id, price) => ({
    type: constants.DECREASE_ITEM_CART,
    payload: { id, price }
})

export const clearCart = () => ({
    type: constants.CLEAR_CART
})