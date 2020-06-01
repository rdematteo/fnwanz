import React from "react";
import { Intro, AimTitle, AimText, Aim } from "../../text/text";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../../src/Images/fetal-34-2020.jpg";

const Container = styled.div`
  display: flex;
  background: purple;
  height: 100vh;
`;
const LhsColumn = styled.div`
  width: 50%;
`;
const RhsColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 2rem 0 0 0;
  // align-items: center;
`;

const ImageStyled = styled.img`
  height: 70%;
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
`;

const AimStyled = styled(Para)`
  font-style: oblique;
  padding: 30px;
  text-align: center;
  border: 5px solid #007bff;
  margin: 1rem 15rem;
  border-radius: 25px;

  @media (max-width: 768px) {
    margin: 1rem 1rem;
    font-size: 12px;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  padding: 1rem 15rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    padding: 10px;
  }
`;

const LinkStyled = styled(Link)`
  color: white;
  background: #007bff;
  margin: 10px;
  padding: 1rem;
  font-size: 18px;
  border-radius: 25px;
  text-align: center;
`;

class HomePage extends React.Component {
  render() {
    return (
      <Container>
        <LhsColumn>
          <Para>{Intro}</Para>
          <AimTitleStyled>{AimTitle}</AimTitleStyled>
          <Para>{AimText}</Para>
          <AimStyled>{Aim}</AimStyled>
          <Links className="links">
            <LinkStyled to="/meeting">
              34th Annual Meeting, Newcastle
            </LinkStyled>
            <LinkStyled to="/archives">Archives</LinkStyled>
          </Links>
        </LhsColumn>
        <RhsColumn>
          <ImageStyled src={logo} alt="Logo" />
          {/* <img src={logo} alt="Logo"/> */}
        </RhsColumn>
      </Container>
    );
  }
}

export default HomePage;
