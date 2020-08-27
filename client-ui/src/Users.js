import React from 'react'
import axios from './config/axios'


class Users extends React.Component{
    constructor(){
        super()
        this.state={
         users:[]
        }
    }
    componentDidMount(){
        axios.get('/api/users/account')
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        .catch((err)=>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <h3>listing users-{this.state.users.length}</h3>
              <h3>Users-name-DB{this.state.users.map((ele)=>{
                  return <h4>{ele.name}</h4>
              })}</h3>  
            </div>
        )
    }
}
export default Users