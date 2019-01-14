import React from "react";
import { Switch, Route } from "react-router-dom";
//now to import the classes we need from their folders and files:
//Introduction view
import IntroPage from "../components/introSection/introPage";
//Instructions view
import Instructions from "../components/introSection/instructions";
//Actual Questionsaire form fill out view
//the route here will most likely change. i think 1 question a view would be slick.
// for now i will just have all the questions on 1 page just for testing purposes
import Questions from "../components/questionsSection/questions";
//Results View with the graph and definitions
import QuizResults from "../components/resultsSection/quizResults/quizResults";

export default (
  <Switch>
    <Route exact path="/" component={IntroPage} />
    <Route path="/instructions" component={Instructions} />
    <Route path="/questions" component={Questions} />
    <Route path="/results" component={QuizResults} />
  </Switch>
);
