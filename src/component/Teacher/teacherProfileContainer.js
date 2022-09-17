import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { connect } from "react-redux";
import { getTeacherProfileThunk } from "../../reducer/managementReducer";
import TeacherProfile from "./TeacherProfile";

class teacherProfileContainer extends React.Component {
  render() {
    return (
      <div>
        <TeacherProfile
          teacherProf={this.props.teacherProf}
          getTeacherProfileThunk={this.props.getTeacherProfileThunk}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    teacherProf: state.managementPage.teacherProf,
  };
};

export default connect(mapStateToProps, {
  getTeacherProfileThunk,
})(teacherProfileContainer);
