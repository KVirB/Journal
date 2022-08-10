import * as React from "react";
import "../app/App.css";

export default class marksTableHeader extends React.Component {
  render() {
    {
      return (
        <div className="disp">
          <div className="block_for_marksTable">
            <p className="name_for_marksTable name_discipline_header">
              Название дисциплины:
            </p>
            <input
              className="input_discipline_for_marksTable"
              defaultValue={localStorage.getItem("disciplineName")}
              disabled="true"
            ></input>
          </div>
          <div className="block_for_marksTable">
            <p className="name_for_marksTable">Группа:</p>
            <input
              className="input_group_for_marksTable"
              defaultValue={localStorage.getItem("groupName")}
              disabled="true"
            ></input>
          </div>
        </div>
      );
    }
  }
}
