import React from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";

class mainPageContainer extends React.Component {
  render() {
    return (
      <div>
        <MainPage discipline={this.props.discipline} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return { discipline: state.disciplinePage.discipline };
};

export default connect(mapStateToProps, {})(mainPageContainer);
