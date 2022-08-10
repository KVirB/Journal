import * as React from "react";
import "./App.css";
import Header from "../header/headerContainer";
import MarksTable from "../marksTable/marksTableContainer";
import BurgerMenu from "../header/BurgerMenu";
import BurgerButtonMain from "../header/BurgerButtonMain";
import BurgerMenuMain from "../header/BurgerMenuMain";
import MarksTableHeader from "../marksTableHeader/marksTableHeader";

function Combine() {
  return (
    <div className="disp">
      {/* <BurgerMenu></BurgerMenu> */}
      <div className="burger_combine">
        <BurgerButtonMain></BurgerButtonMain>
      </div>
      <div className="combine_main otstup">
        <MarksTableHeader />
        <MarksTable />
      </div>
    </div>
  );
}

export default Combine;
