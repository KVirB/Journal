import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { connect } from "react-redux";
import {
  getGroupsThunk,
  getExcelThunk,
  getGeneralGroupStatisticsThunk,
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
  };
};

export default connect(mapStateToProps, {
  getGroupsThunk,
  getExcelThunk,
  getGeneralGroupStatisticsThunk,
})(generalGroupStatisticContainer);
