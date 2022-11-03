import axios from "axios";
import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {Product} from "../Components/Product.js";

function CategoryShopScreen() {
  const {category} = useParams();
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get(`/api/products/${category}`);
    setProductsCategory(res.data);
  };

  return (
    <Container className="mb-5 mt-4">
      <h1 className="text-center mx-2 py-4">{category} Products</h1>
      <Row>
        {productsCategory &&
          productsCategory.map((product) => {
            return (
              <Col key={product.id} className="my-2" sm={12} md={6} lg={4}>
                <Product product={product} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default CategoryShopScreen;
