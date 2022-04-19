import React from "react";
import { connect } from "react-redux";
import {
  getGeneralStatisticsThunk,
  getGroupsThunk,
  getDisciplinesStatisticThunk,
  getStudentsThunk,
} from "../../reducer/statisticsReducer";
import Statistics from "./Statistics.js";

class statisticsContainer extends React.Component {
  render() {
    return (
      <Statistics
        getGeneralStatisticsThunk={this.props.getGeneralStatisticsThunk}
        generalStatistics={this.props.generalStatistics}
        getGroupsThunk={this.props.getGroupsThunk}
        groups={this.props.groups}
        isLoading={this.props.isLoading}
        disciplinesStatistic={this.props.disciplinesStatistic}
        getDisciplinesStatisticThunk={this.props.getDisciplinesStatisticThunk}
        students={this.props.students}
        getStudentsThunk={this.props.getStudentsThunk}
        height={this.props.height}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    generalStatistics: state.generalStatisticPage.generalStatistics,
    groups: state.generalStatisticPage.groups,
    isLoading: state.generalStatisticPage.isLoading,
    disciplinesStatistic: state.generalStatisticPage.disciplinesStatistic,
    students: state.generalStatisticPage.students,
    height: state.generalStatisticPage.height,
  };
};

export default connect(mapStateToProps, {
  getGeneralStatisticsThunk,
  getGroupsThunk,
  getDisciplinesStatisticThunk,
  getStudentsThunk,
})(statisticsContainer);
