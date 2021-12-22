import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React from "react";
import Combine from "./Combine";
import Login from "../../login/Login";

const App = (props) => {
  return (
    <Router>
      {/* <div> */}
      <Route
        exact
        path="/"
        component={() => <Redirect to="/electronicaljournal-view" />}
      />
      <Route exact path="/electronicaljournal-view" component={Login} />
      <Route
        exact
        path="/electronicaljournal-view/journal"
        component={Combine}
      />
      {/* <Route exact path="/login" element={<Header />} /> */}
      {/* </div> */}
    </Router>
  );
};

export default App;
