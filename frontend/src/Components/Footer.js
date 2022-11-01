import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
  return (
    <footer className=" bg-dark text-light" >
      <Container className=" text-center text-md-start text-sm-start py-4">
        <Row>
          <Col className="col-md-3 col-lg-4 col-xl-3 mx-auto text-light">
            <h5 className="text-uppercase fw-bold mb-4 mt-3 text-light">
              ESHOP E-Commerce
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </Col>

          <Col className="col-md-2 col-lg-2 col-xl-2 mx-auto text-light">
            <h5 className="text-uppercase fw-bold mb-4 mt-3 text-light">
              MAIN MENU
            </h5>
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
          </Col>

          <Col className="col-md-3 col-lg-2 col-xl-2 mx-auto text-light">
            <h5 className="text-uppercase fw-bold mb-4 mt-3 text-light">
              COMPANY
            </h5>
            <p>The Company</p>
            <p>Team</p>
            <p>Press</p>
          </Col>

          <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 text-light">
            <h5 className="text-uppercase fw-bold mb-4 mt-3 text-light">
              CONTACT {`&`} SUPPORT
            </h5>
            <p>
              <i className="bi bi-telephone-fill px-0 me-2"></i>832 513 0566
            </p>
            <p>
              <i className="bi bi-envelope-fill px-0 me-2"></i>
              quachthientai@gmail.com
            </p>
            <p>
              <i className="bi bi-star-fill px-0 me-2"></i>Give FeedBack
            </p>
          </Col>
        </Row>

        <Row>
          <p className="text-center mt-3">© 2022 Copyright: ESHOP.com</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
