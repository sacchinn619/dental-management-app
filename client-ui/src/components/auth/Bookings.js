import React from 'react'
import {connect}  from 'react-redux'
import moment from 'moment'
import Swal from 'sweetalert2'
import {startEditAppointment} from '../../actions/appointmentAction'
class Bookings extends React.Component{
  constructor(props){
    super(props)
    this.state={
     
    }
  }
   handleAccept=(id,status)=>{
    const confirm= window.confirm("Are you sure?")
    if(confirm){
    Swal.fire({
      position: 'top-middle',
      icon: 'success',
      title: `Booking ${id} Accepted with status${status}`,
      showConfirmButton: false,
      timer:1500
      
    })
  }
  this.props.dispatch(startEditAppointment(id,status))
}
//  const redirect=()=>{
//     props.history.push('/')
//   }
   handleRemove=(id,status)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          `your ${id} has been deleted with status ${status}`,
          'success',
          this.props.dispatch(startEditAppointment(id,status))
        )
      }
    })
    
  }
  render(){
    return(
        <div>
            <h2 class="text-primary"> Listing All The Appointments</h2>
            <h4 class="p-3 mb-2 bg-danger text-white">Total Appointments-{this.props.appointment.length}</h4>
            <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col" class="text-warning">Date</th>
      <th scope="col"class="text-warning">Name</th>
      <th scope="col"class="text-warning">Contact</th>
      <th scope="col"class="text-warning">Description</th>
      <th scope="col"class="text-warning">Slot</th>
      <th scope="col"class="text-warning">Booking Status</th>
      {/* <th scope="col"class="text-warning">Status</th> */}
    </tr>
  </thead>
  <tbody>
    
    {this.props.appointment.map((ele)=>{
    return(<tr key={ele._id}>
        <td>{moment(ele.date).format('DD-MM-YYYY')}</td>
        <td>{ele.name}</td>
        <td>{ele.contact}</td>
        <td>{ele.description}</td>
        <td>{ele.slot}</td>
        <td>
        {ele.status =='pending'? (
        <div><button onClick={()=>{this.handleAccept(ele._id,'Accepted')}} class="btn btn-success">Accept</button><button class="btn btn-danger" onClick={()=>{this.handleRemove(ele._id,'Rejected')}}>Reject</button></div>):
        (<div>{ele.status=='Accepted'?(<button class="btn btn-success">Accepted</button>):(<button class="btn btn-danger">Rejected</button>)}</div>)}
        </td>
       </tr>)
    })}
    
   
  </tbody>
</table>

        </div>
    )}
}
const mapStateToProps=(state)=>{
   return{
    appointment:state.appointment
   } 
}
export default  connect(mapStateToProps) (Bookings)