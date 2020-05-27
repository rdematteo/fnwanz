import React from "react";
import Navbar from "../src/components/navbar/navbar";
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <h1>Fetal and Neonatal Workshop</h1>
        <Routes />
      </>
    );
  }
}

export default App;
