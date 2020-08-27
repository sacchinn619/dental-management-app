import React from 'react'
import Calendar from 'react-calendar'
import {connect} from 'react-redux'
import 'react-calendar/dist/Calendar.css'
import{Alert} from 'react-bootstrap'
import moment from 'moment'
import {startAppointment} from '../../actions/appointmentAction'
class Appointment extends React.Component{
 constructor(props){
     super(props)
     this.state={
        date: new Date(),
        name:'',
        email:'',
        contact:'',
        description:'',
        slot:'',
        status:'pending'
     }
     }
   

onChange = (date) => {
    this.setState({date})
}
 handleChange=(e)=>{
this.setState({
    [e.target.name]:e.target.value
})
}
handleSubmit=(e)=>{
    e.preventDefault()
    
    const formData={
        date:moment(this.state.date).format('YYYY-MM-DD'),
        name:this.state.name,
        email:this.state.email,
        contact:this.state.contact,
        description:this.state.description,
        slot:this.state.slot,
        status:this.state.status

    }
    const redirect=()=>{
        return  this.props.history.push('/')
     }
         this.props.dispatch(startAppointment(formData,redirect))

    this.setState({
        date: new Date(),
        name:'',
        email:'',
        contact:'',
        description:'',
        slot:''
    }
    )
}

render(){
    return(
        <div class="container">
         <div class ="row">
        <div class="col-6">
            <h2 class="p-3 mb-2 bg-info text-white"> Select Your Dates To Book Your Appointments</h2>
            <Calendar onChange={this.onChange} value={this.state.date}/>
            </div>
            <div class="col-6">
            <div class="form-group" >
            <form onSubmit={this.handleSubmit}>
                <h3 class="p-3 mb-2 bg-warning text-dark">Book Your Appointments</h3>
            <label class="text-dark">Name</label>
            <input type="text" name="name"onChange={this.handleChange} value={this.state.name} class="form-control" style={{width:"80%"}}/><br/>
            <label class="text-dark">Email</label>
            <input type="text" name="email" onChange={this.handleChange} value={this.state.email} class="form-control" style={{width:"80%"}}/><br/>
            <label class="text-dark">Contact</label>
            <input type="text" name="contact" onChange={this.handleChange} value={this.state.contact} class="form-control"style={{width:"80%"}}/><br/>
            <label class="text-dark">Description</label>
            <input type="text" name="description" onChange={this.handleChange} value={this.state.description}class="form-control"style={{width:"80%"}}/><br/>
            <label class="text-dark">Slot</label><br/>
                    <select class="form-control" value={this.state.slot} name="slot" onChange={this.handleChange} style={{width:"80%"}}> 
                    <option value="">---Select---</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    </select><br/>
            <input type="submit" value="submit" class="btn btn-danger"/>
            
                    
            </form>
            </div>
        </div>
        </div>
        <Alert variant="info">
  <Alert.Heading>Hey, you will be notified. Once booking is confirmed!</Alert.Heading>
       </Alert>
        </div>)

}
}


export default connect() (Appointment)