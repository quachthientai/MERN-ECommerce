import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {useParams} from "react-router-dom";
import { Product } from "../Components/Product.js";
import {products} from "../dummyProduct.js"

function CategoryShopScreen() {
  const {category} = useParams();
  let categoryArr;

  for (let i = 0; i < products.length; i++) {
    const temp = Object.keys(products[i]);

    for (const [key, value] of Object.entries(products[i])) {
      if (key === temp.toString() && key === category) {
        categoryArr = value;
        break;
      }
    }
  }
  
  return (
    <Container className="mb-5 mt-4">
      <h1 className="text-center mx-2 py-4">{category} Products</h1>
      <Row>
        {categoryArr.map((product) => {
          return (
            <Col key={product.id} className="my-2" sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row>
    </Container>
  );
}

export default CategoryShopScreen;
