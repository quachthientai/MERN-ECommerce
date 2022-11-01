import React from "react";
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  CardImg,
  Card,
  Button,
} from "react-bootstrap";
import Rating from "../Components/Rating.js";
import {useParams} from "react-router-dom";
import {products} from "../dummyProduct.js";
import CardHeader from "react-bootstrap/esm/CardHeader.js";
import { Link } from "react-router-dom";


function ProductScreen() {
  let {category, id} = useParams();
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
  
  const product = categoryArr.find((p) => p.id === id);

  return (
    <Container className="mt-4">
      <Link className="btn btn-light mb-3" to='/'>
        Go back
      </Link>
      <Row className="d-flex">
        <Col md={6}>
          <Card style={{border: "none"}}>
            <CardHeader className="d-flex" style={{border: "none"}}>
              <CardImg
                variant="top"
                style={{maxWidth: "100%", width: "400px", height: "400px"}}
                className="m-auto thumbnail-image"
                src={product.image[1]}
              />
            </CardHeader>
          </Card>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>{product.name}</h2>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                ratingStats={product.rating}
                reviewStats={product.numReviews}
                ratingColor={"#FDCC0D"}
              />
            </ListGroupItem>
            <ListGroupItem>{`Price: $${product.price}`}</ListGroupItem>
            <ListGroupItem>{`Descriptions: ${product.description[0] + product.description[1]}`}</ListGroupItem>
          </ListGroup>
        </Col>

        <Col>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Price:</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock > 0 ? "In-stock" : "Out-of-stock"}</Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Button variant="dark">ADD TO CART</Button>
              </Row>
              
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
