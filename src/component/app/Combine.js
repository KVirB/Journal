import * as React from "react";
import "./App.css";
import Header from "../header/headerContainer";
import MarksTable from "../marksTable/marksTableContainer";
import Plans from "../Plans/Plans";

export default class Combine extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <MarksTable />
        <hr />
        <Plans />
      </div>
    );
  }
}
