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
import profile from "../../profile.png";
import mech from "../../Vector.png";
import col from "../../Col.png";
import que from "../../Que.png";
class Header extends React.Component {
  state = {
    disciplineId: 0,
    groupId: 0,
    typeClass: 0,
    subGroup: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { disciplineId, groupId, subGroup, typeClass } = this.state;
    if (disciplineId !== prevState.disciplineId) {
      this.props.getGroupThunk(disciplineId);
      this.props.clearGroup();
      this.props.clearJH();
      this.props.clearTP();
      this.props.clearSB();
    }
    if (groupId !== prevState.groupId) {
      this.props.getJournalsiteThunk(disciplineId, groupId);
      console.log(disciplineId + groupId + "journalsite");
      this.props.clearSB();
      (async () => {
        await this.props.setTP();
        // await this.props.setSB();
        this.props.clearSB();
      })();
    }
    if (typeClass !== prevState.typeClass) {
      (async () => {
        this.props.clearSB();
        this.props.clearJH();
      })();
      if (subGroup !== prevState.subGroup) {
        this.props.setBtnFalse();
      }
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
          await this.props.clearSB();
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          this.props.clearJournalHeader();
          console.log(JSON.stringify(header) + "all good");
          alert("Сохранено");
        })();
      } else {
        localStorage.clear();
        this.props.clearTP();
        this.props.clearSB();
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
      // this.props.setJH(this.state.typeClass, this.state.subGroup);
      this.props.setSB();
      console.log(this.state.typeClass + "SKOTINA");
      console.log(this.state.subGroup + "SKOTINA 2");
    })();
    // call();
    const { value } = e.target;
    this.setState({
      typeClass: value,
    });
  };
  getSubGroup = (e) => {
    (async () => {
      await this.props.clearJH();
      this.props.setJH(this.state.typeClass, this.state.subGroup);
      this.props.setPresent();
      console.log(this.state.subGroup + "OH SHIT");
    })();
    const { value } = e.target;
    this.setState({
      subGroup: value,
    });
  };

  Logout = () => {
    window.location.assign("/electronicaljournal-view");
  };

  render() {
    const { getValueDiscipline, getGroup, getTypeClass, Logout, getSubGroup } =
      this;
    return (
      <div>
        {console.log(this.state.typeClass)}
        {console.log(this.state.subGroup + "SB")}
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
        <header className="head display-flex">
          <h1 className="journal-name">
            <a className="j_name" href="/electronicaljournal-view/journal">
              Электронный журнал преподавателя УО «ВГТУ»
            </a>
          </h1>
          <div className="disp">
            <div className="icons_que">
              <a href="/electronicaljournal-view/journal">
                <img src={que}></img>
              </a>
            </div>
            <div className="icons_col">
              <a href="/electronicaljournal-view/journal">
                <img src={col}></img>
              </a>
            </div>
            <div className="icons_mech">
              <a href="/electronicaljournal-view/journal">
                <img src={mech}></img>
              </a>
            </div>
            <div>
              <img className="profile_pic" src={profile}></img>
            </div>
            <div>
              <label className="name_of_teacher">Абазовская Н.К.</label>
              <input
                type="submit"
                className="bth_exit"
                value="Выйти"
                onClick={Logout}
              />
            </div>
          </div>
        </header>
        {/* <button onClick={this.props.setPresent()}>ADDD</button> */}
        {/* <button onClick={(this.props.getDisciplineThunk(), this.groupId === 0)}>
          Сменить журнал
        </button> */}
        <div className="display-flex">
          <div>
            <div className="discipline-name">Название дисциплины</div>
            <select
              className="discipline-select"
              name="discipline"
              title="Выберите дисциплину"
              onChange={getValueDiscipline}
            >
              <option defaultValue="" hidden>
                Дисциплина
              </option>
              {this.props.discipline.map((m, i) => (
                <option className="lang__items" value={m.id} key={i}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div className="special-name">Специальность</div>
            <div className="special-select">Test</div>
          </div>
          <div>
            <img className="points"></img>
          </div>
        </div>
        <div className="headHr" />
        <div className="kuki">
          <div className="buki">
            <div>
              <div className="course-name">Курс</div>
              <div className="course-input">Test</div>
            </div>
            <div>
              <div className="group-name">Группа</div>
              <select
                className="group-select"
                name="select"
                title="Выберите группу"
                onChange={getGroup}
              >
                <option defaultValue="" hidden>
                  Группа
                </option>
                {this.props.group.map((m, i) => (
                  <option className="lang__items" value={m.group.id} key={i}>
                    {m.group.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className="view-name">Тип занятия</div>
              <select
                id="select"
                className="view-input"
                onChange={getTypeClass}
              >
                <option value={this.state.typeClass} hidden>
                  Тип
                </option>
                {console.log(JSON.stringify(this.props.tp) + " ТИпы")}
                {this.props.tp.map((item, i) => (
                  <option value={item.id} key={i}>
                    {item.typeClass}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className="pgroup-name">Подгруппа</div>
              <select
                id="select"
                className="group-select"
                onChange={getSubGroup}
              >
                <option value={this.state.subGroup} hidden>
                  Подгруппа
                </option>
                {console.log(JSON.stringify(this.props.sb) + " ТИпы")}
                {this.props.sb.map((item, i) => (
                  <option value={item.subGroup} key={i}>
                    {item.subGroup}
                  </option>
                ))}
              </select>
            </div>
          </div>
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
        </div>
        {this.props.teacher.map((m) => {
          return (
            <div>
              <input value={m.surname}></input>
            </div>
          );
        })}
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
