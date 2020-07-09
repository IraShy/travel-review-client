import React from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Form } from 'react-bootstrap';
const NavBar = () => {
  return (
    <nav>
      
      <Navbar bg="dark" variant="dark">
      <Nav className="justify-content-end" activekey="/">
        {/* <Navbar fixed="top" /> */}
        <Nav.Link href = "/">Home</Nav.Link>
        <Nav.Link href = "/reviews">Reviews</Nav.Link>
        <Nav.Link href = "/reviews/create">Add a review</Nav.Link>
        </Nav>
        </Navbar>
      
      
    </nav>
  );
};

export default NavBar;
