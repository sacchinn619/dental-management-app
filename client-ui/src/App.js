import React from'react'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import Home from './components/static/Home'
import Products from './components/static/Products'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Appointment from './components/auth/Appointment'
import Bookings from './components/auth/Bookings'
import Show from './components/static/Show'
import Dashboard from './components/static/Dashboard'
import Reviews from './components/static/Reviews'
import Chat from './components/static/Chat'

function App (props){
    return(
        <BrowserRouter>
        <div className="container fluid">
          
          
          <Switch>
              <Route path="/" component={Home} exact ={true}/>
             <Route path="/login" component={Login} />
             <Route path ="/register" component={Register}/>
             <Route path="/appointment" component={Appointment}/>
             <Route path="/bookings" component={Bookings}/>
             <Route path="/products" component={Products} exact ={true}/>
             <Route path="/products/:id" component={Show}/>
             <Route path="/dashboard" component={Dashboard}/>
             <Route path="/reviews" component={Reviews}/>
             <Route path="/chat" component={Chat}/>
          </Switch>
        </div>
        </BrowserRouter>
        
    )
}
export default App
