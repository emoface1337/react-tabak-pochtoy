import { constants } from '../constants'

const initialState = {
    selectedBrands: [],
    selectedWeights: []
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        case constants.SET_SELECTED_BRANDS:
            return {
                ...state,
                selectedBrands: action.payload
            }

        case constants.SET_SELECTED_WEIGHTS:
            return {
                ...state,
                selectedWeights: action.payload
            }

        case constants.CLEAR_SELECTED_FILTERS:
            return {
                ...state,
                selectedBrands: [],
                selectedWeights: []
            }

        default:
            return state
    }
}