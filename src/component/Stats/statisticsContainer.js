import React from "react";
import { connect } from "react-redux";
import { getGeneralStatisticsThunk } from "../../reducer/statisticsReducer";
import Statistics from "./Statistics.js";

class statisticsContainer extends React.Component {
  render() {
    return (
      <Statistics
        getGeneralStatisticsThunk={this.props.getGeneralStatisticsThunk}
        generalStatistics={this.props.generalStatistics}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    generalStatistics: state.generalStatisticPage.generalStatistics,
  };
};

export default connect(mapStateToProps, {
  getGeneralStatisticsThunk,
})(statisticsContainer);
