import React from "react";
import { connect } from "react-redux";
import {
  setDiscipline,
  getDisciplineThunk,
  setGroup,
  getGroupThunk,
} from "../../reducer/headerReducer.js";
import Header from "./Header.js";
import { getJournalsiteThunk } from "../../reducer/journalsiteReducer";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class headerContainer extends React.Component {
  componentDidMount() {
    // this.props.getMarksThunk();
    // this.props.getFioThunk();
    this.props.getDisciplineThunk();
    // this.props.getGroupThunk();
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
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    discipline: state.disciplinePage.discipline,
    group: state.groupPage.group,
    journalsite: state.journalsitePage.journalsite,
  };
};

export default connect(mapStateToProps, {
  setDiscipline,
  getDisciplineThunk,
  setGroup,
  getGroupThunk,
})(headerContainer);
