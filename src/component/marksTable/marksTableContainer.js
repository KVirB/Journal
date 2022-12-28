import React from "react";
import { connect } from "react-redux";
import {
  setJournalsite,
  getJournalsiteThunk,
  toggleJournalSitePresence,
  setJournalSiteMark,
  setJournalSiteLateness,
  clearJournalHeader,
  getJournalHeaderThunk,
  setJH,
  setPresent,
  clearPresent,
  getThemeHeaderThunk,
} from "../../reducer/journalsiteReducer";
import { clearTypeClass } from "../../reducer/headerReducer";
import { setBtnTrue, setBtnFalse } from "../../reducer/btnReducer";
import {
  setJournalHeader,
  patchThemeHeaderThunk,
  closeThemeHeader,
} from "../../reducer/journalsiteReducer";
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
          setJournalSiteLateness={this.props.setJournalSiteLateness}
          setJournalHeader={this.props.setJournalHeader}
          journalHeader={this.props.journalHeader}
          clearJournalHeader={this.props.clearJournalHeader}
          getJournalHeaderThunk={this.props.getJournalHeaderThunk}
          setClosedTrue={this.props.setClosedTrue}
          journalContent={this.props.journalContent}
          setBtnTrue={this.props.setBtnTrue}
          setBtnFalse={this.props.setBtnFalse}
          disabled={this.props.disabled}
          jh={this.props.jh}
          setJH={this.props.setJH}
          present={this.props.present}
          setPresent={this.props.setPresent}
          clearPresent={this.props.clearPresent}
          clearTypeClass={this.props.clearTypeClass}
          typeC={this.props.typeC}
          setCheckData={this.props.setCheckData}
          isLoading={this.props.isLoading}
          subGroup={this.props.subGroup}
          patchThemeHeaderThunk={this.props.patchThemeHeaderThunk}
          getThemeHeaderThunk={this.props.getThemeHeaderThunk}
          themeHeader={this.props.themeHeader}
          closeThemeHeader={this.props.closeThemeHeader}
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
    typeC: state.typePage.typeC,
    isLoading: state.disciplinePage.isLoading,
    subGroup: state.typeClassPage.subGroup,
    themeHeader: state.journalsitePage.themeHeader,
  };
};

export default connect(mapStateToProps, {
  closeThemeHeader,
  getThemeHeaderThunk,
  patchThemeHeaderThunk,
  setJournalsite,
  getJournalsiteThunk,
  toggleJournalSitePresence,
  setJournalSiteMark,
  setJournalSiteLateness,
  setJournalHeader,
  clearJournalHeader,
  getJournalHeaderThunk,
  setBtnTrue,
  setBtnFalse,
  setJH,
  clearTypeClass,
  setPresent,
  clearPresent,
})(marksTableContainer);
