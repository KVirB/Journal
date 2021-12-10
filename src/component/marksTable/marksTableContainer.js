import React from "react";
import { connect } from "react-redux";
import {
  setJournalsite,
  getJournalsiteThunk,
  toggleJournalSitePresence,
  setJournalSiteMark,
} from "../../reducer/journalsiteReducer";
import MarksTable from "../marksTable/MarksTable";

class marksTableContainer extends React.Component {
  componentDidMount() {
    // this.props.getJournalsiteThunk();
  }
  componentWillUnmount() {
    window.location.reload();
  }
  render() {
    return (
      <div>
        <MarksTable journalsite={this.props.journalsite} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    journalsite: state.journalsitePage.journalsite,
  };
};

export default connect(mapStateToProps, {
  setJournalsite,
  getJournalsiteThunk,
  toggleJournalSitePresence,
  setJournalSiteMark,
})(marksTableContainer);
