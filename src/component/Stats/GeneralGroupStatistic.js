import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";
import GeneralBar from "./Chart/GeneralBar";

class GeneralGroupStatistic extends React.Component {
  state = {
    passes: [],
    groupsId: 0,
    facultyId: 0,
    role: null,
    firstDate: null,
    secondDate: null,
  };
  componentDidMount() {}

  getFirstDate = (e) => {
    (async () => {
      await this.setState({
        firstDate: e,
      });
      this.setState({
        secondDate: null,
      });

      if (
        this.state.groupsId !== null &&
        this.state.firstDate !== null &&
        this.state.secondDate !== null
      ) {
        this.props.getGeneralGroupStatisticsThunk(this.state.groupsId);
      }
      this.props.setFirstDate(e);
    })();
  };

  getSecondDate = (e) => {
    (async () => {
      await this.setState({
        secondDate: e,
      });

      if (
        this.state.groupsId !== null &&
        this.state.firstDate !== null &&
        this.state.secondDate !== null &&
        this.state.roleId !== null
      ) {
        this.props.getGeneralGroupStatisticsThunk(this.state.groupsId);
      }
      this.props.setSecondDate(e);
    })();
  };
  getRoles = (e) => {
    (async () => {
      await this.setState({
        role: e,
      });
      this.props.getGroupsThunk(this.state.role);
      if (
        this.state.groupsId !== null &&
        this.state.firstDate !== null &&
        this.state.secondDate !== null &&
        this.state.roleId !== null
      ) {
        this.props.getGeneralGroupStatisticsThunk(this.state.groupsId);
      }
    })();
  };
  getGroups = (e) => {
    (async () => {
      await this.setState({
        groupsId: e,
      });
      // await this.props.getStudentsThunk(this.state.groupsId);

      if (
        this.state.groupsId !== null &&
        this.state.firstDate !== null &&
        this.state.secondDate !== null &&
        this.state.roleId !== null
      ) {
        this.props.getGeneralGroupStatisticsThunk(this.state.groupsId);
      }
    })();
  };

  render() {
    const { getGroups, getRoles } = this;
    const { isLoading } = this.props;
    return (
      <div>
        <div className="display-flex jst_content">
          <div className="display-flex">
            <div>
              <input
                className="button-back bt_color"
                type="submit"
                value="Назад"
                onClick={() => {
                  window.history.back();
                }}
              />
            </div>
            <div>
              <div className="role-name">Роль</div>
              <div className="role-select-statistic">
                <Select
                  defaultValue={{ value: "role", label: "Роль" }}
                  onChange={(e) => getRoles(e.value)}
                  options={JSON.parse(localStorage.getItem("user")).roles.map(
                    (m) => ({
                      value: m,
                      label:
                        m === "HEAD_OF_DEPARTMENT"
                          ? "Заведующий кафедрой"
                          : m === "USER"
                          ? "Преподаватель"
                          : m === "RECTOR"
                          ? "Ректор"
                          : m === "DEAN"
                          ? "Декан"
                          : m,
                    })
                  )}
                />
              </div>
            </div>
            <div>
              <div className="group-name">Группа</div>
              <div className="group-select-statistic">
                <Select
                  defaultValue={{ value: "group", label: "Группа" }}
                  onChange={(e) => getGroups(e.value)}
                  options={this.props.groups.map((m) => ({
                    value: m.name,
                    label: m.name,
                  }))}
                />
              </div>
            </div>
            <div>
              <div className="date_with_by">C</div>
              <input
                type="date"
                className="input_faculty_date"
                min="2022-01-01"
                max="2025-12-31"
                onChange={(e) => {
                  this.getFirstDate(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="date_with_by">По</div>
              <input
                disabled={this.props.secondDateDisabled}
                type="date"
                value={
                  this.state.secondDate === null
                    ? "гггг-мм-дд"
                    : this.state.secondDate
                }
                className="input_faculty_date"
                min={this.props.firstDate}
                max="2025-12-31"
                onChange={(e) => {
                  this.getSecondDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="display-flex">
            <input
              className="bt_color bt_excel"
              type="submit"
              value="Excel"
              disabled={this.props.disabled}
              onClick={() => {
                this.props.getExcelThunk(
                  this.state.groupsId,
                  this.state.firstDate,
                  this.state.secondDate,
                  this.state.role
                );
              }}
            />
          </div>
        </div>
        <div className={isLoading ? "lds-facebook" : ""}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* Сделать на бэке!!! */}
        {/* <GeneralBar
          generalGroupStatistic={this.props.generalGroupStatistic}
          height={this.props.height}
          // students={this.props.students}
          isLoading={this.props.isLoading}
        /> */}
      </div>
    );
  }
}

export default GeneralGroupStatistic;
