import React from "react";
import Navbar from "../src/components/navbar/navbar";
import Routes from "./Routes";
import { Title } from "../src/text/text";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  // background-color: red;
`;

const Heading = styled.h1`
  background-color: white;
  text-align: center;
  padding: 2rem;
  @media (max-width: 768px) {
    background-color: yellow;
    font-size: 18px;
  }
`;

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Content>
          <Heading>{Title}</Heading>
        </Content>
        <Routes />
      </>
    );
  }
}

export default App;
