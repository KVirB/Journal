import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { connect } from "react-redux";
import {
  getGroupsThunk,
  getExcelThunk,
  getGeneralGroupStatisticsThunk,
  getFacultyThunk,
  getExcelFacultyThunk,
  setFirstDate,
  setSecondDate,
  getStudentsThunk,
} from "../../reducer/statisticsReducer";
import GeneralGroupStatistic from "./GeneralGroupStatistic";

class generalGroupStatisticContainer extends React.Component {
  render() {
    return (
      <GeneralGroupStatistic
        getGeneralGroupStatisticsThunk={
          this.props.getGeneralGroupStatisticsThunk
        }
        generalGroupStatistic={this.props.generalGroupStatistic}
        getGroupsThunk={this.props.getGroupsThunk}
        groups={this.props.groups}
        isLoading={this.props.isLoading}
        getExcelThunk={this.props.getExcelThunk}
        height={this.props.height}
        getFacultyThunk={this.props.getFacultyThunk}
        faculty={this.props.faculty}
        getExcelFacultyThunk={this.props.getExcelFacultyThunk}
        firstDate={this.props.firstDate}
        setFirstDate={this.props.setFirstDate}
        setSecondDate={this.props.setSecondDate}
        secondDate={this.props.secondDate}
        secondDateDisabled={this.props.secondDateDisabled}
        getStudentsThunk={this.props.getStudentsThunk}
        students={this.props.students}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    generalGroupStatistic: state.generalStatisticPage.generalGroupStatistic,
    groups: state.generalStatisticPage.groups,
    isLoading: state.generalStatisticPage.isLoading,
    height: state.generalStatisticPage.height,
    faculty: state.generalStatisticPage.faculty,
    firstDate: state.generalStatisticPage.firstDate,
    secondDate: state.generalStatisticPage.secondDate,
    secondDateDisabled: state.generalStatisticPage.secondDateDisabled,
    students: state.generalStatisticPage.students,
  };
};

export default connect(mapStateToProps, {
  getGroupsThunk,
  getExcelThunk,
  getGeneralGroupStatisticsThunk,
  getFacultyThunk,
  getExcelFacultyThunk,
  setFirstDate,
  setSecondDate,
  getStudentsThunk,
})(generalGroupStatisticContainer);
