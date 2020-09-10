const initialState = {
    contentItems: [],
    isLoading: true,
    error: null,
    brands: [],
    weights: []
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOAD_ITEMS_SUCCESS': {

            const items = action.payload
            const weights = new Set()
            const brands = new Set()
            items.map(item => {
                brands.add(item.brand)
                weights.add(item.weight)
                return item
            })

            return {
                ...state,
                contentItems: items,
                isLoading: false,
                error: null,
                brands: [...state.brands, ...brands],
                weights: [...state.weights, ...weights]
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