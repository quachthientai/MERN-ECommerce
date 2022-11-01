import React from "react";
import logo from "../assets/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Container, Navbar, Form, Button, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {
  return (
    <header className="container-fluid p-0">
      <Navbar bg="light" expand="md" className="flex-column py-3">
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand className="d-flex align-items-center">
              <img
                alt=""
                src={logo}
                width="55"
                height="45"
                className="d-inline-block align-top"
              />
              <span>E-SHOP</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Form className="d-flex my-2">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Search"
                className="me-2"
              />
              <Button variant="dark" className="py-1">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
            <Nav className="ml-auto">
              <Nav.Item className="m-auto">
                <LinkContainer to="/home">
                  <Nav.Link >
                    <i className="bi bi-person-fill"></i>Sign in
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item className="m-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="bi bi-cart-fill"></i>Cart
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar className="bg-dark py-0">
        <Container className="justify-content-center">
          <Nav className="m-auto d-flex justify-content-center">
            <LinkContainer to="/">
              <Nav.Link className="text-light mx-2 py-3 fs-5">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link className="text-light mx-2 py-3 fs-5">About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/shop">
              <Nav.Link className="text-light mx-2 py-3 fs-5">Shop</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link className="text-light mx-2 py-3 fs-5">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
