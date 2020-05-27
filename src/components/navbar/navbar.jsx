import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function NavbarMenu() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/home">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/meeting">Meeting</Nav.Link>
        <Nav.Link href="/archive">Archive</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarMenu;
