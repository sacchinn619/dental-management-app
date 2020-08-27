import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import appointmentReducer from '../reducers/appointmentReducer'

const configureStore=()=>{
const store=createStore(combineReducers({
   user:userReducer,
   appointment:appointmentReducer
}),applyMiddleware(thunk))
return store
}
export default configureStore