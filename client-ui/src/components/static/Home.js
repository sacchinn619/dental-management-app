import React from 'react'
import {Carousel,Navbar,FormControl,Nav,DropdownButton,Dropdown,Button,Form,CardDeck,Card} from 'react-bootstrap'
import {connect } from 'react-redux'
import {startUserLogout } from '../../actions/userAction'
import { FcCalendar,FcGoogle } from 'react-icons/fc'
import { ImFacebook2,ImInstagram } from 'react-icons/im'
import { FaTooth } from 'react-icons/fa'
import { FaTwitter } from "react-icons/fa"
import { FcDonate } from "react-icons/fc"
import { GrGroup } from "react-icons/gr"
import { GrMailOption } from "react-icons/gr"
import { SiWorldhealthorganization } from "react-icons/si"
import { ImYoutube2 } from "react-icons/im"
function Home(props){
    const handleLogout=()=>{
      props.dispatch(startUserLogout())
    }
    const handleClick=()=>{
      props.history.push('/appointment')
    }
return(<div><h2 class="text-info">Dental Clinic <FaTooth style={{ color: 'black',fontSize: '36px' }}/><a href='https://www.google.com'><FcGoogle style={{ marginLeft: '48rem' }}/></a> <a href='https://www.facebook.com'><ImFacebook2 style={{ color: 'blue' }}/> </a> <a href='https://www.instagram.com'><ImInstagram style={{ color: 'black' }}/></a></h2>
     <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
    
    { Object.keys(props.user).length!==0 ?(<div>
      <Nav className="mr-auto">
      <Nav.Link href="/logout" onClick={handleLogout}>Logout</Nav.Link>
      <Nav.Link href="/bookings">Bookings</Nav.Link></Nav></div>):
      (<div>
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
      </div>)
      }
    <FcCalendar style={{ fontSize: '22px'}}/>
    <DropdownButton variant="primary" title="Book Appointment" style={{ marginLeft: '18rem' }}>
  <Dropdown.Item href="/appointment">Book Now</Dropdown.Item>
  <Dropdown.Item href="/products">Products</Dropdown.Item>
  <Dropdown.Item href="/reviews">Reviews</Dropdown.Item>
  <Dropdown.Item href="/chat">Chat With Us!</Dropdown.Item>
</DropdownButton>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.ekdantamclinic.com/wp-content/themes/ekdantam/images/slide_05.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.kokilabenhospital.com/timthumb.php?src=https://s3-us-west-2.amazonaws.com/kdahweb-static.kokilabenhospital.com/kdah-2019/slider/15799744911957.jpg&w=1300&h=500&zc=1&q=95&s=1"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.kokilabenhospital.com/timthumb.php?src=https://s3-us-west-2.amazonaws.com/kdahweb-static.kokilabenhospital.com/kdah-2019/slider/15799744912574.jpg&w=1300&h=500&zc=1&q=95&s=1"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h2 class="text-center">Our Treatments And Services</h2>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/19-195405_service-icon-dental-fillings-icon-hd-png-download.png" />
    <Card.Body>
      <Card.Title>Dental Fillings</Card.Title>
      <Card.Text>
      A filling is also used to repair broken or 
      cracked tooth and the teeth which wear off due to dental habits like teeth grinding, nail biting 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <button class="btn btn-danger" onClick={()=>{handleClick()}}> Book Appointment</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://icons-for-free.com/iconfiles/png/512/dental+treatment+dentist+dentistry+root+canal+teeth+tooth-1320165690805672917.png" />
    <Card.Body>
      <Card.Title>Root Canal Treatments</Card.Title>
      <Card.Text>
      The outer portion or Crown of a tooth is a three-layered structure namely – Enamel, Dentin & Pulp.
If the tooth decay is limited to the first two layers, it can be corrected with Filling/ Restoration
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button class="btn btn-danger" onClick={()=>{handleClick()}}> Book Appointment</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.absolutesmiles.com.au/wp-content/uploads/2019/01/icon-tooth-extractions-1.png" />
    <Card.Body>
      <Card.Title>Wisdom Teeth Removal</Card.Title>
      <Card.Text>
      Wisdom teeth often known as third molars are the last teeth to erupt.
      One usually gets them in late teens or early twenties
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button class="btn btn-danger" onClick={()=>{handleClick()}}> Book Appointment</button>
    </Card.Footer>
  </Card>
</CardDeck>

<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.durbandentalcentre.co.uk/wp-content/uploads/2016/05/clear-aligner.jpg" />
    <Card.Body>
      <Card.Title>Braces & Aligmers</Card.Title>
      <Card.Text>
      Dental braces are appliances which are used to align or
      straighten the teeth and guide the teeth to the corrected position
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button class="btn btn-danger" onClick={()=>{handleClick()}}> Book Appointment</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.absolutesmiles.com.au/wp-content/uploads/2019/01/icon-dental-implants-1.png" />
    <Card.Body>
      <Card.Title>dental Implants</Card.Title>
      <Card.Text>
      Dental implants are easily the most popular and also the ideal solution, for replacing your missing tooth/teeth.
      They have definitely changed the course of dentistry in the last quarter of a century or so
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button class="btn btn-danger" onClick={()=>{handleClick()}}> Book Appointment</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://typebyvox.com/pic_index/dentist.png" />
    <Card.Body>
      <Card.Title>kids Dentistry</Card.Title>
      <Card.Text>
      At the age of 6-7 years, humans start losing their milk teeth and the permanent set of teeth start emerging. 
      Because the milk teeth will eventually fall off, some parents tend to ignore taking their child to a dentist.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button class="btn btn-danger" onClick={()=>{handleClick()}}> Book Appointment</button>
    </Card.Footer>
  </Card>
</CardDeck>
<div class="container" style={{backgroundColor:"lightblue", height:"200px"}}>
  <div class="row">
    <div class="col-md-4">
    <h2 >Support</h2>
    <FcDonate style={{ fontSize: '36px', marginBottom:9 }}/> Donate<br/>
    <ImYoutube2 style={{ fontSize: '46px' }}/> our Channel
    </div>
    <div class="col-md-4">
    <h2>Association</h2>
    <GrGroup style={{ fontSize: '36px',color: 'blue' ,marginBottom:9 }}/> About Us<br/>
    <GrMailOption style={{ fontSize: '36px', color:"orange",marginBottom:9}}/> Mail Us<br/>
    <SiWorldhealthorganization style={{ fontSize: '36px'}}/> Choose Version

    </div>
    <div class="col-md-4">
    <h2>Follow Us</h2>
    <FcGoogle style={{ fontSize: '26px',marginBottom:9 }}/> Google<br/>
    <ImFacebook2 style={{ color: 'blue',fontSize: '26px',marginBottom:9 }}/>Facebook<br/>
    <ImInstagram style={{ color: 'green',fontSize: '26px',marginBottom:9 }}/>Instagram<br/>
    <FaTwitter style={{ color: 'black',fontSize: '26px'}}/>Twitter
    </div>

  </div>
  {/* <h3>This Is A Footer</h3> */}

</div>
</div>
)
}

const mapStateToProps=(state)=>{
  return{
       user: state.user
  }
  }
  
  export default connect(mapStateToProps)(Home)
