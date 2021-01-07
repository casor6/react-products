import React from 'react'
import { useSelector } from 'react-redux'
import { SigninScreen } from '../auth/SigninScreen'
import { SignupScreen } from '../auth/SignupScreen'

export const Modal = () => {
    
    const {show} = useSelector(state => state.modal)

    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                {
                    (show) ? <SigninScreen />
                    : <SignupScreen />
                }
                
                
            </div>
        </div>
    )
}
