import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewProduct } from '../../actions/products'
import { removeError, setError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'

export const ModalProduct = () => {
    const dispatch = useDispatch()
    const {msgError} = useSelector(state => state.ui)
    
    const [formValues, handleInputChange, reset] = useForm({
        name:'',
        sku:'',
        units:0,
        price:1
    })

    const { name,sku,units,price } = formValues
    
    const handleAddProduct = (e) => {
        e.preventDefault()
        dispatch(removeError())
        if(name === '' || name.length < 2) {
            dispatch(setError('El nombre es obligatorio. Minimo 2 caracteres'))
            return
        }
        if(sku === '') {
            dispatch(setError('El sku es obligatorio.'))
            return
        }
        if(units === '') {
            dispatch(setError('La contraseña es obligatorio.'))
            return
        }
        if(price === '' || price <= 0) {
            dispatch(setError('El precio es obligatorio. Mayor a cero'))
            return
        }
        dispatch(removeError())

        const newProduct = {
            id:new Date().getTime(),
            name:name,
            sku:sku,
            units:units,
            price:price
        }

        dispatch(startNewProduct(newProduct))
        reset()
    }
    return (
        <div className="modal fade" id="addProductModal" aria-labelledby="addProductModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addProductModalLabel">Crear producto</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {
                            (msgError) && <div className="alert alert-danger" role="alert">{msgError}</div>
                        }
                        <form onSubmit={handleAddProduct}>
                            <div className="form-group">
                                <label className="col-form-label">Nombre:</label>
                                <input type="text" className="form-control" name="name" value={name} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Sku:</label>
                                <input type="text" className="form-control" name="sku" value={sku} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Cantidad:</label>
                                <input type="text" className="form-control" name="units" value={units} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Precio:</label>
                                <input type="text" className="form-control" name="price" value={price} onChange={handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Crear</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
