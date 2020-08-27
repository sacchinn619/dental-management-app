import React from 'react'
import axios from '../../config/axios'
import {CardGroup,Card,Button} from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa"


class Show extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info:''
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/api/products/${id}`)
        .then((response)=>{
            const info=response.data
            this.setState({info})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    // Alternate Solution to (MAP) over an array, when state is an [] 
    // const data = response.data
    //             this.setState((prevState) => {
    //                 return {
    //                     info: [data].concat(prevState.info)
    //                 }
    //             })
render(){    
        return(
        <div><h3> Your Cart Information</h3>
 <CardGroup>
    <Card>
    <Card.Img variant="top" />
    <Card.Body>
        <Card.Title>{this.state.info.name}</Card.Title>
      <Card.Text>
        <h2> {this.state.info.name}</h2>
        <FaShoppingCart style={{fontSize:"90px",color:"orange"}}/>
        <h2>PRICE:{this.state.info.price} </h2>
        <h2>{this.state.info.description}</h2> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="danger">Buy Product</Button>
    </Card.Footer>
  </Card>
  </CardGroup>
        </div>
    )
}
}
export default Show