import React from 'react'
import {connect} from 'react-redux'
import { Chart } from 'react-google-charts'
function Dashboard (props){
    return(
        <div class="container">
            <h2 class="text-primary" style={{marginLeft:"20%",textDecorationLine: 'underline'}}>Dashboard-Total Appointments {props.appointment.length}</h2>
            <div class ="row">
                <div class ="col-md-6">
            <h2 >Accepted Appointments</h2>
            <table class="table table-striped">
  <thead>
    <tr class="table-secondary">
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Slot</th>
      <th scope="col">Button</th>
    </tr>
  </thead>
  <tbody>
    
  {props.appointment.filter((ele)=>{
        return  ele.status =='Accepted'}).map((ele)=>{
        return ( <tr class="table-warning">
            <td>{ele.name}</td>
            <td>{ele.contact}</td>
            <td>{ele.slot}</td>
           <td><button class="btn btn-success">{ele.status}</button></td> 
            </tr>)
        })}
    
 </tbody>
</table>
        </div>
        <div class ="col-md-6">
            <h2>Rejected Appointments</h2>
            <table class="table table-striped table-dark">
  <thead>
  <tr>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Slot</th>
      <th scope="col">Button</th>
    </tr>
  </thead>
  <tbody>
  {props.appointment.filter((ele)=>{
        return  ele.status =='Rejected'}).map((ele)=>{
        return ( <tr>
            <td>{ele.name}</td>
            <td>{ele.contact}</td>
            <td>{ele.slot}</td>
           <td><button class="btn btn-danger">{ele.status}</button></td> 
            </tr>)
        })}
 </tbody>
</table>
        </div>
      
        </div>
        <div class="row">
        <div class ="col-md-6">
            <h2>Pending Appointments</h2>
            <table class="table table-striped">
  <thead>
    <tr class="table-danger">
    <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Slot</th>
      <th scope="col">Button</th>
    </tr>
  </thead>
  <tbody>
  {props.appointment.filter((ele)=>{
        return  ele.status =='pending'}).map((ele)=>{
        return ( <tr class="table-primary">
            <td>{ele.name}</td>
            <td>{ele.contact}</td>
            <td>{ele.slot}</td>
           <td><button class="btn btn-info">{ele.status}</button></td> 
            </tr>)
        })}
 </tbody>
</table>
        </div>
        <div class="col-md-6">
        <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Appointments', 'Appointments per Day'],
    ['Total tickets', props.appointment.length],
    ['Accepted',props.appointment.filter((ele)=>{
        return ele.status=='Accepted'
    }).length],
    ['Rejected',props.appointment.filter((ele)=>{
        return ele.status=='Rejected'
    }).length],
    ['Pending',props.appointment.filter((ele)=>{
        return ele.status=='pending'
    }).length],
    
  ]}
  options={{
    title: 'Daily Appointments',
    is3D:true
  }}
  rootProps={{ 'data-testid': '1' }}
/>

        </div>
        </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
       appointment:state.appointment
    }
}
export default connect(mapStateToProps) (Dashboard)