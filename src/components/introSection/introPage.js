import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// to import a function from the reducer and use redux use the following format
// import { function name is the store } from "../../dux/reducer";
//DONT FORGET TO IMPORT THE CSS STYLE SHEETS AS WELL

//READ FIRST!!!!!!!!!! i will be using redux to track all state values in final build, however right now i just have everything set to state. THIS WILL CHANGE!!!!!!!!!!!

class IntroPage extends Component {
  constructor() {
    super();
    this.state = {
      userName: ""
    };
  }
  render() {
    return (
      <div className="InroPage">
        <div className="Inputs">
          <h1>
            Thanks so much for taking the Targeted Learnings Career Drivers
            Test!
          </h1>
          <h3>Please introduce your self! </h3>
          <h3>
            Type your name is the box below, and click the "Submit" button when
            you are ready to start!
          </h3>
          <input
            value={this.state.userName}
            onChange={e => this.setState({ userName: e.target.value })}
          />
          <button
            onClick={() =>
              console.log("Username Inputs Intro Page" + this.state.userName)
            }
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default IntroPage;
