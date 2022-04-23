import React from "react";
import { connect } from "react-redux";
import {
  getGeneralStatisticsThunk,
  getGroupsThunk,
  getDisciplinesStatisticThunk,
  getStudentsThunk,
  getStatisticByDisciplineStudentThunk,
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
        getGeneralStatisticsThunk={this.props.getGeneralStatisticsThunk}
        generalStatistics={this.props.generalStatistics}
        getGroupsThunk={this.props.getGroupsThunk}
        groups={this.props.groups}
        isLoading={this.props.isLoading}
        disciplinesStatistic={this.props.disciplinesStatistic}
        getDisciplinesStatisticThunk={this.props.getDisciplinesStatisticThunk}
        getStudentsThunk={this.props.getStudentsThunk}
        students={this.props.students}
        getStatisticByDisciplineStudentThunk={
          this.props.getStatisticByDisciplineStudentThunk
        }
        disciplineByStudentStatistic={this.props.disciplineByStudentStatistic}
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
    generalStatistics: state.generalStatisticPage.generalStatistics,
    groups: state.generalStatisticPage.groups,
    students: state.generalStatisticPage.students,
    isLoading: state.generalStatisticPage.isLoading,
    disciplinesStatistic: state.generalStatisticPage.disciplinesStatistic,
    disciplineByStudentStatistic:
      state.generalStatisticPage.disciplineByStudentStatistic,
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
  getGeneralStatisticsThunk,
  getGroupsThunk,
  getDisciplinesStatisticThunk,
  getStudentsThunk,
  getStatisticByDisciplineStudentThunk,
  getStudentStatisticByPeriodThunk,
  setFirstDate,
  setSecondDate,
  setDataByStudentStatisticPeriod,
  clearGraphStudentByPeriod,
})(studentStatisticContainer);
