import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Combine from "./Combine";

const App = (props) => {
  return (
    <Router>
      {/* <div> */}
      <Route exact path="/" component={Combine} />
      {/* <Route exact path="/login" element={<Header />} /> */}
      {/* </div> */}
    </Router>
  );
};

export default App;
