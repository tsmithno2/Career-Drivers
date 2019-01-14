import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// to import a function from the reducer and use redux use the following format
// import { function name is the store } from "../../dux/reducer";
//DONT FORGET TO IMPORT THE CSS STYLE SHEETS AS WELL

//READ FIRST!!!!!!!!!! i will be using redux to track all state values in final build, however right now i just have everything set to state. THIS WILL CHANGE!!!!!!!!!!!

class Graph extends Component {
  constructor() {
    super();
    this.state = {
      tracked: 0
    };
  }

  render() {
    return (
      <div className="">
        <p>HOLY MOLY LOOK AT THIS GRAPH!!!!!</p>
      </div>
    );
  }
}

export default Graph;
