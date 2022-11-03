import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Carousel, Button} from "react-bootstrap";

const Jumbotron = (props) => {
  const [productsCategory, setProductsCategory] = useState([])

  useEffect(() => {
    fetchProducts()
  },[])
  
  const fetchProducts = async () => {
    const res = await axios.get(`/api/products/${props.rand}`)
    setProductsCategory(res.data)
  }
  
  return (
    <Carousel variant="dark" bg="dark" interval={3000}>
      {productsCategory && productsCategory.map((product) => {
        return (
          <Carousel.Item key={product.id}>
            <div>
              <img
                className="carousel-img img-fluid w-50 float-end"
                style={{width: "400px", height: "600px"}}
                src={product.image[0]}
                alt="First slide"
              />

              <div
                className="caption w-50 position-absolute top-50"
                style={{marginTop: "-100px"}}
              >
                <div className="w-75 m-auto float-end">
                  <h1 className=" carousel-name fw-bold">{product.name}</h1>
                  <h4>{product.tagLine}</h4>
                  <p className="mt-3">{product.description[0]}</p>
                  <Link to={`/product/${product.category}`}>
                    <Button variant="dark mt-3">SHOP NOW</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Jumbotron;
