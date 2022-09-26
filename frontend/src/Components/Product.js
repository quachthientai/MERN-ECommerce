import React from 'react'
import Rating from './Rating.js'
import { Card, CardImg, Button } from 'react-bootstrap'

export const Product = (props) => {
   
  return (
    <>
      <Card className="product-card rounded w-75 m-auto">
         <Card.Header >
            <span className="badge p-2 position-absolute start-0 top-0 bg-dark">{props.product.category}</span>
            <div className="text-center">
               <a href={`/product/${props.product.id}`}>
                  <CardImg variant="top" className="w-75 rounded thumbnail-image" src={props.product.image[1]} />
               </a>
            </div>
         </Card.Header>

         <a href={`/product/${props.product.id}`}>
            <Card.Body>
               <Card.Title as="h5" className="mx-auto d-flex align-items-center" style={{height:"50px"}}>
                  {props.product.name}
               </Card.Title>
               <Rating 
                  ratingStats={props.product.rating}
                  reviewStats={props.product.numReviews}
                  ratingColor={"#FDCC0D"}/>
               <Card.Text as="h3" className="mt-1 mb-3">{`$${props.product.price}`}</Card.Text>
               <Button variant="dark" className="fs-6 px-3 py-2 rounded" style={{margin:"0 auto"}}>ADD TO CART</Button>
            </Card.Body>
         </a>
         
            
         
      </Card>
    </>
  )
}
