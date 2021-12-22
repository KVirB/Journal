import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import {
  getJournalsiteThunk,
  clearJournalsite,
  setJournalHeader,
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
  Logout = () => {
    window.location.assign("/electronicaljournal-view");
  };
  render() {
    const { getValueDiscipline, getGroup, getDateBox, Logout } = this;
    return (
      <div>
        {console.log(this.state.disciplineId)}
        {console.log(this.state.date)}
        {console.log(this.props.teacher + "gsdgsgsdgsgsgs")}

        <div className="journal-name">Электронный журнал преподавателя</div>
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
          <input
            className="view-input"
            value={this.props.journalsite.map((m) =>
              m.journalHeaders.map((item) => {
                return item.typeClass.name;
              })
            )}
            readOnly
          ></input>
          {/* <div className="view-date-name">Дата:</div>
          <input
            className="view-date-input"
            type="date"
            title="Выберите дату"
            onChange={getDateBox}
          ></input> */}
          <input
            type="submit"
            className="button-header"
            name="commit"
            value="Выйти"
            onClick={Logout}
          />
          <input
            className="button-header"
            type="submit"
            value="ВНИМАНИЕ, СОХРАНИТЬ - КНОПКА КОТОРАЯ СОХРАНЯЕТ, ЕСЛИ НЕ НАЖАТЬ, НЕ СОХРАНИТ"
            onClick={() => {
              this.props.setJournalHeader();
              setTimeout(() => {
                let header = this.props.journalHeader;
                this.props.getJournalHeaderThunk(header);
                console.log(this.props.journalHeader + "наш хидер");
                this.props.clearJournalHeader();
              }, 300);
            }}
          />
          {this.props.teacher.map((m) => {
            return (
              <div>
                <input value={m.surname}></input>
              </div>
            );
          })}
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
  setJournalHeader,
})(Header);
