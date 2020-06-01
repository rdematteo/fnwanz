import React from "react";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import Routes from "./Routes";
import { Title } from "../src/text/text";
import styled from "styled-components";
import MetaTags from "react-meta-tags";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #074f57;
  color: #fff;
  padding: 5rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
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
        <MetaTags>
          <title>FNWANZ</title>
          <meta name="description" content="Home page of FNWANZ." />
          <meta property="og:title" content="FNWANZ" />
          <meta property="og:image" content="./public/og-image.png" />
        </MetaTags>
        <NavbarMenu />
        <Content>
          <Heading>{Title}</Heading>
          {/* <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <Heading>{Title}</Heading>
            </div>
          </div> */}
        </Content>
        <Routes />
      </>
    );
  }
}

export default App;
