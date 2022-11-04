import React, {useEffect, useState} from "react";
import {Col, Container, ListGroup, Row, Card, Button} from "react-bootstrap";
import Rating from "../Components/Rating.js";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";

function ProductScreen() {
  let {category, id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const {data} = await axios.get(`/api/products/${category}/${id}/`);
    setProduct((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  return (
    <Container className="my-4" >
      <Link className="btn btn-light mb-3" to="/">
        Go back
      </Link>

      <Row className="d-flex">
        <Col md={6}>
          <Card style={{border: "none"}}>
            <Card.Header className="d-flex" style={{border: "none"}}>
              <Card.Img
                variant="top"
                style={{maxWidth: "100%", width: "400px", height: "400px"}}
                className="m-auto thumbnail-image"
                src={product.image && product.image[1]}
              />
            </Card.Header>
          </Card>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                ratingStats={product.rating}
                reviewStats={product.numReviews}
                ratingColor={"#FDCC0D"}
              />
            </ListGroup.Item>
            <ListGroup.Item>{`Price: $${product.price}`}</ListGroup.Item>
            <ListGroup.Item>{`Descriptions: ${
              product.description &&
              product.description[0] + product.description[1]
            }`}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? "In-stock" : "Out-of-stock"}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Button variant="dark">ADD TO CART</Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
