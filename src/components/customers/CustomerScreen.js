import React from 'react'
import { useSelector } from 'react-redux'
import { ProductsList } from '../products/ProductsList'

export const CustomerScreen = () => {
    
    const auth = useSelector(state => state.auth)
    const {products} = useSelector(state => state.product)
    
    return (
        <div className="container pt-5">
            {
                (auth && products.length === 0) && <div>No tienes ningún producto registrado, puedes agregar desde <span style={{color:"blue",cursor:"pointer"}} data-toggle="modal" data-target="#addProductModal">aquí</span></div>
            }
            
            <div className="card-columns">
            {
                products.map(product => 
                    <ProductsList key={product.id} {...product}/>
                )
            }
            </div>
        </div>
    )
}
