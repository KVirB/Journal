import React, { useCallback } from "react";
import "./Header.css";
import { connect } from "react-redux";
import {
  getJournalsiteThunk,
  clearJournalsite,
  setJournalHeader,
  setJH,
} from "../../reducer/journalsiteReducer";
import {
  getGroupThunk,
  getDisciplineThunk,
  clearGroup,
} from "../../reducer/headerReducer";
import { Collapse } from "bootstrap";
import { Hidden } from "@mui/material";

class Header extends React.Component {
  state = {
    disciplineId: 0,
    groupId: 0,
    typeClass: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { disciplineId, groupId } = this.state;
    if (disciplineId !== prevState.disciplineId) {
      this.props.getGroupThunk(disciplineId);
      this.props.clearGroup();
      this.props.clearJH();
      this.props.clearTP();
    }
    if (groupId !== prevState.groupId) {
      this.props.getJournalsiteThunk(disciplineId, groupId);
      console.log(disciplineId + groupId + "journalsite");
      (async () => {
        await this.props.setTP();
      })();
    }
  }

  getValueDiscipline = (e) => {
    const { value } = e.target;
    this.setState({
      disciplineId: value,
    });
    this.state.groupId = 0;
    if (localStorage.getItem("journalsite") !== null) {
      let dispConf = window.confirm(
        "У вас остались не сохраненные изменения. Сохранить?"
      );
      this.props.setJournalHeader();
      if (dispConf === true) {
        // setTimeout(() => {
        //   let header = this.props.journalHeader;
        //   this.props.getJournalHeaderThunk(header);
        //   this.props.clearJournalHeader();
        //   console.log(JSON.stringify(header) + "all good");
        //   alert("Сохранено");
        //   localStorage.clear();
        // }, 1);
        (async () => {
          await localStorage.clear();
          await this.props.clearJH();
          await this.props.clearTP();
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          this.props.clearJournalHeader();
          console.log(JSON.stringify(header) + "all good");
          alert("Сохранено");
        })();
      } else {
        localStorage.clear();
        this.props.clearTP();
      }
    }
  };
  getGroup = (e) => {
    const { value } = e.target;
    this.setState({
      groupId: value,
    });
    // setTimeout(this.props.setJournalHeader(), 1000);
  };
  getTypeClass = (e) => {
    // setTimeout(() => {
    //   this.props.clearJH();
    //   this.props.setJH(this.state.typeClass);
    //   console.log(this.state.typeClass + "SKOTINA");
    // }, 1);
    (async () => {
      await this.props.clearJH();
      await this.props.setJH(this.state.typeClass);
      console.log(this.state.typeClass + "SKOTINA");
    })();
    // call();
    const { value } = e.target;
    this.setState({
      typeClass: value,
    });
  };
  Logout = () => {
    window.location.assign("/electronicaljournal-view");
  };

  render() {
    const { getValueDiscipline, getGroup, getTypeClass, Logout } = this;
    return (
      <div>
        {console.log(this.state.typeClass)}
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
            "http://risovach.ru/thumb/upload/200s400/2019/08/generator/i-tak-soydet_217015291_orig_.png?d9qg6"
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
          <select id="select" className="view-input" onChange={getTypeClass}>
            <option value={this.state.typeClass} hidden>
              Выберите вид
            </option>
            {console.log(JSON.stringify(this.props.tp) + " ТИпы")}
            {this.props.tp.map((item) => (
              <option value={item.id}>{item.typeClass}</option>
            ))}
          </select>
          {/* <div className="view-date-name">Дата:</div>
          <input
            className="view-date-input"
            type="date"
            title="Выберите дату"
            onChange={getDateBox}
          ></input> */}
          <input
            className="button-header bt_color"
            type="submit"
            value="СОХРАНИТЬ"
            disabled={this.props.disabled}
            onClick={() => {
              this.props.setJournalHeader();
              setTimeout(() => {
                let header = this.props.journalHeader;
                this.props.getJournalHeaderThunk(header);
                this.props.clearJournalHeader();
                console.log(this.props.journalHeader + "KNOPKA");
              }, 1);
              this.props.setBtnTrue();
              console.log(this.props.disabled + "DISABLEDFAK");
              localStorage.removeItem("journalsite");
            }}
          />
          <input
            type="submit"
            className="button-header bt_left"
            name="commit"
            value="Выйти"
            onClick={Logout}
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
