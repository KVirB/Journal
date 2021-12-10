import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import {
  getJournalsiteThunk,
  clearJournalsite,
} from "../../reducer/journalsiteReducer";
import {
  getGroupThunk,
  getDisciplineThunk,
  clearGroup,
} from "../../reducer/headerReducer";
class Header extends React.Component {
  state = {
    disciplineId: 0,
    groupId: 0,
    date: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { disciplineId, groupId } = this.state;
    if (disciplineId !== prevState.disciplineId) {
      this.props.getGroupThunk(disciplineId);
      this.props.clearGroup();
    }
    console.log(prevState.disciplineId);
    if (groupId !== prevState.groupId) {
      this.props.getJournalsiteThunk(disciplineId, groupId);
      this.props.clearJournalsite();
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
  getDateBox = (e) => {
    const { value } = e.target;
    this.setState({
      date: value,
    });
  };
  render() {
    const { getValueDiscipline, getGroup, getDateBox } = this;
    return (
      <div>
        {console.log(this.state.disciplineId)}
        {console.log(this.state.date)}
        <div className="journal-name">Электронный журнал преподователя</div>
        {/* <button onClick={(this.props.getDisciplineThunk(), this.groupId === 0)}>
          Сменить журнал
        </button> */}
        <div className="display-flex">
          <div className="discipline-name">Название дисциплины:</div>
          <select
            className="discipline-select"
            name="discipline"
            title="Выберите дисциплину"
            onChange={getValueDiscipline}
          >
            <option defaultValue="" hidden>
              Выберите дисциплину
            </option>
            {this.props.discipline.map((m, i) => (
              <option className="lang__items" value={m.id} key={i}>
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
            <option defaultValue="" hidden>
              Выберите группу
            </option>
            {this.props.group.map((m, i) => (
              <option className="lang__items" value={m.group.id} key={i}>
                {m.group.name}
              </option>
            ))}
          </select>
          <div className="view-name">Вид занятий:</div>
          {this.props.journalsite.map((m) =>
            m.journalHeaders.map((item, i) => {
              if (i === 0)
                return (
                  <label className="view-input" key={i}>
                    {item.typeClass.name}
                  </label>
                );
            })
          )}
          <div className="view-date-name">Дата:</div>
          <input
            className="view-date-input"
            type="date"
            title="Выберите дату"
            onChange={getDateBox}
          ></input>
        </div>
      </div>
    );
  }
}
export default connect(null, {
  getJournalsiteThunk,
  getGroupThunk,
  getDisciplineThunk,
  clearJournalsite,
  clearGroup,
})(Header);
