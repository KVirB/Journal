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
} from "../../reducer/journalsiteReducer";

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
        journalsite={this.props.group}
        teacher={this.props.teacher}
        setJournalHeader={this.props.setJournalHeader}
        journalHeader={this.props.journalHeader}
        clearJournalHeader={this.props.clearJournalHeader}
        getJournalHeaderThunk={this.props.getJournalHeaderThunk}
        closed={this.props.closed}
        setJournalContent={this.props.setJournalContent}
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
    closed: state.journalsitePage.closed,
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
})(headerContainer);
