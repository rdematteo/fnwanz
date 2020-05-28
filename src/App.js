import React from "react";
import Navbar from "../src/components/navbar/navbar";
import Routes from "./Routes";
import { Title } from "../src/text/text";
import styled from "styled-components";

const Heading = styled.h1`
  background-color: yellow;
`;

console.log(Title);

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Heading>{Title}</Heading>

        <Routes />
      </>
    );
  }
}

export default App;
