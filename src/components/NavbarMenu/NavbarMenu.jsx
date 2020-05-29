import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
padding: 0rem;
`

function NavbarMenu() {
  return (
    <Container>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/meeting">Meeting</Nav.Link>
          <Nav.Link href="/archive">Archive</Nav.Link>
        </Nav>

        <a href="https://www.facebook.com/FNWANZ/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebookF}
            color="#fff"
            size="2x"
          >
          </FontAwesomeIcon>
        </a>

      </Navbar>
    </Container>


  );
}

export default NavbarMenu;
