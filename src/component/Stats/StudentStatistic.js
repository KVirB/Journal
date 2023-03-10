import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import StudentStatisticRadar from "./Chart/StudentStatisticRadar";

class StudentStatistic extends React.Component {
  state = {
    passes: [],
    groupsId: null,
    studentId: null,
    disciplineId: 0,
    groupName: 0,
    firstDate: null,
    secondDate: null,
    data: [],
    hidden: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.studentId !== prevState.studentId) {
      this.state.data = [];
    }
  }
  componentDidMount() {
    this.props.getGroupsThunk();
  }

  getFirstDate = (e) => {
    (async () => {
      await this.setState({
        firstDate: e,
      });
      this.setState({
        secondDate: null,
      });

      this.props.clearGraphStudentByPeriod();
      this.props.setFirstDate(e);
      if (
        this.state.firstDate !== null &&
        this.state.secondDate !== null &&
        this.state.groupsId !== null
      ) {
        this.props.getStudentsThunk(this.state.groupsId);
      }
      if (
        this.state.studentId !== null &&
        this.state.firstDate !== null &&
        this.state.secondDate !== null &&
        this.state.groupsId !== null
      ) {
        this.props.getStudentStatisticByPeriodThunk(
          this.state.studentId,
          this.state.firstDate,
          this.state.secondDate
        );
      }
    })();
  };

  getSecondDate = (e) => {
    (async () => {
      await this.setState({
        secondDate: e,
      });
      if (
        this.state.firstDate !== null &&
        this.state.secondDate !== null &&
        this.state.groupsId !== null
      ) {
        this.props.getStudentsThunk(this.state.groupsId);
      }

      this.props.setSecondDate(e);
      if (
        this.state.studentId !== null &&
        this.state.firstDate !== null &&
        this.state.secondDate !== null &&
        this.state.groupsId !== null
      ) {
        this.props.getStudentStatisticByPeriodThunk(
          this.state.studentId,
          this.state.firstDate,
          this.state.secondDate
        );
      }
    })();
  };

  getStudents = (e, c) => {
    (async () => {
      await this.setState({
        studentId: e,
      });

      if (
        this.state.studentId !== null &&
        this.state.firstDate !== null &&
        this.state.secondDate !== null &&
        this.state.groupsId !== null
      ) {
        this.props.getStudentStatisticByPeriodThunk(
          this.state.studentId,
          this.state.firstDate,
          this.state.secondDate
        );
      }
    })();
  };

  getGroups = (e) => {
    (async () => {
      await this.setState({
        groupsId: e,
      });
      // this.props.getStudentsThunk(this.state.groupsId);

      if (
        this.state.firstDate !== null &&
        this.state.secondDate !== null &&
        this.state.groupsId !== null
      ) {
        this.props.getStudentsThunk(this.state.groupsId);
      }

      if (
        this.state.studentId !== null &&
        this.state.firstDate !== null &&
        this.state.secondDate !== null &&
        this.state.groupsId !== null
      ) {
        this.props.getStudentStatisticByPeriodThunk(
          this.state.studentId,
          this.state.firstDate,
          this.state.secondDate
        );
      }
    })();
  };
  getValueDiscipline = (e, c) => {
    this.setState({
      disciplineId: e,
    });
  };
  render() {
    const { getGroups, getValueDiscipline, getStudents } = this;
    const { generalStatistics } = this.props;
    const { isLoading } = this.props;
    return (
      <div>
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
            <div className="group-name">Группа</div>
            <Select
              defaultValue={{ value: "group", label: "Группа" }}
              className="group-select-statistic"
              onChange={(e) => getGroups(e.value)}
              options={this.props.groups.map((m) => ({
                value: m.name,
                label: m.name,
              }))}
            />
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
          <div>
            <div className="student-name">Студент</div>
            <Select
              defaultValue={{ value: "student", label: "Студент" }}
              className="student-select-statistic"
              onChange={(e) => getStudents(e.value, e.label)}
              options={this.props.students.map((m) => ({
                value: m.id,
                label: m.surname + " " + m.name,
              }))}
            />
          </div>
        </div>
        <div className={isLoading ? "lds-facebook" : ""}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <StudentStatisticRadar
          isLoading={this.props.isLoading}
          studentStatisticByPeriod={this.props.studentStatisticByPeriod}
          dataByStudentStatisticPeriod={this.props.dataByStudentStatisticPeriod}
        />
      </div>
    );
  }
}

export default StudentStatistic;
