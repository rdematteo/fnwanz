import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Meeting from "./components/Meeting/34thMeeting";
import Archive from "./components/Archive/Archive";
import PageNotFound from "./components/PageNotFound/PageNotFound";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/meeting" exact component={Meeting} />
        <Route path="/archive" exact component={Archive} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default Routes;
