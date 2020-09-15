import { constants } from '../constants'

const addItemToCart = item => ({
    type: constants.ADD_ITEM_TO_CART,
    payload: item
})

const removeItemFromCart = id => ({
    type: constants.REMOVE_ITEM_FROM_CART,
    payload: id
})