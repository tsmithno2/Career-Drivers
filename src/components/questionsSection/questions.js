import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// to import a function from the reducer and use redux use the following format
// import { function name is the store } from "../../dux/reducer";
//DONT FORGET TO IMPORT THE CSS STYLE SHEETS AS WELL

//READ FIRST!!!!!!!!!! i will be using redux to track all state values in final build, however right now i just have everything set to state. THIS WILL CHANGE!!!!!!!!!!!

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      //First: set of letters to track the different attributes amount
      e: 0,
      a: 0,
      i: 0,
      fT: 0,
      l: 0,
      m: 0,
      c: 0,
      //SECOND: q is short for question and then the number is the question number.
      // this will track answers for each question for the second phase of the test which is super selecting 2 answers
      answers: {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
        q10: "",
        q11: "",
        q12: "",
        q13: "",
        q14: "",
        q15: "",
        q16: "",
        q17: "",
        q18: "",
        q19: "",
        q20: "",
        q21: "",
        q22: "",
        q23: "",
        q24: "",
        q25: "",
        q26: "",
        q27: "",
        q28: ""
      }
    };
  }

  render() {
    return (
      <div className="Questionaire">
        <p>LOOK AT ALL THE QUESTIONS!!!!!!!</p>

        <Link to="/results">
          <button>Next</button>
        </Link>
      </div>
    );
  }
}

export default Questions;
