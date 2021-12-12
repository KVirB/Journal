import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Combine from "./Combine";
import Login from "../../login/Login";

const App = (props) => {
  return (
    <Router>
      {/* <div> */}
      <Route exact path="/" component={Login} />
      <Route exact path="/journal" component={Combine} />
      {/* <Route exact path="/login" element={<Header />} /> */}
      {/* </div> */}
    </Router>
  );
};

export default App;
