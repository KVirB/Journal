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
    if (groupId !== prevState.groupId) {
      this.props.getJournalsiteThunk(disciplineId, groupId);
      // setTimeout(() => {
      //   this.props.setJournalContent();
      // }, 2000);
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
        {/* {
          (console.log(
            "%cProject by KVirB",
            "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: green 4px 3px;"
          ),
          (function (url) {
            var image = new Image();
            image.onload = function () {
              var style = [
                "font-size: 1px;",
                "line-height: " + (this.height % 1) + "px;",
                "padding: " +
                  this.height * 0.5 +
                  "px " +
                  this.width * 0.5 +
                  "px;",
                "background-size: " + this.width + "px " + this.height + "px;",
                "background: url(" + url + ");",
              ].join(" ");
              console.log("%c ", style);
            };
            image.src = url;
          })(
            "https://sun9-81.userapi.com/impf/c844722/v844722913/8551/Am47flPpzps.jpg?size=640x779&quality=96&sign=86355b3cd90677656fb561ed534e5a2b&type=album"
          ))
        } */}

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
            className="button-header bt_color"
            type="submit"
            value="СОХРАНИТЬ"
            onClick={() => {
              this.props.setJournalHeader();
              setTimeout(() => {
                let header = this.props.journalHeader;
                this.props.getJournalHeaderThunk(header);
                this.props.clearJournalHeader();
              }, 300);
            }}
          />
          {console.log(JSON.stringify(this.props.journalHeader) + "HEADERRRRR")}
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
