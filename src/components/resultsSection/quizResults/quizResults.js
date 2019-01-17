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
      user: "",
      //These are the definitions for each driver or attribute
      //I'm not sure at this point if I will need these in this component or the graph one.
      //So for now I'll copy and paste it there as well just to save myself some future work
      entrepreneurial:
        "Creating new things and championing new ideas, products, processes, and so on.",

      autonomy:
        "Having the freedom to control one’s own work methods, schedules, and outcomes; being self-reliant.",

      idealistic:
        "Being dedicated to a cause greater than oneself; giving of oneself in service to others.",

      lifestyle:
        "Achieving a certain lifestyle by finding ways to balance and integrate one’s personal needs with the needs of work and career.",

      functionalTechnical:
        "Engaging in work that utilizes one’s specific talents and education; doing work where one can be the expert.",

      security:
        "Needing security, stability, recognition, and predictability; demonstrating qualities of loyalty, dependability, and hard work.",

      managerial:
        "Being in roles where one can provide direction and leadership for others; climbing the managerial ladder.",

      challenge:
        "Doing things that represent ever increasing challenge; overcoming significant odds or winning against formidable competitors."
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
