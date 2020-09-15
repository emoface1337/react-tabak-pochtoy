import _ from 'lodash'

const initialState = {
    contentItems: [],
    isLoading: true,
    error: null
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOAD_ITEMS_SUCCESS': {

            const items = _.mapKeys(action.payload, 'id')

            return {
                ...state,
                contentItems: items,
                isLoading: false,
                error: null
            }
        }

        case 'LOAD_ITEMS_FAILURE': {
            return {
                ...state,
                contentItems: [],
                isLoading: false,
                error: action.payload,
                brands: [],
                weights: []
            }
        }

        case 'LOAD_ITEMS_REQUEST': {
            return {
                ...state,
                contentItems: [],
                isLoading: true,
                error: null,
                brands: [],
                weights: []
            }
        }

        default:
            return state

    }
}

export default contentReducer