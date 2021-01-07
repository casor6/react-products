import { types } from "../types/types";

export const authReducer = (state = null, action) => {
    
    switch (action.type) {
        case types.login:
            return action.payload
        case types.logout:
            return null
    
        default:
            return state
    }
}
