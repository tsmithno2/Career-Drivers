import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// to import a function from the reducer and use redux use the following format
// import { function name is the store } from "../../dux/reducer";
import { setUser } from "../../dux/reducer";

//DONT FORGET TO IMPORT THE CSS STYLE SHEETS AS WELL

class IntroPage extends Component {
  constructor() {
    super();
    this.state = {
      userName: ""
    };
  }

  clickSubmit() {
    console.log("we got here tot he function !!!!!! " + this.state.userName);
    this.props.setUser(this.state.userName);
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
          <Link to="/instructions">
            <button
              onClick={() => {
                this.clickSubmit();
              }}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(IntroPage);
