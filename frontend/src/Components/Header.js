import React from 'react'
import logo from '../assets/logo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Navbar, Form, Button, Nav } from 'react-bootstrap'



const Header = () => {
  return (
   <header className="container-fluid p-0">
      <Navbar bg="light"  expand="md" className="flex-column py-3">
         <Container>
            <Navbar.Brand href="#home" className='d-flex align-items-center'>
            <img
              alt=""
              src={logo}
              width="55"
              height="45"
              className="d-inline-block align-top"
            />
            <span>E-SHOP</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
               <Form className="d-flex my-2">
                  <Form.Control
                     size="sm" type="text" placeholder="Search" className="me-2"   
                  />
                  <Button variant="dark" className="py-1"><i className="bi bi-search"></i></Button>
               </Form>
               <Nav className="ml-auto">
                  <Nav.Item className="m-auto">
                     <Nav.Link href="/home" ><i className="bi bi-person-fill"></i>Sign in</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="m-auto">
                     <Nav.Link href="/home" ><i className="bi bi-cart-fill"></i>Cart</Nav.Link>
                  </Nav.Item>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
      
      <Navbar bg="dark" className="py-0">
         <Container className="justify-content-center">
            <Nav className="m-auto d-flex justify-content-center"> 
               <Nav.Link href="/home" className="text-light mx-2 py-3 fs-5">Home</Nav.Link>
               <Nav.Link href="/home" className="text-light mx-2 py-3 fs-5">About</Nav.Link>
               <Nav.Link href="/home" className="text-light mx-2 py-3 fs-5">Shop</Nav.Link>
               <Nav.Link href="/home" className="text-light mx-2 py-3 fs-5">Contact</Nav.Link>
            </Nav>
         </Container>
      </Navbar>
   </header>
  )
}

export default Header