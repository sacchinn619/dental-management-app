import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/userAction'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
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
               email:this.state.email,
               password:this.state.password
           }
           console.log(formData)
           const redirect=()=>{
           return  this.props.history.push('/')
        }
            this.props.dispatch(startLoginUser(formData,redirect))

           this.setState({
            email:'',
            password:''
           })
           
        }
        
    
    render(){
        return(<div>
            <h2>Login with us-Jesus Christ :)</h2>
            <form onSubmit={this.handleSubmit}>
            <div class="form-group">
                <label>Email</label>
              <input  type="text" name="email" class="form-control" value={this.state.email} onChange={this.handleChange}/> <br/>
                <label>Password</label>
             <input type="password" name="password" class="form-control" value={this.state.password} onChange={this.handleChange}/><br/></div>
             <input  type="submit" value="login" class="btn btn-primary"/>
            </form>
             </div>)
    }
}
export default connect() (Login)
              
             