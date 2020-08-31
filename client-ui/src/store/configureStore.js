import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import appointmentReducer from '../reducers/appointmentReducer'
import reviewsReducer from '../reducers/reviewsReducer'

const configureStore=()=>{
const store=createStore(combineReducers({
   user:userReducer,
   appointment:appointmentReducer,
   reviews:reviewsReducer
}),applyMiddleware(thunk))
return store
}
export default configureStore
