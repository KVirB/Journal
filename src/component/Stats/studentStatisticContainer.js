import React from "react";
import { connect } from "react-redux";
import {
  getGroupsThunk,
  getStudentsThunk,
  getStudentStatisticByPeriodThunk,
  setFirstDate,
  setSecondDate,
  setDataByStudentStatisticPeriod,
  clearGraphStudentByPeriod,
} from "../../reducer/statisticsReducer";
import StudentStatistic from "./StudentStatistic";

class studentStatisticContainer extends React.Component {
  render() {
    return (
      <StudentStatistic
        getGroupsThunk={this.props.getGroupsThunk}
        groups={this.props.groups}
        isLoading={this.props.isLoading}
        getStudentsThunk={this.props.getStudentsThunk}
        students={this.props.students}
        getStudentStatisticByPeriodThunk={
          this.props.getStudentStatisticByPeriodThunk
        }
        studentStatisticByPeriod={this.props.studentStatisticByPeriod}
        setFirstDate={this.props.setFirstDate}
        setSecondDate={this.props.setSecondDate}
        firstDate={this.props.firstDate}
        secondDate={this.props.secondDate}
        dataByStudentStatisticPeriod={this.props.dataByStudentStatisticPeriod}
        setDataByStudentStatisticPeriod={
          this.props.setDataByStudentStatisticPeriod
        }
        secondDateDisabled={this.props.secondDateDisabled}
        clearGraphStudentByPeriod={this.props.clearGraphStudentByPeriod}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    groups: state.generalStatisticPage.groups,
    students: state.generalStatisticPage.students,
    isLoading: state.generalStatisticPage.isLoading,
    studentStatisticByPeriod:
      state.generalStatisticPage.studentStatisticByPeriod,
    firstDate: state.generalStatisticPage.firstDate,
    secondDate: state.generalStatisticPage.secondDate,
    dataByStudentStatisticPeriod:
      state.generalStatisticPage.dataByStudentStatisticPeriod,
    secondDateDisabled: state.generalStatisticPage.secondDateDisabled,
  };
};

export default connect(mapStateToProps, {
  getGroupsThunk,
  getStudentsThunk,
  getStudentStatisticByPeriodThunk,
  setFirstDate,
  setSecondDate,
  setDataByStudentStatisticPeriod,
  clearGraphStudentByPeriod,
})(studentStatisticContainer);
