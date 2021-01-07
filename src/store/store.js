import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { modalReducer } from '../reducers/modalReducer';
import { productReducer } from '../reducers/productReducer';
import { uiReducer } from '../reducers/uiReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    modal: modalReducer,
    product: productReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)