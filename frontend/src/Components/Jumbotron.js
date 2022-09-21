import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import products from '../dummyProduct.js'

const Jumbotron = () => {

   const randNum = Math.floor(Math.random() * products.length)
   const randCategory = products[randNum];
   const randKey = Object.keys(randCategory) 
   const randObj = randCategory[randKey]

  return (
    <Carousel variant="dark" bg="dark" interval={null} >
      {randObj.map(product => {
         const randNum = Math.floor(Math.random() * product.description.length)
         return (
            <Carousel.Item >
               <div className="divflex d-block" style={{border:"green solid 1px"}}>
                  <img
                     className="w-100 mx-auto my-0" style={{height:"250px"}}
                     src={product.image}
                     alt="First slide"
                  />
                  
                  <div className="w-100 m-auto" style={{border:"red solid 1px"}}>
                        <div className="w-50 text-center m-auto" style={{border:"blue solid 1px"}}>
                           <p className='fw-bold fs-5'>{product.name}</p>
                           <p className='fs-6'>{product.tagLine}</p>
                           <p className='mt-3'>{product.description[randNum]}</p>
                           <Button variant="dark mt-3" style={{visibility: "hidden"}}>SHOP NOW</Button>
                        </div>
                  </div>

                  
               </div>
            </Carousel.Item>
         )
         
      })}
    </Carousel>
  )
}

export default Jumbotron