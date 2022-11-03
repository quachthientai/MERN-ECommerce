import React from "react";
import Rating from "./Rating.js";
import PropTypes from "prop-types";
import {Card, CardImg} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Product = (props) => {
  return (
    <>
      <Card className="product-card rounded w-75 m-auto">
        <Card.Header>
          <span className="badge p-2 position-absolute start-0 top-0 bg-dark">
            {props.product.category}
          </span>
          <div className="text-center">
            <Link
              to={`/products/${props.product.category}/${props.product.id}`}
            >
              <CardImg
                variant="top"
                className="w-75 rounded thumbnail-image"
                src={props.product.image[1]}
              />
            </Link>
          </div>
        </Card.Header>

        <Link to={`/products/${props.product.category}/${props.product.id}`}>
          <Card.Body>
            <Card.Title
              as="h5"
              className="mx-auto d-flex align-items-center"
              style={{height: "50px"}}
            >
              {props.product.name}
            </Card.Title>

            <Rating
              ratingStats={props.product.rating}
              reviewStats={props.product.numReviews}
              ratingColor={"#FDCC0D"}
            />

            <Card.Text
              as="h3"
              className="my-3"
            >{`$${props.product.price}`}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
