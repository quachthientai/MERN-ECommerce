import React from 'react'
import products from '../dummyProduct.js'
import Jumbotron from '../Components/Jumbotron.js'
import { Row, Col, Card, CardImg, Button } from 'react-bootstrap'

const HomeScreen = () => {
  const featureArr = []

  for(let i = 0; i < products.length; i++){
    const category = products[i]
    const key = Object.keys(category);

    category[key].map(item => {
      if(item.isFeatured){
        featureArr.push(item)
      }
    })
  }



  return (
    <>
      <h1 className="text-center mx-2 py-3">Feature Products</h1>
      <Row>
        {featureArr.map(product => (
          <Col className="my-2" sm={12} md={6} lg={4}>
            <Card>
              <CardImg variant="top" src={product.image} style={{width:"280px", height:"180px", margin:"0 auto"}}/>
              <Card.Body className="text-center">
                <Card.Title className="text-center mx-auto" style={{height:"40px"}}>{product.name}</Card.Title>
                <Card.Text className="text-center fs-4">{`$${product.price}`}</Card.Text>
                <Button variant="primary" style={{margin:"0 auto"}}>ADD TO CART</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen