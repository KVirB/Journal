import React from "react";
import { connect } from "react-redux";
// import { setMarks, getMarksThunk } from "../../reducer/marksReducer";
import { setFio, getFioThunk } from "../../reducer/fioReducer";
import {
  setJournalsite,
  getJournalsiteThunk,
} from "../../reducer/journalsiteReducer";
import {
  setDataLesson,
  getDataLessonThunk,
} from "../../reducer/dataLessonReducer";
import MarksTable from "../marksTable/MarksTable";
import Combine from "./Combine";

class combineContainer extends React.Component {
  componentDidMount() {
    // this.props.getMarksThunk();
    // this.props.getFioThunk();
    // this.props.getDataLessonThunk();
    // this.props.getJournalsiteThunk();
  }
  componentWillUnmount() {
    window.location.reload();
  }
  render() {
    return (
      <div>
        <Combine
        // marks={this.props.marks}
        // journalsite={this.props.journalsite}
        // fio={this.props.fio}
        // dataLesson={this.props.dataLesson}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    // marks: state.marksPage.marks,
    // journalsite: state.journalsitePage.journalsite,
    // fio: state.fioPage.fio,
    // dataLesson: state.dataLessonPage.dataLesson,
  };
};

export default connect(mapStateToProps, {
  //   setMarks,
  //   getMarksThunk,
  setJournalsite,
  getJournalsiteThunk,
  setFio,
  getFioThunk,
  setDataLesson,
  getDataLessonThunk,
})(combineContainer);
