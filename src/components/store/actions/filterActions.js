import { constants } from '../constants'

export const setSelectedBrands = brands => ({
    type: constants.SET_SELECTED_BRANDS,
    payload: brands
})

export const setSelectedWeights = weights => ({
    type: constants.SET_SELECTED_WEIGHTS,
    payload: weights
})

export const clearSelectedFilters = () => ({
    type: constants.CLEAR_SELECTED_FILTERS
})

