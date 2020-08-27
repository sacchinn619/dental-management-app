import axios from '../config/axios'

export const setAppointment=(appointment)=>{
    return{ type:'SET_APPOINTMENT', payload: appointment }
}
export const startAppointment=(formData,redirect)=>{
    return (dispatch)=>{
     axios.post('api/users/appointment',formData)
     .then((response)=>{
         console.log('jesus',response.data)
            if(response.data.hasOwnProperty('errors'))  {
                alert(response.data.message)
            }     else{
                alert('You have sucessfully booked your Appointment')
                dispatch(setAppointment(response.data))
                redirect()

            }
     })
     .catch((err)=>{
         console.log(err)
     })
    }
 }
 export const startGetAppointment=()=>{
    return(dispatch)=>{
     axios.get('api/users/appointments', {
        headers:{
            'authorization': localStorage.getItem('authToken')
        }})
     .then((response)=>{
         const appointment=response.data
         dispatch(setAppointment(appointment))
     })
     .catch((err)=>{
         alert(err)
     })
    }
}
export const editAppointment=(id,data)=>{
    return {type:'EDIT_APPOINTMENT',payload:{id,data}
}
}
export const startEditAppointment=(id,status)=>{
     return function(dispatch){
     axios.put(`/api/users/appointment/${id}`,{status})
     .then((response)=>{
         const data=response.data
         console.log(data)
        dispatch (editAppointment(id,data))
     })
     .catch((err)=>{
         console.log(err)
     })
     }
} 