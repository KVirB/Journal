import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import { getJournalsiteThunk } from "../../reducer/journalsiteReducer";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { getJournalsite } from "../../BD/tables";
import { MenuList } from "@mui/material";
import { getGroupThunk } from "../../reducer/headerReducer";
class Header extends React.Component {
  state = {
    disciplineId: 0,
    groupId: 0,
  };
  componentDidUpdate(prevProps, prevState) {
    const { disciplineId, groupId } = this.state;
    if (disciplineId !== prevState.disciplineId) {
      this.props.getGroupThunk(disciplineId);
    }
    console.log(prevState.disciplineId);
    if (groupId !== prevState.groupId) {
      console.log(999);
      this.props.getJournalsiteThunk(disciplineId, groupId);
    }
  }
  getValueDiscipline = (e) => {
    const { value } = e.target;
    this.setState({
      disciplineId: value,
    });
  };
  getGroup = (e) => {
    const { value } = e.target;
    this.setState({
      groupId: value,
    });
  };
  render() {
    const { getValueDiscipline } = this;
    const { getGroup } = this;
    return (
      <div>
        {console.log(this.state.disciplineId)}
        <div className="journal-name">Электронный журнал преподователя</div>
        <div className="display-flex">
          <div className="discipline-name">Название дисциплины:</div>
          <select
            className="discipline-select"
            name="discipline"
            title="Выберите дисциплину"
            onChange={getValueDiscipline}
          >
            <option value="" selected hidden>
              Выберите дисциплину
            </option>
            {this.props.discipline.map((m) => (
              <option className="lang__items" value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
          <div className="special-name">Специальность:</div>
          <label className="special-select"></label>
        </div>
        <div className="display-flex">
          <div className="course-name">Курс:</div>
          <label className="course-input"></label>
          <div className="group-name">Группа:</div>
          <select
            className="group-select"
            name="select"
            title="Выберите группу"
            onChange={getGroup}
          >
            <option value="" selected hidden>
              Выберите группу
            </option>
            {this.props.group.map((m) => (
              <option className="lang__items" value={m.group.id}>
                {m.group.name}
              </option>
            ))}
          </select>
          <div className="view-name">Вид занятий:</div>
          <label className="view-input"></label>
        </div>
      </div>
    );
  }
}
export default connect(null, { getJournalsiteThunk, getGroupThunk })(Header);
