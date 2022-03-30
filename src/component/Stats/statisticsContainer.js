import React from "react";
import { connect } from "react-redux";
import {
  getGeneralStatisticsThunk,
  getGroupsThunk,
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
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    generalStatistics: state.generalStatisticPage.generalStatistics,
    groups: state.generalStatisticPage.groups,
    isLoading: state.generalStatisticPage.isLoading,
  };
};

export default connect(mapStateToProps, {
  getGeneralStatisticsThunk,
  getGroupsThunk,
})(statisticsContainer);
