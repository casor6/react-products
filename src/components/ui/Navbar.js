import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { startLoadingProducts, startSearchProduct } from '../../actions/products'
import { useForm } from '../../hooks/useForm'
import { ModalProduct } from '../products/ModalProduct'
import { Modal } from './ModalAuth'

export const Navbar = () => {
    
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const [formValues, handleInputChange] = useForm({
        search:'',
    })

    const { search } = formValues
    
    const handleLogout = () => {
        dispatch(startLogout())
        dispatch(startLoadingProducts())
    }

    const changeSearch = () => {
        
        dispatch(startSearchProduct(search))
    }
    return (
        <nav className="navbar navbar-dark bg-dark">
            {
                (!auth) ?
                (<form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar producto" aria-label="Search" name="search" value={search} onChange={handleInputChange} onKeyUp={changeSearch} />
                {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>)
                : (<div className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#addProductModal">Agregar producto</button>
                </div>)
            }
            {
                (!auth) && <span className="navbar-brand" data-toggle="modal" data-target="#exampleModal">Iniciar sesión</span>
            }
            {
                (auth) && <span className="navbar-brand" onClick={handleLogout}>Cerrar sesión</span>
            }
            
            <Modal />
            <ModalProduct />
        </nav>
    )
}
