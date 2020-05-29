import React from "react";
import { Intro, AimTitle, AimText, Aim } from "../../text/text";
import styled from "styled-components";

const Para = styled.div`
  padding: 1rem 15rem;
  font-size: 20px;

  @media (max-width: 768px) {
    // background-color: yellow;
    font-size: 12px;
    padding: 10px;
  }
`;

const AimTitleStyled = styled(Para)`
  font-weight: 900;
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

const LinksStyled = styled.div`
  padding: 0 20px 0 0;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Para>{Intro}</Para>
        <AimTitleStyled>{AimTitle}</AimTitleStyled>
        <Para>{AimText}</Para>
        <Para>{Aim}</Para>
        <Links className="links">
          <LinksStyled>
            <a class="btn btn-primary" href="/meeting" role="button">
              34th Annual Meeting, Newcastle
            </a>
          </LinksStyled>
          <LinksStyled>
            <a class="btn btn-info" href="/archive" role="button">
              Archives
            </a>
          </LinksStyled>
        </Links>
      </>
    );
  }
}

export default HomePage;
