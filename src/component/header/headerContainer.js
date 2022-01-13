import React from "react";
import { connect } from "react-redux";
import {
  setDiscipline,
  getDisciplineThunk,
  setGroup,
  getGroupThunk,
} from "../../reducer/headerReducer.js";
import Header from "./Header.js";
import {
  setJournalHeader,
  clearJournalHeader,
  getJournalHeaderThunk,
  setJournalContent,
  setJH,
  clearJH,
  setTP,
  clearTP,
  setSB,
  clearSB,
} from "../../reducer/journalsiteReducer";
import { setBtnTrue, setBtnFalse } from "../../reducer/btnReducer";
class headerContainer extends React.Component {
  componentDidMount() {
    this.props.getDisciplineThunk();
    this.props.setSB();
  }
  componentWillUnmount() {
    window.location.reload();
  }
  render() {
    return (
      <Header
        discipline={this.props.discipline}
        group={this.props.group}
        journalsite={this.props.group}
        teacher={this.props.teacher}
        setJournalHeader={this.props.setJournalHeader}
        journalHeader={this.props.journalHeader}
        clearJournalHeader={this.props.clearJournalHeader}
        getJournalHeaderThunk={this.props.getJournalHeaderThunk}
        closed={this.props.closed}
        setJournalContent={this.props.setJournalContent}
        disabled={this.props.disabled}
        setBtnTrue={this.props.setBtnTrue}
        setBtnFalse={this.props.setBtnFalse}
        jh={this.props.jh}
        setJH={this.props.setJH}
        update={this.props.update}
        clearJH={this.props.clearJH}
        typeClass={this.props.typeClass}
        setTP={this.props.setTP}
        clearTP={this.props.clearTP}
        tp={this.props.tp}
        setSB={this.props.setSB}
        clearSB={this.props.clearSB}
        sb={this.props.sb}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    discipline: state.disciplinePage.discipline,
    group: state.groupPage.group,
    journalsite: state.journalsitePage.journalsite,
    teacher: state.teacherPage.teacher,
    journalHeader: state.journalsitePage.journalHeader,
    disabled: state.btnPage.disabled,
    jh: state.journalsitePage.jh,
    update: state.journalsitePage.update,
    typeClass: state.journalsitePage.typeClass,
    tp: state.journalsitePage.tp,
    sb: state.journalsitePage.sb,
  };
};

export default connect(mapStateToProps, {
  setDiscipline,
  getDisciplineThunk,
  setGroup,
  getGroupThunk,
  setJournalHeader,
  clearJournalHeader,
  getJournalHeaderThunk,
  setJournalContent,
  setBtnTrue,
  setBtnFalse,
  setJH,
  clearJH,
  setTP,
  clearTP,
  setSB,
  clearSB,
})(headerContainer);
