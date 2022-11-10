import React, {useState, useEffect} from "react";
import {categories} from "../dummyProduct.js";
import axios from "axios";
import Jumbotron from "../Components/Jumbotron.js";
import {Row, Col, Container} from "react-bootstrap";
import {Product} from "../Components/Product.js";
import Categories from "../Components/Categories.js";

const HomeScreen = () => {
  const randSeed = Math.floor(Math.random() * Object.values(categories).length);
  const randCategory = Object.keys(categories[randSeed]).toString();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  };

  const featureArr = [];
  Object.values(products).forEach((p) => {
    for(let i = 0; i < p.length; i++){
      if(p[i].isFeatured){
        featureArr.push(p[i])
      }
    }
  })
  
  return (
    <Container>
      <Jumbotron rand={randCategory} />
      <div className="mb-5">
        <h1 className="text-center mx-2 py-4">Shop by Category</h1>
        <Row>
          {categories.map((category) => {
            const name = Object.keys(category);
            const img = Object.values(category);
            return (
              <Col key={name} className="my-2" md={6} lg={4}>
                <Categories categoryImg={img} categoryName={name} />
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="mb-5">
        <h1 className="text-center mx-2 py-4">Feature Products</h1>
        <Row>
          {featureArr.map((product) => {
            return (
              <Col key={product.id} className="my-2" sm={12} md={6} lg={4}>
                <Product product={product} />
              </Col>
            );
          })}
          {Object.values(products).forEach((p) => {
            for(let i = 0; i < p.length; i++ ){
              if(p[i].isFeatured){
                // return (
                //   <Col key={p[i].id} className="my-2" sm={12} md={6} lg={4}>
                //     <Product product={p[i]} />
                //   </Col>
                // )
                console.log(p[i])
              }
            }
          })}
        </Row>
      </div>
    </Container>
  );
};

export default HomeScreen;
