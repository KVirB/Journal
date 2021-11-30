import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import combineContainer from "./combineContainer";

const App = (props) => {
  return (
    <Router>
      <Route exact path="/" component={combineContainer} />
    </Router>
  );
};

export default App;
