import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { connect } from "react-redux";
import {
  getTeacherManagement,
  getTeacherProfileThunk,
  getTeacherManagementByIdThunk,
  getTeachersSearchThunk,
  getTeacherManagementByDepartmentThunk,
} from "../../reducer/managementReducer";
import { getFacultyThunk } from "../../reducer/statisticsReducer";
import ManagementPage from "./ManagementPage";
import { getTeacherIconThunk } from "../../reducer/managementReducer";

class managementPageContainer extends React.Component {
  componentDidMount() {
    this.props.getTeacherManagement();
    // this.props.getTeacherManagementByIdThunk(163);
    // this.props.getTeacherManagementByDepartmentThunk(21);
  }

  render() {
    return (
      <div>
        <ManagementPage
          teachers={this.props.teachers}
          teachersSearch={this.props.teachersSearch}
          getTeachersSearchThunk={this.props.getTeachersSearchThunk}
          getTeacherManagement={this.props.getTeacherManagement}
          getTeacherProfileThunk={this.props.getTeacherProfileThunk}
          getTeacherManagementByIdThunk={
            this.props.getTeacherManagementByIdThunk
          }
          getFacultyThunk={this.props.getFacultyThunk}
          faculty={this.props.faculty}
          getTeacherManagementByDepartmentThunk={
            this.props.getTeacherManagementByDepartmentThunk
          }
          getTeacherIconThunk={this.props.getTeacherIconThunk}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    teachersSearch: state.managementPage.teachersSearch,
    teachers: state.managementPage.teachers,
    faculty: state.generalStatisticPage.faculty,
  };
};

export default connect(mapStateToProps, {
  getFacultyThunk,
  getTeacherManagement,
  getTeacherProfileThunk,
  getTeacherManagementByIdThunk,
  getTeachersSearchThunk,
  getTeacherManagementByDepartmentThunk,
  getTeacherIconThunk,
})(managementPageContainer);
