import React, { Component } from "react";
import { Link } from "react-router-dom";
import Graph from "../graph/graph";
import { connect } from "react-redux";
// to import a function from the reducer and use redux use the following format
// import { function name is the store } from "../../dux/reducer";
import { sendUser } from "../../../dux/reducer";
//DONT FORGET TO IMPORT THE CSS STYLE SHEETS AS WELL

class QuizResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    });
  }

  render() {
    return (
      <div className="ResultsSection">
        <h1>{this.state.user}</h1>
        <p>BOOOOOMMMM RESULTS</p>
        <Graph />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { sendUser }
)(QuizResults);
