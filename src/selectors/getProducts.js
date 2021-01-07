export const getAllProducts = (vendorId) => {

    const products = JSON.parse(localStorage.getItem('products')) || []

    if(!vendorId) return products

    return products.filter(product => product.vendorId === vendorId)
}

export const searchProducts = (name = '') => {

    
    const products = JSON.parse(localStorage.getItem('products')) || []
    if(name === '') return products
    return products.filter(product => product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
}

export const setProduct = (data) => {
    const products = JSON.parse(localStorage.getItem('products')) || []
    products.push(data)
    localStorage.setItem('products',JSON.stringify(products))
}