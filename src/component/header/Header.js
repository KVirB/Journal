import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import {
  getJournalsiteThunk,
  clearJournalsite,
  setJournalHeader,
  setJournalsite,
} from "../../reducer/journalsiteReducer";
import {
  getGroupThunk,
  getDisciplineThunk,
  getTypeClassThunk,
  clearTypeClass,
  clearGroup,
  getSubGroupThunk,
  clearSubGroup,
} from "../../reducer/headerReducer";
import points from "../../points.png";
import Select from "react-select";
class Header extends React.Component {
  state = {
    disciplineId: null,
    groupId: null,
    typeClass: null,
    subGroup: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { disciplineId, groupId, subGroup, typeClass } = this.state;
    if (disciplineId !== prevState.disciplineId) {
      (async () => {
        this.props.getGroupThunk(disciplineId);
        await this.props.clearGroup();
        this.props.clearTypeClass();
        this.props.clearSubGroup();
        this.props.clearJournalsite();
      })();
    }
    if (groupId !== prevState.groupId) {
      this.props.clearJournalsite();
      this.props.getCourseSpecThunk(this.state.groupId);
      this.props.clearTypeClass();
      this.props.clearSubGroup();
    }
    if (typeClass !== prevState.typeClass) {
      this.props.clearJournalsite();
      this.props.clearSubGroup();
    }
    if (subGroup !== prevState.subGroup) {
      this.props.clearJournalsite();
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

    if (localStorage.getItem("journalsite") !== null) {
      let dispConf = window.confirm(
        "У вас остались не сохраненные изменения. Сохранить?"
      );

      if (dispConf === true) {
        (async () => {
          await this.props.setJournalHeader();
          await this.props.clearJournalHeader();
          this.props.setBtnTrue();
          this.props.getDisciplineThunk();
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          alert("Сохранено");
          localStorage.removeItem("journalsite");
          this.props.clearJournalsite();
        })();
      } else {
        localStorage.removeItem("journalsite");
        this.props.clearGroup();
        this.props.clearTypeClass();
        this.props.clearSubGroup();
        this.props.clearJournalsite();
        this.props.setBtnTrue();
      }
    }
    (async () => {
      await this.props.setPresent();
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
      localStorage.setItem("typeC", this.state.typeClass);
      this.props.setJH();
    })();
  };
  getGroup = (e) => {
    this.setState({
      groupId: e,
    });

    this.props.clearJournalsite();
    this.props.getTypeClassThunk();
    if (localStorage.getItem("journalsite") !== null) {
      let dispConf = window.confirm(
        "У вас остались не сохраненные изменения. Сохранить?"
      );
      if (dispConf === true) {
        (async () => {
          await this.props.setJournalHeader();
          await this.props.clearJournalHeader();
          this.props.setJournalHeader();
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          alert("Сохранено");
          localStorage.removeItem("journalsite");
          this.props.clearJournalsite();
        })();
      } else {
        localStorage.removeItem("journalsite");
        this.props.clearTypeClass();
        this.props.clearSubGroup();
        this.props.clearJournalsite();
        this.props.setBtnTrue();
      }
    }
    (async () => {
      await this.props.setPresent();
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
      localStorage.setItem("typeC", this.state.typeClass);
      this.props.setJH();
    })();
  };
  getTypeClass = (e) => {
    if (localStorage.getItem("journalsite") !== null) {
      let dispConf = window.confirm(
        "У вас остались не сохраненные изменения. Сохранить?"
      );

      if (dispConf === true) {
        (async () => {
          await this.props.setJournalHeader();
          await this.props.clearJH();
          this.props.setBtnTrue();
          this.props.getDisciplineThunk();
          this.props.getGroupThunk(this.state.disciplineId);
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          this.props.clearJournalHeader();
          alert("Сохранено");
          localStorage.removeItem("journalsite");
          this.props.clearSubGroup();
          this.props.clearJournalsite();
        })();
      } else {
        (async () => {
          this.props.getDisciplineThunk();
          this.props.getGroupThunk(this.state.disciplineId);
        })();
        localStorage.removeItem("journalsite");
        this.props.clearJournalsite();
        this.props.clearSubGroup();
        this.props.setBtnTrue();
      }
    }

    (async () => {
      await this.setState({
        typeClass: e,
      });
      this.props.setType(this.state.typeClass);
      await this.props.clearSubGroup();
      this.props.getSubGroupThunk();
    })();
    (async () => {
      await this.props.setPresent();
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
      localStorage.setItem("typeC", this.state.typeClass);
      this.props.setJH();
    })();
  };
  getSubGroup = (e) => {
    this.setState({
      subGroup: e,
    });
    (async () => {
      await this.props.setPresent();
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
      localStorage.setItem("typeC", this.state.typeClass);
      this.props.setJH();
    })();
    if (localStorage.getItem("journalsite") !== null) {
      let dispConf = window.confirm(
        "У вас остались не сохраненные изменения. Сохранить?"
      );

      if (dispConf === true) {
        (async () => {
          await this.props.setJournalHeader();
          await this.props.clearJH();
          this.props.setBtnTrue();
          this.props.getDisciplineThunk();
          this.props.getGroupThunk(this.state.disciplineId);
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          this.props.clearJournalHeader();
          alert("Сохранено");
          localStorage.removeItem("journalsite");
        })();
      } else {
        (async () => {
          this.props.getDisciplineThunk();
          this.props.getGroupThunk(this.state.disciplineId);
        })();
        localStorage.removeItem("journalsite");
        this.props.setBtnTrue();
      }
    }
  };

  href = (e) => {
    window.location.assign(e);
  };

  Logout = () => {
    window.location.assign("/electronicaljournal-view");
  };

  render() {
    const {
      getValueDiscipline,
      getGroup,
      getTypeClass,
      Logout,
      getSubGroup,
      href,
    } = this;
    return (
      <div>
        {console.log(this.props.typeC + "TYPE CCCCC")}
        {console.log(
          this.state.disciplineId +
            "disc" +
            this.state.groupId +
            "group" +
            this.state.typeClass +
            "type" +
            this.state.subGroup +
            "sub"
        )}
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
        <div className="display-flex pointer">
          {console.log(JSON.stringify(this.props.courseSpec) + "spec")}
          <div className="display-flex">
            <div>
              <div className="discipline-name">Название дисциплины</div>
              <div className="styled-select-disс">
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
                    <option
                      className="lang__items"
                      value={m.discipline.id}
                      key={i}
                    >
                      {m.discipline.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <div className="special-name">Специальность</div>
              <div className="special-select">
                {this.props.courseSpec.map(
                  (courseSpec) => courseSpec.specialty.name
                )}
              </div>
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
              <div className="course-input">
                {this.props.courseSpec.map((courseSpec) => courseSpec.сourse)}
              </div>
            </div>
            <div>
              <div className="group-name">Группа</div>
              <Select
                className="group-select"
                onChange={(e) => getGroup(e.value)}
                options={this.props.group.map((m, i) => ({
                  value: m.group.name,
                  label: m.group.name,
                }))}
              />
            </div>
            <div>
              <div className="view-name">Тип занятия</div>
              <Select
                className="view-input"
                onChange={(e) => getTypeClass(e.value)}
                options={
                  this.props.typeClass !== null
                    ? this.props.typeClass.map((item, i) => ({
                        value: item.id,
                        label: item.name,
                      }))
                    : { value: null, label: null }
                }
              />
            </div>
            <div>
              <div className="pgroup-name">Подгруппа</div>
              <Select
                className="group-select"
                onChange={(e) => getSubGroup(e.value)}
                options={this.props.subGroup.map((item, i) => ({
                  value: item.subGroupNumber,
                  label:
                    item.subGroupNumber === 0 ? "Все" : item.subGroupNumber,
                }))}
              />
            </div>
          </div>
          <div>
            <div className="pgroup-name">Статистика</div>
            <Select
              className="statistic-select"
              onChange={(e) => href(e.value)}
              options={[
                {
                  value: `/electronicaljournal-view/statistics`,
                  label: "Статистика по группе",
                },
                {
                  value: `/electronicaljournal-view/statisticsstudent`,
                  label: "Статистика по студенету",
                },
              ]}
            />
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
  getSubGroupThunk,
  clearSubGroup,
  clearTypeClass,
  clearJournalsite,
  clearGroup,
  setJournalHeader,
  setJournalsite,
})(Header);
