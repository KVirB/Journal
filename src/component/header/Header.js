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
  getTypeClassThunk,
  clearTypeClass,
  clearGroup,
} from "../../reducer/headerReducer";
import points from "../../points.png";
import MainHeader from "../header/MainHeader";
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
      this.props.clearTypeClass();
      this.props.clearSB();
    }
    if (groupId !== prevState.groupId) {
      this.props.getJournalsiteThunk(disciplineId, groupId);
      this.props.clearSB();
      (async () => {
        await this.props.getTypeClassThunk();
        this.props.clearTypeClass();
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
    this.setState({
      groupId: 0,
    });
    // this.state.groupId = 0;
    if (localStorage.getItem("journalsite") !== null) {
      let dispConf = window.confirm(
        "У вас остались не сохраненные изменения. Сохранить?"
      );
      this.props.setJournalHeader();
      if (dispConf === true) {
        (async () => {
          await localStorage.clear();
          await this.props.clearJH();
          this.props.setBtnTrue();
          this.props.getDisciplineThunk();
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          this.props.clearJournalHeader();
          alert("Сохранено");
        })();
      } else {
        localStorage.clear();
        this.props.clearTypeClass();
        this.props.clearSB();
      }
    }
  };
  getGroup = (e) => {
    const { value } = e.target;
    this.setState({
      groupId: value,
    });
  };
  getTypeClass = (e) => {
    if (localStorage.getItem("journalsite") !== null) {
      let dispConf = window.confirm(
        "У вас остались не сохраненные изменения. Сохранить?"
      );
      this.props.setJournalHeader();
      if (dispConf === true) {
        (async () => {
          await localStorage.clear();
          await this.props.clearJH();
          this.props.setBtnTrue();
          this.props.getDisciplineThunk();
          this.props.getGroupThunk(this.state.disciplineId);
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          this.props.clearJournalHeader();
          alert("Сохранено");
        })();
      } else {
        (async () => {
          this.props.getDisciplineThunk();
          this.props.getGroupThunk(this.state.disciplineId);
        })();
        localStorage.clear();
      }
    }
    (async () => {
      await this.props.clearJH();
      this.props.setSB();
    })();
    (async () => {
      const { value } = e.target;
      await this.setState({
        typeClass: value,
      });
      this.props.setType(this.state.typeClass);
    })();
  };
  getSubGroup = (e) => {
    if (localStorage.getItem("journalsite") !== null) {
      let dispConf = window.confirm(
        "У вас остались не сохраненные изменения. Сохранить?"
      );
      this.props.setJournalHeader();
      if (dispConf === true) {
        (async () => {
          await localStorage.clear();
          await this.props.clearJH();
          this.props.setBtnTrue();
          this.props.getDisciplineThunk();
          this.props.getGroupThunk(this.state.disciplineId);
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          this.props.clearJournalHeader();
          alert("Сохранено");
        })();
      } else {
        (async () => {
          this.props.getDisciplineThunk();
          this.props.getGroupThunk(this.state.disciplineId);
        })();
        localStorage.clear();
      }
    }
    (async () => {
      await this.props.clearJH();
      await this.props.clearPresent();
      this.props.setJH(this.state.typeClass, this.state.subGroup);
      this.props.setPresent();
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
        {console.log(this.state.typeClass + "TypeClass")}
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
        <MainHeader />
        <div className="display-flex pointer">
          <div className="display-flex">
            <div>
              <div className="discipline-name">Название дисциплины</div>
              <div className="select">
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
            </div>
            <div>
              <div className="special-name">Специальность</div>
              <div className="special-select">Test</div>
            </div>
          </div>
          <div>
            <a href="/electronicaljournal-view/journal">
              <img className="points" src={points} alt="description"></img>
            </a>
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
                <option defaultValue="" hidden>
                  Тип
                </option>
                {this.props.typeClass.map((item, i) => (
                  <option value={item.id} key={i}>
                    {item.name}
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
                {this.props.sb.map((item, i) => (
                  <option value={item.subGroup} key={i}>
                    {item.subGroup}
                  </option>
                ))}
              </select>
            </div>
          </div>
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
              }, 1);
              this.props.setBtnTrue();
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
  getTypeClassThunk,
  clearTypeClass,
  clearJournalsite,
  clearGroup,
  setJournalHeader,
})(Header);
