import React from "react";
import { connect } from "react-redux";
import {
  getGeneralStatisticsThunk,
  getGroupsThunk,
  getDisciplinesStatisticThunk,
} from "../../reducer/statisticsReducer";
import Statistics from "./Statistics.js";
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
  };
};

export default connect(mapStateToProps, {
  getGeneralStatisticsThunk,
  getGroupsThunk,
  getDisciplinesStatisticThunk,
})(studentByDisciplineContainer);
