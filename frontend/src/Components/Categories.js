import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, CardImg } from 'react-bootstrap'


const Categories = (props) => {
   return (
    <>
      <Card className="product-card  m-auto" >
         <Card.Header  >
            <Row>
               <Col className="d-flex align-items-center m-lg-0 m-md-0 m-sm-3">
                  <div >
                     <Card.Title className="text-uppercase" as="p" >{props.categoryName}</Card.Title>
                     <Link to={`product/${props.categoryName}`}>
                        <Button variant="dark" size='sm' >SHOP NOW</Button>
                     </Link>
                  </div>
               </Col>

               <Col>
                  <div  style={{ height:"10vh" ,float:"right"}}>
                     <img  className="m-md-0 m-lg-0 m-sm-3" style={{ maxHeight:"100%", maxWidth:"100%"}} src={props.categoryImg}/>
                  </div>
               </Col>
            </Row>
         </Card.Header>
      </Card>
    </>
  )
}

Categories.propTypes = {
   categoryImg : PropTypes.array.isRequired,
   categoryName : PropTypes.array.isRequired
}

export default Categories
