import * as React from "react";
import "./App.css";
import Header from "../header/headerContainer";
import MarksTable from "../marksTable/marksTableContainer";
import BurgerMenu from "../header/BurgerMenu";
import BurgerButtonMain from "../header/BurgerButtonMain";
import BurgerMenuMain from "../header/BurgerMenuMain";
import MarksTableHeader from "../marksTableHeader/marksTableHeader";
import { connect } from "react-redux";

export class Combine extends React.Component {
  render() {
    return (
      <div>
        <div className="lds-ellipsis" hidden={this.props.isLoadJournal}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div hidden={!this.props.isLoadJournal}>
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
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isLoadJournal: state.journalsitePage.isLoadJournal,
  };
};
export default connect(mapStateToProps, {})(Combine);
