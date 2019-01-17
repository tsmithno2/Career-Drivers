import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// to import a function from the reducer and use redux use the following format
// import { function name is the store } from "../../dux/reducer";
//DONT FORGET TO IMPORT THE CSS STYLE SHEETS AS WELL

//READ FIRST!!!!!!!!!! i will be using redux to track all state values in final build, however right now i just have everything set to state. THIS WILL CHANGE!!!!!!!!!!!

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //FIRST: Set up an empty array to recieve the questions array from redux
      questions: [],
      //SECOND: q is short for question and then the number is the question number.
      //this will track answers for each question for the second phase of the test which is super selecting 2 answers
      //Now it is named the same way as in redux
      //---------THOUGHTS-----------------
      //I realize this may be redundant to have all this in local state as well as in redux,
      //but i would rather have it here for now than not.
      //It is very easy to delete all this but very time consuming to put in.
      //So I spent the time now to just put it in rather than waiting and hvaing to do it later
      //---------THOUGHTS-----------------
      quizAnswers: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: "",
        17: "",
        18: "",
        19: "",
        20: "",
        21: "",
        22: "",
        23: "",
        24: "",
        25: "",
        26: "",
        27: "",
        28: ""
      },
      //THIRD: this is to track the quality counters based on answers, in the same format as redux
      qualityCounters: {
        e: 0,
        a: 0,
        i: 0,
        l: 0,
        fT: 0,
        s: 0,
        m: 0,
        c: 0
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

function mapStateToProps(state) {
  return {
    qualityCounters: state.qualityCounters
  };
}
