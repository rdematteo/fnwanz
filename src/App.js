import React from "react";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
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
  text-align: center;
  font-size: 64px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

class App extends React.Component {
  render() {
    return (
      <>
        <NavbarMenu />
        <Content>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <Heading>{Title}</Heading>
            </div>
          </div>
        </Content>
        <Routes />
      </>
    );
  }
}

export default App;
