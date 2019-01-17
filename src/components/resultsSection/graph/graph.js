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
        "Doing things that represent ever increasing challenge; overcoming significant odds or winning against formidable competitors.",

      //---------THOUGHTS-----------------
      //I realize this may be redundant to have all this in local state as well as in redux,
      //but i would rather have it here for now than not.
      //It is very easy to delete all this but very time consuming to put in.
      //So I spent the time now to just put it in rather than waiting and hvaing to do it later
      //---------THOUGHTS-----------------

      //This is to track the quality counters based on answers, in the same format as redux
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
      <div className="">
        <p>HOLY MOLY LOOK AT THIS GRAPH!!!!!</p>
      </div>
    );
  }
}

export default Graph;
