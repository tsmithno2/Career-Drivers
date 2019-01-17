import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// to import a function from the reducer and use redux use the following format
// import { function name is the store } from "../../dux/reducer";
//DONT FORGET TO IMPORT THE CSS STYLE SHEETS AS WELL

//READ FIRST!!!!!!!!!! i will be using redux to track all state values in final build, however right now i just have everything set to state. THIS WILL CHANGE!!!!!!!!!!!

class Instructions extends Component {
  constructor() {
    super();
    this.state = {
      userName: ""
    };
  }
  render() {
    return (
      <div className="Instrunctions">
        <p>Here are the instructions!!!!!</p>
        <Link to="/questions">
          <button>Next</button>
        </Link>
      </div>
    );
  }
}

export default Instructions;
