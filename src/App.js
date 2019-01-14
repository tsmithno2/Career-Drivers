import React, { Component } from "react";
import routes from "./router/routes";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="WholeSite">
        <div key="Routes">{routes}</div>
      </div>
    );
  }
}

export default withRouter(App);
