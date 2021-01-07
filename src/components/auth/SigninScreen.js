import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../../actions/auth'
import { showLogin, showRegister } from '../../actions/modal'
import { removeError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'

export const SigninScreen = () => {
    
    const dispatch = useDispatch()
    const {msgError} = useSelector(state => state.ui)
    const [formValues, handleInputChange] = useForm({
        email:'',
        password:''
    })

    const { email, password } = formValues
    
    const handleStartLogin = (e) => {
        e.preventDefault()
        dispatch(startLogin(email, password))
        
    }
    const handleShowRegister = () => {
        dispatch(removeError())
        dispatch(showRegister())
    }
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Iniciar sesión</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeModalAuth">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            {
                (msgError) && <div className="alert alert-danger" role="alert">{msgError}</div>
            }
                <form onSubmit={handleStartLogin}>
                    <div className="form-group">
                        <label className="col-form-label">Correo:</label>
                        <input type="text" className="form-control" name="email" value={email} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Contraseña:</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                </form>
                
                <span onClick={handleShowRegister}>Registrar</span>
            </div>
        </div>
    )
}
