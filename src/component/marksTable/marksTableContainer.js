import React from "react";
import { connect } from "react-redux";
import {
  setJournalsite,
  getJournalsiteThunk,
  toggleJournalSitePresence,
  setJournalSiteMark,
  clearJournalHeader,
  getJournalHeaderThunk,
  setJournalContent,
  setJH,
  clearTP,
  setPresent,
  clearPresent,
} from "../../reducer/journalsiteReducer";
import { setBtnTrue, setBtnFalse } from "../../reducer/btnReducer";
import { setJournalHeader } from "../../reducer/journalsiteReducer";
import MarksTable from "../marksTable/MarksTable";

class marksTableContainer extends React.Component {
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
          clearJournalHeader={this.props.clearJournalHeader}
          getJournalHeaderThunk={this.props.getJournalHeaderThunk}
          setClosedTrue={this.props.setClosedTrue}
          journalContent={this.props.journalContent}
          setJournalContent={this.props.setJournalContent}
          setBtnTrue={this.props.setBtnTrue}
          setBtnFalse={this.props.setBtnFalse}
          disabled={this.props.disabled}
          jh={this.props.jh}
          setJH={this.props.setJH}
          clearTP={this.props.clearTP}
          present={this.props.present}
          setPresent={this.props.setPresent}
          clearPresent={this.props.clearPresent}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    journalsite: state.journalsitePage.journalsite,
    journalHeader: state.journalsitePage.journalHeader,
    journalContent: state.journalsitePage.journalContent,
    disabled: state.btnPage.disabled,
    jh: state.journalsitePage.jh,
    present: state.journalsitePage.present,
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
  setJournalContent,
  setBtnTrue,
  setBtnFalse,
  setJH,
  clearTP,
  setPresent,
  clearPresent,
})(marksTableContainer);
