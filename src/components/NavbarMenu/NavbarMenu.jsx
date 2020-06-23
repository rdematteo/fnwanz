import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  display:flex:
  padding: 0rem;
`;

const Navbar2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  width: 100%;
  height: 20%
  background: white;
  padding: 0.5rem;
  border-bottom: black solid 3px;


`;

const LinkStyled = styled(Link)`
  color: black;
  padding: 0 2rem 0 0;
  font-size: 20px;

  @media (max-width: 768px) {
    padding: 0 1rem 0 0;
    font-size: 14px;
  }
`;

const FacebookLink = styled.div`
  display: flex;
  margin-left: auto;
`;

function NavbarMenu() {
  return (
    <Container>
      <Navbar2>
        <LinkStyled to="/home">Home</LinkStyled>
        <LinkStyled to="/meeting">34th Annual Meeting Details</LinkStyled>
        <LinkStyled to="/archive">Archive</LinkStyled>
        <FacebookLink className="facebook-link">
          <a
            href="https://www.facebook.com/FNWANZ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              color="#007bff"
              size="2x"
            ></FontAwesomeIcon>
          </a>
        </FacebookLink>
      </Navbar2>
    </Container>
  );
}

export default NavbarMenu;
