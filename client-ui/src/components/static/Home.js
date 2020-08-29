import React from 'react'
import {Carousel,Navbar,FormControl,Nav,DropdownButton,Dropdown,Button,Form,CardDeck,Card} from 'react-bootstrap'
import {connect } from 'react-redux'
import {startUserLogout } from '../../actions/userAction'
import { FcCalendar,FcGoogle } from 'react-icons/fc'
import { ImFacebook2,ImInstagram } from 'react-icons/im'
import { FaTooth } from 'react-icons/fa'
function Home(props){
    const handleLogout=()=>{
      props.dispatch(startUserLogout())
    }
return(<div><h2 class="text-info">Dental Clinic <FaTooth style={{ color: 'black',fontSize: '36px' }}/><FcGoogle style={{ marginLeft: '48rem' }}/> <a href='https://www.facebook.com'><ImFacebook2 style={{ color: 'blue' }}/> </a> <ImInstagram style={{ color: 'black' }}/></h2>
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
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
    <Card.Img variant="top" src="https://png.pngtree.com/element_our/png/20181109/millions-of-png-images-backgrounds-and-vectors-for-free-download-png_234087.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/09/14/20/50/teeth-1670434_960_720.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.vippng.com/png/full/153-1536784_dental-clipart-clean-tooth-brush-teeth.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>

<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://cdn.imgbin.com/3/3/21/imgbin-cartoon-tooth-pathology-healthy-teeth-white-tooth-animated-illustration-wZp25Gcxc3wUPmuUTFcB91rCw.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.netclipart.com/pp/m/318-3186054_dentist-clipart-dental-work-beautiful-smile-teeth-png.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://e7.pngegg.com/pngimages/273/610/png-clipart-dentistry-human-tooth-dental-public-health-smile-text-people-thumbnail.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
)
}

const mapStateToProps=(state)=>{
  return{
       user: state.user
  }
  }
  
  export default connect(mapStateToProps)(Home)