import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { connect } from "react-redux";
import {
  getFacultyThunk,
  setFirstDate,
  setSecondDate,
  getExcelFacultyThunk,
} from "../../reducer/statisticsReducer";
import FacultyStatistic from "./FacultyStatistic";

class facultyStatisticContainer extends React.Component {
  render() {
    return (
      <FacultyStatistic
        getFacultyThunk={this.props.getFacultyThunk}
        setFirstDate={this.props.setFirstDate}
        setSecondDate={this.props.setSecondDate}
        isLoading={this.props.isLoading}
        faculty={this.props.faculty}
        secondDateDisabled={this.props.secondDateDisabled}
        firstDate={this.props.firstDate}
        disabled={this.props.disabled}
        getExcelFacultyThunk={this.props.getExcelFacultyThunk}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    isLoading: state.generalStatisticPage.isLoading,
    faculty: state.generalStatisticPage.faculty,
    secondDateDisabled: state.generalStatisticPage.secondDateDisabled,
    firstDate: state.generalStatisticPage.firstDate,
    disabled: state.generalStatisticPage.disabled,
    getExcelFacultyThunk: state.generalStatisticPage.getExcelFacultyThunk,
  };
};

export default connect(mapStateToProps, {
  getFacultyThunk,
  setFirstDate,
  setSecondDate,
  getExcelFacultyThunk,
})(facultyStatisticContainer);
