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
    typeClassName: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { disciplineId, groupId, subGroup, typeClass } = this.state;
    if (disciplineId !== prevState.disciplineId) {
      (async () => {
        if (localStorage.getItem("journalsite") !== null) {
          let dispConf = window.confirm(
            "У вас остались не сохраненные изменения. Сохранить?"
          );

          if (dispConf === true) {
            await this.props.setJournalHeader();
            let header = this.props.journalHeader;
            await this.props.getJournalHeaderThunk(header);
            this.props.clearJournalHeader();
            this.props.setBtnTrue();
            localStorage.removeItem("journalsite");
            localStorage.removeItem("disciplineId");
            localStorage.removeItem("disciplineName");
            localStorage.removeItem("typeClassId");
            localStorage.removeItem("groupId");
            localStorage.removeItem("subgroupId");
            alert("Сохранено");
          } else {
            // (async () => {
            //   this.props.getDisciplineThunk();
            //   this.props.getGroupThunk(this.state.disciplineId);
            // })();
            localStorage.removeItem("journalsite");
            localStorage.removeItem("journalsite");
            localStorage.removeItem("disciplineId");
            localStorage.removeItem("disciplineName");
            localStorage.removeItem("typeClassId");
            localStorage.removeItem("groupId");
            localStorage.removeItem("subgroupId");
          }
        }
        this.props.getGroupThunk(disciplineId);
        await this.props.clearGroup();
        this.props.clearJournalsite();
      })();
    }
    if (groupId !== prevState.groupId) {
      (async () => {
        if (localStorage.getItem("journalsite") !== null) {
          let dispConf = window.confirm(
            "У вас остались не сохраненные изменения. Сохранить?"
          );

          if (dispConf === true) {
            await this.props.setJournalHeader();
            let header = this.props.journalHeader;
            await this.props.getJournalHeaderThunk(header);
            this.props.clearJournalHeader();
            this.props.setBtnTrue();
            localStorage.removeItem("journalsite");
            localStorage.removeItem("disciplineId");
            localStorage.removeItem("disciplineName");
            localStorage.removeItem("typeClassId");
            localStorage.removeItem("groupId");
            localStorage.removeItem("subgroupId");
            alert("Сохранено");
          } else {
            // (async () => {
            //   this.props.getDisciplineThunk();
            //   this.props.getGroupThunk(this.state.disciplineId);
            // })();
            localStorage.removeItem("journalsite");
            localStorage.removeItem("journalsite");
            localStorage.removeItem("disciplineId");
            localStorage.removeItem("disciplineName");
            localStorage.removeItem("typeClassId");
            localStorage.removeItem("groupId");
            localStorage.removeItem("subgroupId");
          }
        }
        this.props.clearJournalsite();
        this.props.getCourseSpecThunk(this.state.groupId);
        this.props.clearTypeClass();
      })();
    }
    if (typeClass !== prevState.typeClass) {
      (async () => {
        if (localStorage.getItem("journalsite") !== null) {
          let dispConf = window.confirm(
            "У вас остались не сохраненные изменения. Сохранить?"
          );

          if (dispConf === true) {
            await this.props.setJournalHeader();
            let header = this.props.journalHeader;
            await this.props.getJournalHeaderThunk(header);
            this.props.clearJournalHeader();
            this.props.setBtnTrue();
            localStorage.removeItem("journalsite");
            localStorage.removeItem("disciplineId");
            localStorage.removeItem("disciplineName");
            localStorage.removeItem("typeClassId");
            localStorage.removeItem("groupId");
            localStorage.removeItem("subgroupId");
            alert("Сохранено");
          } else {
            // (async () => {
            //   this.props.getDisciplineThunk();
            //   this.props.getGroupThunk(this.state.disciplineId);
            // })();
            localStorage.removeItem("journalsite");
            localStorage.removeItem("journalsite");
            localStorage.removeItem("disciplineId");
            localStorage.removeItem("disciplineName");
            localStorage.removeItem("typeClassId");
            localStorage.removeItem("groupId");
            localStorage.removeItem("subgroupId");
          }
        }
        this.props.clearJournalsite();
        this.props.clearSubGroup();
      })();
    }
    if (subGroup !== prevState.subGroup) {
      (async () => {
        if (localStorage.getItem("journalsite") !== null) {
          let dispConf = window.confirm(
            "У вас остались не сохраненные изменения. Сохранить?"
          );

          if (dispConf === true) {
            await this.props.setJournalHeader();
            let header = this.props.journalHeader;
            await this.props.getJournalHeaderThunk(header);
            this.props.clearJournalHeader();
            this.props.setBtnTrue();
            localStorage.removeItem("journalsite");
            localStorage.removeItem("disciplineId");
            localStorage.removeItem("disciplineName");
            localStorage.removeItem("typeClassId");
            localStorage.removeItem("groupId");
            localStorage.removeItem("subgroupId");
            alert("Сохранено");
          } else {
            // (async () => {
            //   this.props.getDisciplineThunk();
            //   this.props.getGroupThunk(this.state.disciplineId);
            // })();
            localStorage.removeItem("journalsite");
            localStorage.removeItem("journalsite");
            localStorage.removeItem("disciplineId");
            localStorage.removeItem("disciplineName");
            localStorage.removeItem("typeClassId");
            localStorage.removeItem("groupId");
            localStorage.removeItem("subgroupId");
          }
        }
        this.props.clearJournalsite();
      })();
    }
  }

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
  getGroup = (e) => {
    (async () => {
      await this.setState({
        groupId: e,
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
    })();
    this.props.clearJournalsite();
    this.props.getTypeClassThunk();
    setTimeout(() => {
      this.props.setPresent();
    }, 100);
  };
  getTypeClass = (e, c) => {
    (async () => {
      await this.setState({
        typeClass: e,
        typeClassName: c,
      });
      await this.props.clearSubGroup();
      // this.props.setType(c);
      this.props.getSubGroupThunk();
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
      this.props.clearJournalsite();
      setTimeout(() => {
        this.props.setPresent();
      }, 100);
      localStorage.setItem("typeC", this.state.typeClassName);
    })();
  };
  getSubGroup = (e) => {
    (async () => {
      await this.setState({
        subGroup: e,
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
      this.props.clearJournalsite();
      localStorage.setItem("typeC", this.state.typeClassName);
      setTimeout(() => {
        this.props.setPresent();
      }, 100);
    })();
  };

  componentDidMount() {
    this.props.getDisciplineThunk();
    if (localStorage.getItem("groupId") !== null) {
      this.props.getCourseSpecThunk(localStorage.getItem("groupId"));
    }
  }

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
    const { isLoading } = this.props;
    return (
      <div>
        <div
          class="lds-ellipsis"
          hidden={
            localStorage.getItem("journalsite") !== null ? true : !isLoading
          }
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          hidden={
            localStorage.getItem("journalsite") !== null ? false : isLoading
          }
        >
          <div className="wrap_selects pointer">
            <div className="wrap_selects">
              <div>
                {console.log(isLoading + "LOADER")}
                <div className="discipline-name">Название дисциплины</div>
                <Select
                  className="discipline-select"
                  onChange={(e) => getValueDiscipline(e.value)}
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
              <div>
                <div className="group-name">Группа</div>
                <Select
                  className="group-select"
                  onChange={(e) => getGroup(e.value)}
                  defaultValue={
                    localStorage.getItem("groupId") !== null
                      ? {
                          value: localStorage.getItem("groupId"),
                          label: localStorage.getItem("groupId"),
                        }
                      : { value: "group", label: "Группа" }
                  }
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
                  onChange={(e) => getTypeClass(e.value, e.label)}
                  defaultValue={
                    localStorage.getItem("typeClassId") !== null
                      ? {
                          value: localStorage.getItem("typeClassId"),
                          label:
                            localStorage.getItem("typeClassId") === "1"
                              ? "Лабораторная работа"
                              : localStorage.getItem("typeClassId") === "2"
                              ? "Лекция"
                              : localStorage.getItem("typeClassId") === "3"
                              ? "Практическая работа"
                              : localStorage.getItem("typeClassId") === "4"
                              ? "Экзамен"
                              : localStorage.getItem("typeClassId"),
                        }
                      : { value: "typeclass", label: "Тип занятия" }
                  }
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
                  defaultValue={
                    localStorage.getItem("subgroupId") !== null
                      ? {
                          value: localStorage.getItem("subgroupId"),
                          label: localStorage.getItem("subgroupId"),
                        }
                      : { value: "subgroup", label: "Подгруппа" }
                  }
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
          </div>
          <div
            className="headHr"
            hidden={
              localStorage.getItem("journalsite") !== null ? false : isLoading
            }
          />
          <div className="kuki wrap_selects">
            <div className="buki">
              <div>
                <div className="course-name">Курс</div>
                <div className="course-input">
                  {this.props.courseSpec.length !== 1
                    ? "Курс"
                    : this.props.courseSpec.map(
                        (courseSpec) => courseSpec.сourse
                      )}
                </div>
              </div>
              <div>
                <div>
                  <div className="special-name">Специальность</div>
                  <div className="special-select">
                    {this.props.courseSpec.length !== 1
                      ? "Специальность"
                      : this.props.courseSpec.map(
                          (courseSpec) => courseSpec.specialty.name
                        )}
                  </div>
                </div>
              </div>
            </div>
            <input
              className="button-header bt_color"
              type="submit"
              value="Сохранить"
              disabled={this.props.disabled}
              onClick={() => {
                if (localStorage.removeItem("journalsite") !== null) {
                  // window.location.reload();
                }
                (async () => {
                  await this.props.setJournalHeader();
                  let header = this.props.journalHeader;
                  this.props.getJournalHeaderThunk(header);
                  this.props.clearJournalHeader();
                  this.props.setBtnTrue();
                  localStorage.removeItem("journalsite");
                  localStorage.removeItem("disciplineId");
                  localStorage.removeItem("disciplineName");
                  localStorage.removeItem("typeClassId");
                  localStorage.removeItem("groupId");
                  localStorage.removeItem("subgroupId");
                })();
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
