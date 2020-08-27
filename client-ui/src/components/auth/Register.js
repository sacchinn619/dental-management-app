import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:''
        }
    }
    
        handleChange=(e)=>{
            this.setState({
                [e.target.name]: e.target.value
            })

        }
        handleSubmit=(e)=>{
           e.preventDefault()
           
           const formData={
               username:this.state.username,
               email:this.state.email,
               password:this.state.password
           }
        //    console.log(formData)
           const redirect=()=>{
           return  this.props.history.push('/login')
        }
            this.props.dispatch(startRegisterUser(formData,redirect))

           this.setState({
            username:'',
            email:'',
            password:''
           })
           
        }
        
    
    render(){
        return(<div>
            <h2>Register with us</h2>
            <form onSubmit={this.handleSubmit}>
            <div class="form-group">
                <label>Username</label>
              <input type="text" name="username"  class="form-control"value={this.state.username} onChange={this.handleChange} /><br/>
                <label>Email</label>
              <input  type="text" name="email" class="form-control" value={this.state.email} onChange={this.handleChange}/> <br/>
                <label>Password</label>
             <input type="password" name="password" class="form-control" value={this.state.password} onChange={this.handleChange}/><br/></div>
             <input  type="submit" value="register" class="btn btn-primary"/>
            </form>
             </div>)
    }
}
export default connect() (Register)
              
             