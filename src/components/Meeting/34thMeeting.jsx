import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

class Meeting extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment className="meeting">
        <Title>Meeting</Title>
      </React.Fragment>
    );
  }
}

export default Meeting;
