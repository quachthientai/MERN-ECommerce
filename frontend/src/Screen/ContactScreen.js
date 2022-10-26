import React from "react";
import {Row, Col, Form, Button, Container} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactScreen = () => {
  return (
    <Container className="contact-container">
      <Row className="my-5">
        <Col className="left-col" sm={12} md={6} lg={6}>
          <div className=" w-75">
            <p className="mb-2 fs-1 fw-bold">e-shop</p>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              quod distinctio, laudantium explicabo pariatur tenetur
              exercitationem dolores consectetur nisi deleniti nostrum amet
              architecto similique, aspernatur labore inventore qui saepe
              maxime.
            </div>
          </div>

          <div className="w-75">
            <p className="mb-2 fs-1 fw-bold">location</p>
            <div>1234 Jackson Blvd Ste 1202 Houston</div>
            <div>TX 77083-1234</div>
          </div>

          <div className=" w-75">
            <p className="mb-2 fs-1 fw-bold">follow us</p>
            <div className="mt-2">
              <i className="fa-brands me-3 fs-2 fa-square-facebook"></i>
              <i className="fa-brands me-3 fs-2 fa-square-twitter"></i>
              <i className="fa-brands me-3 fs-2 fa-square-instagram"></i>
              <i className="fa-brands me-3 fs-2 fa-square-google-plus"></i>
            </div>
            <p className="m-0">@2022 Privacy policy</p>
          </div>
        </Col>

        <Col className="right-col" sm={12} md={6} lg={6}>
          <div>
            <p className="mb-2 fs-1 fw-bold">contact form</p>
          </div>

          <Form>
            <div className="d-flex justify-content-between mb-4">
              <Form.Group className="me-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                ></Form.Control>
              </Form.Group>
            </div>

            <Form.Group className="mb-4">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
              ></Form.Control>
              <Form.Text>
                We'll never share your email with anyone else!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>What can we help you with?</Form.Label>
              <textarea
                className="form-control"
                id="textArea"
                rows="3"
                spellcheck="false"
              ></textarea>
            </Form.Group>

            <Button type="submit" variant="dark">
              SUBMIT
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
