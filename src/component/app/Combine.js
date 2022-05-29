import * as React from "react";
import "./App.css";
import Header from "../header/headerContainer";
import MarksTable from "../marksTable/marksTableContainer";
import BurgerMenu from "../header/BurgerMenu";

function Combine() {
  return (
    <div className="disp">
      <BurgerMenu></BurgerMenu>
      <div className="combine_main">
        <Header />
        <MarksTable />
      </div>
    </div>
  );
}

export default Combine;
