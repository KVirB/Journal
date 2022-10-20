import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { connect } from "react-redux";
import { getTeacherProfileThunk } from "../../reducer/managementReducer";
import { setProfileImageThunk } from "../../reducer/teacherReducer";
import TeacherProfile from "./TeacherProfile";

class teacherProfileContainer extends React.Component {
  render() {
    return (
      <div>
        <TeacherProfile
          teacherProf={this.props.teacherProf}
          getTeacherProfileThunk={this.props.getTeacherProfileThunk}
          setProfileImageThunk={this.props.setProfileImageThunk}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    teacherProf: state.managementPage.teacherProf,
    image: state.teacherPage.image,
  };
};

export default connect(mapStateToProps, {
  getTeacherProfileThunk,
  setProfileImageThunk,
})(teacherProfileContainer);
