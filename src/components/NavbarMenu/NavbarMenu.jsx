import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  padding: 0rem;
`;
const LinkStyled = styled(Link)`
  color: white;
  padding: 0 1rem 0 0;
  font-size: 14px;
`;

function NavbarMenu() {
  return (
    <Container>
      <Navbar bg="primary" variant="dark">
        <LinkStyled to="/home">Home</LinkStyled>
        <Nav className="mr-auto">
          <LinkStyled to="/meeting">Meeting</LinkStyled>
          <LinkStyled to="/archive">Archive</LinkStyled>
        </Nav>

        <a
          href="https://www.facebook.com/FNWANZ/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            color="#fff"
            size="2x"
          ></FontAwesomeIcon>
        </a>
      </Navbar>
    </Container>
  );
}

export default NavbarMenu;
