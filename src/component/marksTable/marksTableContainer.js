import React from "react";
import { connect } from "react-redux";
import {
  setJournalsite,
  getJournalsiteThunk,
  toggleJournalSitePresence,
  setJournalSiteMark,
  clearJournalHeader,
  getJournalHeaderThunk,
} from "../../reducer/journalsiteReducer";
import { patchJournalsite } from "../../BD/tables";
import { setJournalHeader } from "../../reducer/journalsiteReducer";
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
        <MarksTable
          journalsite={this.props.journalsite}
          toggleJournalSitePresence={this.props.toggleJournalSitePresence}
          setJournalSiteMark={this.props.setJournalSiteMark}
          setJournalHeader={this.props.setJournalHeader}
          journalHeader={this.props.journalHeader}
          clclearJournalHeader={this.props.clclearJournalHeader}
          getJournalHeaderThunk={this.props.getJournalHeaderThunk}
          patchJournalsite={this.props.patchJournalsite}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    journalsite: state.journalsitePage.journalsite,
    journalHeader: state.journalsitePage.journalHeader,
  };
};

export default connect(mapStateToProps, {
  setJournalsite,
  getJournalsiteThunk,
  toggleJournalSitePresence,
  setJournalSiteMark,
  setJournalHeader,
  clearJournalHeader,
  getJournalHeaderThunk,
  patchJournalsite,
})(marksTableContainer);
