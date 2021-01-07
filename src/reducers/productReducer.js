import { types } from "../types/types";

const init = {
    products: []
}

export const productReducer = (state = init, action) => {
    switch (action.type) {
        case types.productLoad:
            return {
                ...state,
                products: [...action.payload]
            }
    
        default:
            return state
    }
}
