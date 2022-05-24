import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";
import StudentByDisciplineRadar from "./Chart/StudentByDisciplineRadar";

class StudentByDiscipline extends React.Component {
  state = {
    passes: [],
    groupsId: null,
    studentId: null,
    disciplineId: null,
    groupName: null,
    data: [],
  };
  componentDidMount() {
    this.props.getGroupsThunk();
  }

  getStudents = (e, c) => {
    (async () => {
      await this.setState({
        studentId: e,
      });

      if (
        this.state.groupsId !== null &&
        this.state.studentId !== null &&
        this.state.disciplineId !== null
      ) {
        this.props.getStatisticByDisciplineStudentThunk(
          this.state.disciplineId,
          this.state.studentId
        );
      }
    })();
  };

  getGroups = (e) => {
    (async () => {
      await this.setState({
        groupsId: e,
      });
      await this.props.getDisciplinesStatisticThunk(this.state.groupsId);
      this.props.getStudentsThunk(this.state.groupsId);

      if (
        this.state.groupsId !== null &&
        this.state.studentId !== null &&
        this.state.disciplineId !== null
      ) {
        this.props.getStatisticByDisciplineStudentThunk(
          this.state.disciplineId,
          this.state.studentId
        );
      }
    })();
  };
  getValueDiscipline = (e, c) => {
    (async () => {
      await this.setState({
        disciplineId: e,
      });
      this.props.clearDisciplineByStudentStatistic();
      this.props.getStudentsThunk(this.state.groupsId);

      if (
        this.state.groupsId !== null &&
        this.state.studentId !== null &&
        this.state.disciplineId !== null
      ) {
        this.props.getStatisticByDisciplineStudentThunk(
          this.state.disciplineId,
          this.state.studentId
        );
      }
    })();
  };
  render() {
    const { getGroups, getValueDiscipline, getStudents } = this;
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
                window.location.assign(`/electronicaljournal-view/journal`);
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
            <div className="group-name">Дисциплина</div>
            <Select
              defaultValue={{ value: "discipline", label: "Дисциплина" }}
              className="group-select-statistics"
              onChange={(e) => getValueDiscipline(e.value, e.label)}
              options={this.props.disciplinesStatistic.map((m, i) => ({
                value: m.id,
                label: m.name,
              }))}
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
        <StudentByDisciplineRadar
          disciplineByStudentStatistic={this.props.disciplineByStudentStatistic}
          dataByStudentStatistic={this.props.dataByStudentStatistic}
          height={this.props.height}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}

export default StudentByDiscipline;
