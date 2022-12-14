import React from "react";
import {products, categories} from "../dummyProduct.js";
import Jumbotron from "../Components/Jumbotron.js";
import {Row, Col, Button, Container} from "react-bootstrap";
import {Product} from "../Components/Product.js";
import Categories from "../Components/Categories.js";

const HomeScreen = () => {
  const featureArr = [];

  for (let i = 0; i < products.length; i++) {
    const category = products[i];
    const key = Object.keys(category);

    category[key].map((item) => {
      if (item.isFeatured) {
        featureArr.push(item);
      }
    });
  }

  return (
    <Container>
      <Jumbotron />
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
        </Row>
      </div>
    </Container>
  );
};

export default HomeScreen;
