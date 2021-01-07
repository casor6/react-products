import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startRegister } from '../../actions/auth'
import { showLogin } from '../../actions/modal'
import { removeError, setError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'

export const SignupScreen = () => {
    
    const dispatch = useDispatch()
    const {msgError} = useSelector(state => state.ui)
    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    })

    const { name, email, password } = formValues
    
    const handleStartRegister = (e) => {
        e.preventDefault()
        dispatch(removeError())
        if(name === '' || name.length < 2) {
            dispatch(setError('El nombre es obligatorio. Minimo 2 caracteres'))
            return
        }
        if(email === '') {
            dispatch(setError('El correo es obligatorio.'))
            return
        }
        if(password === '') {
            dispatch(setError('La contraseña es obligatorio.'))
            return
        }
        dispatch(removeError())
        dispatch(startRegister(name, email, password))
    }
    const handleShowLogin = () => {
        dispatch(removeError())
        dispatch(showLogin())
    }
    
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Crear cuenta</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeModalAuth">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {
                    (msgError) && <div className="alert alert-danger" role="alert">{msgError}</div>
                }
                <form onSubmit={handleStartRegister}>
                    <div className="form-group">
                        <label className="col-form-label">Nombre:</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Correo:</label>
                        <input type="text" className="form-control" name="email" value={email} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Contraseña:</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={handleInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                </form>
                <span onClick={handleShowLogin}>Ya tengo cuenta</span>
            </div>
        </div>
    )
}
