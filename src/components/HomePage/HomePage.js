import React from "react";
import { Intro, AimTitle, AimText, Aim } from "../../text/text";
import styled from "styled-components";

const Para = styled.div`
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    background-color: yellow;
    font-size: 12px;
    padding: 10px;
  }
`;

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Para>{Intro}</Para>
        <Para>{AimTitle}</Para>
        <Para>{AimText}</Para>
        <Para>{Aim}</Para>
      </>
    );
  }
}

export default HomePage;
