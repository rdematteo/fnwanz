import React from "react";
import Psanz from "../Psanz/Psanz";
import { Intro, AimTitle, AimText, Aim } from "../../text/text";
import styled from "styled-components";
import logo from "../../../src/Images/fetal-34-2020.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // background: #44bcca;
  height: auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    align-items: center;
  }
`;
const LhsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Para = styled.div`
  padding: 2rem 4rem;
  font-size: 20px;
  color: black;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
  }
`;

const AimTitleStyled = styled(Para)`
  font-weight: 900;
  font-size: 24px;
  padding-bottom: 0rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AimStyled = styled(Para)`
  font-style: oblique;
  padding: 2rem 1rem;
  text-align: center;
  border: 5px solid #007bff;
  margin: 1rem 4rem;
  border-radius: 25px;

  @media (max-width: 768px) {
    margin: 1rem 1rem;
    font-size: 12px;
    padding: 10px;
  }
`;

const RhsColumn = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  padding: 2rem 0 0 0;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    // height: 450px;
    align-items: center;
  }
`;

const ImageStyled = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 60%;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

class HomePage extends React.Component {
  render() {
    return (
      <Container className="homePageContainer">
        <LhsColumn className="mainText">
          <Para>{Intro}</Para>
          <AimTitleStyled>{AimTitle}</AimTitleStyled>
          <Para>{AimText}</Para>
          <AimStyled>{Aim}</AimStyled>
        </LhsColumn>
        <RhsColumn className="rhs-column">
          <ImageStyled src={logo} alt="Logo" />
        </RhsColumn>
        <Psanz />
      </Container>
    );
  }
}

export default HomePage;
