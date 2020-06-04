import React from "react";
import styled from "styled-components";
import { Figure } from "react-bootstrap";
import logo from "../../../src/Images/fnw-2016.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #00a896;
  height: calc(100vh - 295px); // takes into account title and navbar

  @media (max-width: 768px) {
    font-size: 14px;
    height: 100vh;
  }
`;

const Text = styled.h1`
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FigureStyled = styled(Figure)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PageNotFound() {
  return (
    <Container className="NotFoundContainer">
      <Text>Opps...The page you are looking for appears not to exist</Text>
      <ImageContainer>
        <FigureStyled>
          <Figure.Image
            class="figure-img img-fluid rounded"
            width="60%"
            // height={180}
            alt="FNWANZ 2016"
            src={logo}
          />
          <Figure.Caption>FNW-2016</Figure.Caption>
        </FigureStyled>
      </ImageContainer>
    </Container>
  );
}

export default PageNotFound;
