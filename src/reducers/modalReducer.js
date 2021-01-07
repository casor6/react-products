import { types } from "../types/types";

const init = {
    show: true
}

export const modalReducer = (state = init, action) => {
    switch (action.type) {
        case types.modalShowLogin:
            return {show:true}
        case types.modalShowRegister:
            return {show:false}
    
        default:
            return state
    }
}
