import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import combineContainer from "./combineContainer";
import Combine from "./Combine";
import Header from "../header/Header";
import MarksTable from "../marksTable/MarksTable";
import marksTableContainer from "../marksTable/marksTableContainer";

const App = (props) => {
  return (
    <Router>
      {/* <div> */}
      <Route exact path="/" component={marksTableContainer} />
      {/* <Route exact path="/login" element={<Header />} /> */}
      {/* </div> */}
    </Router>
  );
};

export default App;
