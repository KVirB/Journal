import React from "react";
import { connect } from "react-redux";
import AdditionalGrade from "./AdditionalGrade";
import {
  getAdditionalGradeThunk,
  getTypeGradeThunk,
  getAdditionalGradeAdd,
  getAdditionalGradeEdit,
} from "../../reducer/additionalGradeReducer";
import { getStudentsThunk } from "../../reducer/statisticsReducer";

class managementPageContainer extends React.Component {
  componentDidMount() {
    this.props.getAdditionalGradeThunk(
      localStorage.getItem("groupName"),
      localStorage.getItem("disciplineId")
    );
    this.props.getStudentsThunk(localStorage.getItem("groupName"));
    this.props.getTypeGradeThunk();
  }

  render() {
    return (
      <div>
        <AdditionalGrade
          getAdditionalGradeThunk={this.props.getAdditionalGradeThunk}
          additionalGrades={this.props.additionalGrades}
          getStudentsThunk={this.props.getStudentsThunk}
          students={this.props.students}
          getTypeGradeThunk={this.props.getTypeGradeThunk}
          typeGrades={this.props.typeGrades}
          getAdditionalGradeAdd={this.props.getAdditionalGradeAdd}
          isLoad={this.props.isLoad}
          getAdditionalGradeEdit={this.props.getAdditionalGradeEdit}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    additionalGrades: state.additionalGradePage.additionalGrades,
    typeGrades: state.additionalGradePage.typeGrades,
    students: state.generalStatisticPage.students,
    isLoad: state.additionalGradePage.isLoad,
  };
};

export default connect(mapStateToProps, {
  getAdditionalGradeThunk,
  getStudentsThunk,
  getTypeGradeThunk,
  getAdditionalGradeAdd,
  getAdditionalGradeEdit,
})(managementPageContainer);
