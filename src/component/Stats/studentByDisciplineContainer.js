import React from "react";
import { connect } from "react-redux";
import {
  getGeneralStatisticsThunk,
  getGroupsThunk,
  getDisciplinesStatisticThunk,
  getStudentsThunk,
  getStatisticByDisciplineStudentThunk,
} from "../../reducer/statisticsReducer";
import StudentByDiscipline from "./StudentByDiscipline";

class studentByDisciplineContainer extends React.Component {
  render() {
    return (
      <StudentByDiscipline
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
  };
};

export default connect(mapStateToProps, {
  getGeneralStatisticsThunk,
  getGroupsThunk,
  getDisciplinesStatisticThunk,
  getStudentsThunk,
  getStatisticByDisciplineStudentThunk,
})(studentByDisciplineContainer);
