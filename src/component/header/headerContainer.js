import React from "react";
import { connect } from "react-redux";
import {
  setDiscipline,
  getDisciplineThunk,
  setGroup,
  getGroupThunk,
  setTypeClass,
  clearDiscipline,
  getCourseSpecThunk,
} from "../../reducer/headerReducer.js";
import Header from "./Header.js";
import {
  setJournalHeader,
  clearJournalHeader,
  getJournalHeaderThunk,
  setJH,
  clearJH,
  setSB,
  clearSB,
  setPresent,
  clearPresent,
} from "../../reducer/journalsiteReducer";
import { setBtnTrue, setBtnFalse } from "../../reducer/btnReducer";
import { setType, clearType } from "../../reducer/typeReducer";
class headerContainer extends React.Component {
  componentDidMount() {
    this.props.getDisciplineThunk();
  }
  componentWillUnmount() {
    window.location.reload();
  }
  render() {
    return (
      <Header
        discipline={this.props.discipline}
        group={this.props.group}
        typeClass={this.props.typeClass}
        journalsite={this.props.group}
        teacher={this.props.teacher}
        setJournalHeader={this.props.setJournalHeader}
        journalHeader={this.props.journalHeader}
        clearJournalHeader={this.props.clearJournalHeader}
        getJournalHeaderThunk={this.props.getJournalHeaderThunk}
        getCourseSpecThunk={this.props.getCourseSpecThunk}
        closed={this.props.closed}
        disabled={this.props.disabled}
        setBtnTrue={this.props.setBtnTrue}
        setBtnFalse={this.props.setBtnFalse}
        jh={this.props.jh}
        setJH={this.props.setJH}
        update={this.props.update}
        clearJH={this.props.clearJH}
        tp={this.props.tp}
        setSB={this.props.setSB}
        clearSB={this.props.clearSB}
        sb={this.props.sb}
        setPresent={this.props.setPresent}
        present={this.props.present}
        clearPresent={this.props.clearPresent}
        clearDiscipline={this.props.clearDiscipline}
        setType={this.props.setType}
        clearType={this.props.clearType}
        subGroup={this.props.subGroup}
        courseSpec={this.props.courseSpec}
        typeC={this.props.typeC}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    discipline: state.disciplinePage.discipline,
    group: state.groupPage.group,
    typeClass: state.typeClassPage.typeClass,
    subGroup: state.typeClassPage.subGroup,
    journalsite: state.journalsitePage.journalsite,
    courseSpec: state.courseSpecPage.journalsite,
    teacher: state.teacherPage.teacher,
    journalHeader: state.journalsitePage.journalHeader,
    disabled: state.btnPage.disabled,
    jh: state.journalsitePage.jh,
    update: state.journalsitePage.update,
    sb: state.journalsitePage.sb,
    present: state.journalsitePage.present,
    typeC: state.typePage.typeC,
    courseSpec: state.courseSpecPage.courseSpec,
  };
};

export default connect(mapStateToProps, {
  setDiscipline,
  getDisciplineThunk,
  setGroup,
  setTypeClass,
  getGroupThunk,
  setJournalHeader,
  clearJournalHeader,
  getJournalHeaderThunk,
  setBtnTrue,
  setBtnFalse,
  setJH,
  clearJH,
  setSB,
  clearSB,
  setPresent,
  clearPresent,
  clearDiscipline,
  setType,
  getCourseSpecThunk,
})(headerContainer);
