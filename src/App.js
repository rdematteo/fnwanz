import React from "react";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import Routes from "./Routes";
import { Title } from "../src/text/text";
import styled from "styled-components";
import MetaTags from "react-meta-tags";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20vh;
  background-color: #074f57;
  color: #fff;

  padding: 3rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    height: 10vh;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 64px;

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

class App extends React.Component {
  render() {
    return (
      <>
        <MetaTags>
          <title>FNWANZ</title>
          <meta name="description" content="Home page of FNWANZ." />
          <meta property="og:title" content="FNWANZ" />
          <meta property="og:image" content="./public/og-image.png" />
        </MetaTags>
        <NavbarMenu />
        <Content className="banner">
          <Heading>{Title}</Heading>
        </Content>
        <Routes />
      </>
    );
  }
}

export default App;
