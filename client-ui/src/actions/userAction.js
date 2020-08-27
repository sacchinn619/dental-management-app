import axios from '../config/axios'

export const setUser=(user)=>{
    return{ type:'SET_USER', payload: user }
}

//for preventing data while Reload//
export const startGetUser=()=>{
    return(dispatch)=>{
     axios.get('api/users/account', {
         headers:{
             'authorization': localStorage.getItem('authToken')
         }
     })
     .then((response)=>{
         const user=response.data
         dispatch(setUser(user))
     })
     .catch((err)=>{
         alert(err)
     })
    }
}

//Register a user
export const startRegisterUser=(formData,redirect)=>{
   return (dispatch)=>{
    axios.post('api/users/register',formData)
    .then((response)=>{
        console.log('here',response)
           if(response.data.hasOwnProperty('errors'))  {
               alert(response.data.message)
           }     else{
               alert('You have sucessfully registered')
               redirect()
           }
    })
    .catch((err)=>{
        console.log(err)
    })
   }
}
//Login a User
export const startLoginUser=(formData,redirect)=>{
    return function(dispatch){
        axios.post('api/users/login',formData)
    .then((response)=>{
         if(response.data.hasOwnProperty('errors')){
              alert(response.data.errors)
         }else{
             alert('Sucessfully Logged in')
            localStorage.setItem('authToken',response.data.token)
            //Another trip to server with the auth token to get the user data//
            axios.get('api/users/account',{
                headers:{
                    'authorization':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                const user= response.data
                dispatch(setUser(user))
                redirect()
                // console.log('jesus Christ is the lord',response.data)
            })
            .catch((err)=>{
                alert(err)
            })
            // redirect()
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    }
    export const startUserLogout=()=>{
        return function(dispatch){
                 localStorage.removeItem('authToken')
                  dispatch(setUser({}))
                  window.location.href="/"
                  alert('you have been logged out sucessfully')
              }
    }
        