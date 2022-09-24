import React from 'react'
import { Row, Col, Card, Button, CardImg } from 'react-bootstrap'


const Categories = (props) => {
   return (
    <>
      <Card className="product-card  m-auto" >
         <Card.Header  >
            <Row>
               <Col className="d-flex align-items-center m-lg-0 m-md-0 m-sm-3">
                  <div >
                     <Card.Title className="text-uppercase" as="p" >{props.name}</Card.Title>
                     <Button variant="dark" size='sm' >SHOP NOW</Button>
                  </div>
               </Col>

               <Col>
                  <div  style={{ height:"10vh" ,float:"right"}}>
                     <img  className="m-md-0 m-lg-0 m-sm-3" style={{ maxHeight:"100%", maxWidth:"100%"}} src={props.img}/>
                  </div>
               </Col>
            </Row>
         </Card.Header>
      </Card>
    </>
  )
}

export default Categories
