import React from "react";
import { Intro, AimTitle, AimText, Aim } from "../../text/text";
import styled from "styled-components";
import logo from "../../../src/Images/fetal-34-2020.jpg";
import { Button } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #44bcca;
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
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
const RhsColumn = styled.div`
  width: 50%;
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
  width: 80%;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Para = styled.div`
  padding: 2rem 4rem;
  font-size: 20px;
  color: #fff;

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

const Psanz = styled.div`
  display: flex;
  flex-direction: column;
  background: #0a87af;
  border-radius: 25px;
  margin: 1rem 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 12px;
    padding: 0px;
    margin: 0.5rem;
  }
`;

const PsanzTitleStyled = styled(Para)`
  font-weight: 900;
  font-size: 24px;
  padding: 2rem 0 0 2rem;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 1rem;
  }
`;

const PsanzPara = styled(Para)`
  padding: 2rem 0 2rem 2rem;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 1rem;
  }
`;

const LinkStyled = styled(Button)`
  color: white;
  background: #007bff;
  margin: 0 0 1rem 2rem;
  font-size: 18px;
  border-radius: 25px;
  text-align: center;
  width: fit-content;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0.5rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
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
          <Psanz className="psanz">
            <PsanzTitleStyled>PSANZ</PsanzTitleStyled>
            <PsanzPara>
              The FNWANZ is a proud subcommittee of the Perinatal Society of
              Australia and New Zealand.
            </PsanzPara>
            <LinkStyled
              href="https://www.psanz.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PSANZ
            </LinkStyled>
          </Psanz>
        </LhsColumn>
        <RhsColumn className="image">
          <ImageStyled src={logo} alt="Logo" />
        </RhsColumn>
      </Container>
    );
  }
}

export default HomePage;
