import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">CILSY+</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/" style={{ cursor: "pointer" }}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register" style={{ cursor: "pointer" }}>
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login" style={{ cursor: "pointer" }}>
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <Form.Control placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
