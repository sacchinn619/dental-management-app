import React from 'react'
import { Card } from 'antd'
import {connect} from 'react-redux'
import {startReviews} from '../../actions/reviewsAction'
import moment from 'moment'
import { AiTwotoneStar } from 'react-icons/ai'
class Reviews extends React.Component{
    constructor(props){
        super(props)
        this.state={
           name:'',
           reviews:''
        }
    }
    handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
    }
    handleSubmit=(e)=>{
        e.preventDefault()

        const formData={
            name:this.state.name,
            reviews:this.state.reviews
        }
        this.props.dispatch(startReviews(formData))
        
    this.setState({
            name:'',
            reviews:''
        })
        
    }
    render(){
    return(
        <div class =".container-fluid">
            <h2 class="text-success"> Customer Reviews</h2>
            <div class="row">
            <div class="col">
            {this.props.reviews.map((ele)=>{
                return (
                    <Card style={{ marginTop: 2 }} type={ele.name} title={ele.name} extra={moment(ele.createdAt).format('DD-MM-YYYY')}>
                                    {ele.reviews} <AiTwotoneStar style={{fontSize:"30px",color:"orange"}}/><AiTwotoneStar style={{fontSize:"30px",color:"orange"}}/><AiTwotoneStar style={{fontSize:"30px",color:"orange"}}/><AiTwotoneStar style={{fontSize:"30px",color:"orange"}}/>
                    </Card>
                )
            })} </div></div>
    <div class="row">
    <div class="col">
    <form onSubmit={this.handleSubmit} style={{bottom:"0px"}}>
    <lable class="font-weight-bold">Name</lable><br/>
        <input class="form-control" type="text" name="name" onChange={this.handleChange} style={{width:"30%"}} placeholder="type your name..."/><br/>
        <lable class="font-weight-bold">Write a review</lable><br/>
       <textarea class="form-control" type="text" name="reviews" onChange={this.handleChange}  style={{width:"30%",height:"100%"}} placeholder="write a review..."/><br/>
       <input class="btn btn-danger" type="submit" value="Submit"/>
    </form>
    </div>
    </div>
    </div>
    )
    }
}
 const mapStateToProps=(state)=>{
 return{
      reviews:state.reviews
 }
 }
export default connect(mapStateToProps)(Reviews)
