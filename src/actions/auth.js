import { addUser, setUser } from "../selectors/addUser"
import { searchUser } from "../selectors/searchUser"
import { types } from "../types/types"
import { startLoadingProducts } from "./products"
import { setError } from "./ui"

export const startLogin = (email, password) => {
    return (dispatch) => {

        const user = searchUser(email)
        if(!user || user.password !== password) {
            dispatch(setError('Usuario y/o contraseña invalida'))
            return
        }
        setUser(user)
        dispatch(authenticate(user))
        dispatch(startLoadingProducts())
        document.getElementById('closeModalAuth').click()
    }
}

export const authenticate = (data) => ({
    type: types.login,
    payload: data
})

export const startRegister = (name, email, password) => {
    return (dispatch) => {
        
        const user = searchUser(email)
        
        if(user?.email === email) {
            dispatch(setError('Usuario ya existe. Intenta con otro'))
            return
        }

        const data = {
            id:new Date().getTime(),
            type:'vendor',
            name: name,
            email: email,
            password: password,
            products: []
        }
        
        addUser(data)
        dispatch(authenticate(data))
        dispatch(startLoadingProducts())
        document.getElementById('closeModalAuth').click()
    }
}

export const startLogout = () => {
    return(dispatch) => {

        localStorage.setItem('user',null)
        dispatch(logout())
    }
}
export const logout = () => ({
    type: types.logout
})