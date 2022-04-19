import * as React from "react";
import "../app/App.css";
import Select from "react-select";

export default class MainPage extends React.Component {
  state = {
    disciplineId: null,
    groupId: null,
    typeClass: null,
    subGroup: null,
    typeClassName: null,
  };
  getValueDiscipline = (e) => {
    (async () => {
      await this.setState({
        disciplineId: e,
      });
      if (
        this.state.disciplineId !== null &&
        this.state.groupId !== null &&
        this.state.typeClass !== null &&
        this.state.subGroup !== null
      ) {
        await this.props.getJournalsiteThunk(
          this.state.disciplineId,
          this.state.groupId,
          this.state.typeClass,
          this.state.subGroup
        );
      }
      localStorage.setItem("typeC", this.state.typeClassName);
      if (typeof Storage !== "undefined") {
        localStorage.setItem("disciplineId", this.state.disciplineId);
      }
      this.props.clearJournalsite();
      setTimeout(() => {
        this.props.setPresent();
      }, 100);
    })();
  };
  render() {
    {
      return (
        <div>
          <div className="display-flex">
            <div className="burger_button">
              <div className="burger_line_first"></div>
              <div className="burger_line_center"></div>
              <div className="burger_line_last"></div>
            </div>
            <div className="display-flex header_main">
              <div className="discipline_name_main">Выберите дисциплину:</div>
              <Select
                className="discipline_select_main"
                onChange={(e) => this.getValueDiscipline(e.value)}
                defaultValue={
                  localStorage.getItem("disciplineName") !== null
                    ? {
                        value: localStorage.getItem("disciplineName"),
                        label: localStorage.getItem("disciplineName"),
                      }
                    : { value: "disciplines", label: "Дисциплина" }
                }
                options={this.props.discipline.map((m, i) => ({
                  value: m.id,
                  label: m.name,
                }))}
              />
            </div>
          </div>
          <div className="cards_main"> GDFSGDFSGDFS</div>
        </div>
      );
    }
  }
}
