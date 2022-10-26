import React from "react";
import jbl from "../assets/JBLart.jpg";
import jbl2 from "../assets/JBLart2.jpg";
import beats from "../assets/beatart.jpg";
import {Row, Col, Form, Button, Container} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function AboutScreen() {
  return (
    <Container  className="about-container my-5 d-flex flex-column justify-content-between">
      <Row className="row-container">
        <Col className="my-3 align-self-center">
          <div className="d-flex flex-column justify-content-center">
            <h1>Our Vision</h1>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              necessitatibus reiciendis optio maxime modi porro. Libero hic
              beatae officiis eum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Amet necessitatibus reiciendis optio maxime modi
              porro. Libero hic beatae officiis eum!
            </p>
          </div>

          <Button variant="dark mt-3">READ MORE</Button>
        </Col>

        <Col className=" d-flex justify-content-end">
          <img src={jbl} className="about-img" alt="about" />
        </Col>
      </Row>

      <Row className="row-container">
        <Col className="d-flex justify-content-start">
          <img src={beats} className="about-img" alt="about" />
        </Col>
        <Col className="my-3 align-self-center">
          <div className="d-flex flex-column justify-content-center">
            <h1>Our Approach</h1>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              necessitatibus reiciendis optio maxime modi porro. Libero hic
              beatae officiis eum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Amet necessitatibus reiciendis optio maxime modi
              porro. Libero hic beatae officiis eum!
            </p>
          </div>

          <Button variant="dark mt-3">READ MORE</Button>
        </Col>
      </Row>

      <Row className="row-container">
      <Col className="my-3 align-self-center">
          <div className="d-flex flex-column justify-content-center">
            <h1>Our Process</h1>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              necessitatibus reiciendis optio maxime modi porro. Libero hic
              beatae officiis eum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Amet necessitatibus reiciendis optio maxime modi
              porro. Libero hic beatae officiis eum!
            </p>
          </div>

          <Button variant="dark mt-3">READ MORE</Button>
        </Col>
        <Col className="d-flex justify-content-start">
          <img src={jbl2} className="about-img" alt="about" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutScreen;
