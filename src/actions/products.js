import { getAllProducts, searchProducts, setProduct } from "../selectors/getProducts";
import { types } from "../types/types";

export const startLoadingProducts = () => {
    return (dispatch, getState) => {

        const vendorId = getState().auth?.id
        const products = getAllProducts(vendorId)
        dispatch(setProducts(products))
    }
}

export const startSearchProduct = (name) => {
    return (dispatch) => {
        const products = searchProducts(name)
        dispatch(setProducts(products))
    }
}

export const startNewProduct = (product) => {
    return (dispatch, getState) => {

        const {id: vendorId, name} = getState().auth
        const newProduct = {
            vendorId: vendorId,
            vendorName: name,
            ...product
        }
        setProduct(newProduct)
        
        const products = getAllProducts(vendorId)
        dispatch(setProducts(products))
    }
}

export const setProducts = (products) => ({
    type: types.productLoad,
    payload: products
})
