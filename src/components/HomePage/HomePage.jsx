import React from "react";
import { Intro, AimTitle, AimText, Aim } from "../../text/text";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Para = styled.div`
  padding: 1rem 15rem;
  font-size: 20px;

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
      <>
        <Para>{Intro}</Para>
        <AimTitleStyled>{AimTitle}</AimTitleStyled>
        <Para>{AimText}</Para>
        <AimStyled>{Aim}</AimStyled>
        <Links className="links">
          <LinkStyled to="/meeting">34th Annual Meeting, Newcastle</LinkStyled>
          <LinkStyled to="/archives">Archives</LinkStyled>
        </Links>
      </>
    );
  }
}

export default HomePage;
