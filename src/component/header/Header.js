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
import UnSaveDataModal from "./UnSaveDataModal.js";
import BurgerModal from "./BurgerModal";
import { Link } from "react-router-dom";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

class Header extends React.Component {
  state = {
    disciplineId: null,
    groupId: null,
    typeClass: null,
    subGroup: null,
    typeClassName: null,
    modalIsOpen: false,
    disciplineName: null,
    subgroupName: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { disciplineId, groupId, subGroup, typeClass } = this.state;
    if (disciplineId !== prevState.disciplineId) {
      (async () => {
        if (localStorage.getItem("journalsite") !== null) {
          // this.openModal();
          // localStorage.removeItem("journalsite");
          // localStorage.removeItem("journalsite");
          // localStorage.removeItem("disciplineId");
          // localStorage.removeItem("disciplineName");
          // localStorage.removeItem("typeClassId");
          // localStorage.removeItem("groupId");
          // localStorage.removeItem("subgroupId");
        }
        this.props.getGroupThunk(disciplineId);
        await this.props.clearGroup();
        this.props.clearJournalsite();
      })();
    }
    if (groupId !== prevState.groupId) {
      (async () => {
        if (localStorage.getItem("journalsite") !== null) {
          // await this.props.setJournalHeader();
          // let header = this.props.journalHeader;
          // await this.props.getJournalHeaderThunk(header);
          // this.props.clearJournalHeader();
          // this.props.setBtnTrue();
          this.openModal();
        }
        this.props.clearJournalsite();
        // this.props.getCourseSpecThunk(this.state.groupId);
        this.props.clearTypeClass();
      })();
    }
    if (typeClass !== prevState.typeClass) {
      (async () => {
        if (localStorage.getItem("journalsite") !== null) {
          // await this.props.setJournalHeader();
          // let header = this.props.journalHeader;
          // await this.props.getJournalHeaderThunk(header);
          // this.props.clearJournalHeader();
          // this.props.setBtnTrue();
          this.openModal();
        }
        this.props.clearJournalsite();
        this.props.clearSubGroup();
      })();
    }
    if (subGroup !== prevState.subGroup) {
      (async () => {
        if (localStorage.getItem("journalsite") !== null) {
          // await this.props.setJournalHeader();
          // let header = this.props.journalHeader;
          // await this.props.getJournalHeaderThunk(header);
          // this.props.clearJournalHeader();
          // this.props.setBtnTrue();
          this.openModal();
        }
        this.props.clearJournalsite();
      })();
    }
  }

  getValueDiscipline = (e, g) => {
    (async () => {
      await this.setState({
        disciplineId: e,
        disciplineName: g,
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
        localStorage.setItem("disciplineName", this.state.disciplineName);
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
      if (typeof Storage !== "undefined") {
        localStorage.setItem("groupName", this.state.groupId);
      }
    })();
    this.props.clearJournalsite();
    this.props.getTypeClassThunk();
    setTimeout(() => {
      <div></div>;
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
      if (typeof Storage !== "undefined") {
        localStorage.setItem("typeName", this.state.typeClassName);
      }
    })();
  };
  getSubGroup = (e, c) => {
    (async () => {
      await this.setState({
        subGroup: e,
        subgroupName: c,
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
      if (typeof Storage !== "undefined") {
        localStorage.setItem("subgroupName", this.state.subgroupName);
      }
      setTimeout(() => {
        this.props.setPresent();
      }, 100);
    })();
  };

  componentDidMount() {
    this.props.clearTypeClass();
    this.props.clearSubGroup();
    this.props.clearGroup();
    this.props.getDisciplineThunk();
    if (localStorage.getItem("groupId") !== null) {
      // this.props.getCourseSpecThunk(localStorage.getItem("groupId"));
    }
    if (localStorage.getItem("journalsite") !== null) {
      this.openModal();
    }
  }

  href = (e) => {
    window.location.assign(e);
  };

  Logout = () => {
    window.location.assign("/");
  };
  openModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
    localStorage.removeItem("journalsite");
    localStorage.removeItem("journalsite");
    localStorage.removeItem("disciplineId");
    localStorage.removeItem("disciplineName");
    localStorage.removeItem("typeClassId");
    localStorage.removeItem("groupId");
    localStorage.removeItem("subgroupId");
    localStorage.removeItem("groupName");
    localStorage.removeItem("typeName");
    localStorage.removeItem("subgroupName");
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
        {/* <BurgerModal></BurgerModal> */}
        <UnSaveDataModal
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          disabled={this.props.disabled}
          setJournalHeader={this.props.setJournalHeader}
          journalHeader={this.props.journalHeader}
          getJournalHeaderThunk={this.props.getJournalHeaderThunk}
          clearJournalHeader={this.props.clearJournalHeader}
          setBtnTrue={this.props.setBtnTrue}
        ></UnSaveDataModal>
        <div
          className="lds-ellipsis"
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
                <div className="discipline-name">Название дисциплины</div>
                {console.log(this.props.discipline)}
                <Select
                  className="discipline-select"
                  onChange={(e) => getValueDiscipline(e.value, e.label)}
                  defaultValue={{ value: "disciplines", label: "Дисциплина" }}
                  options={this.props.discipline.map((m, i) => ({
                    value: m.id,
                    label:
                      m.name +
                      (m.department === null
                        ? ""
                        : " (" + m.department.name + ")"),
                  }))}
                />
              </div>
              <div>
                <div className="group-name">Группа</div>
                <Select
                  isDisabled={this.props.group.length === 0 ? true : false}
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
                    value: m.name,
                    label: m.name,
                  }))}
                />
              </div>
              <div>
                <div className="view-name" title="Тип занятия">
                  Тип занятия
                </div>
                <Select
                  isDisabled={this.props.typeClass.length === 0 ? true : false}
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
                <div className="pgroup-name" title="Подгруппа">
                  Подгруппа
                </div>
                <Select
                  isDisabled={this.props.subGroup.length === 0 ? true : false}
                  defaultValue={
                    localStorage.getItem("subgroupId") !== null
                      ? {
                          value: localStorage.getItem("subgroupId"),
                          label: localStorage.getItem("subgroupId"),
                        }
                      : { value: "subgroup", label: "Подгруппа" }
                  }
                  className="pgroup-select"
                  onChange={(e) => getSubGroup(e.value, e.label)}
                  options={this.props.subGroup.map((item, i) => ({
                    value: item.subGroupNumber,
                    label:
                      item.subGroupNumber === 0 ? "Все" : item.subGroupNumber,
                  }))}
                />
              </div>
              <div className="load_journal_block">
                <Link
                  style={
                    this.props.journalsite.length === 0
                      ? {
                          background: "#ededed",
                          color: "#808080",
                          pointerEvents: "none",
                          fontWeight: "400",
                          boxShadow: "none",
                        }
                      : {}
                  }
                  className="load_journal"
                  to="/journal"
                >
                  Загрузить журнал
                </Link>
              </div>
            </div>
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
