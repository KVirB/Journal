import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { connect } from "react-redux";
import { getTeacherManagement } from "../../reducer/managementReducer";
import ManagementPage from "./ManagementPage";

class managementPageContainer extends React.Component {
  componentDidMount() {
    this.props.getTeacherManagement();
  }
  render() {
    return (
      <div>
        <ManagementPage
          teachers={this.props.teachers}
          getTeacherManagement={this.props.getTeacherManagement}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    teachers: state.managementPage.teachers,
  };
};

export default connect(mapStateToProps, {
  getTeacherManagement,
})(managementPageContainer);
