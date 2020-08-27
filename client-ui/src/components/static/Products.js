import React from 'react'
import {CardGroup,Card,Button} from 'react-bootstrap'
function Products (props){
  const handleInfo=(id)=>{
    props.history.push(`/products/${id}`)
    
  }
return(
    <div>
        <h2>Jesus Christ Is The Lord:)</h2>
<CardGroup>
    <Card>
    <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/8/9/8904000911088.png?tr=w-500,pr-true" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={()=>{handleInfo("5f46623b436fcf1fb4428e87")}}>Buy Product</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://5.imimg.com/data5/UE/GA/MY-2597735/sensodyne-tooth-paste-500x500.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={()=>{handleInfo("5f466202436fcf1fb4428e86")}}>Buy Product</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i3.wp.com/www.icpahealth.com/wp-content/uploads/2018/09/RA-Thermoseal.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary"onClick={()=>{handleInfo("5f4661d4436fcf1fb4428e85")}}>Buy Product</Button>
    </Card.Footer>
  </Card>
</CardGroup>
<CardGroup>
    <Card>
    <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/8/9/8904000911088.png?tr=w-500,pr-true" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">Buy Product</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/8/9/8904000911088.png?tr=w-500,pr-true" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">Buy Product</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/8/9/8904000911088.png?tr=w-500,pr-true" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">Buy Product</Button>
    </Card.Footer>
  </Card>
</CardGroup>
   </div>
)
}

export default Products