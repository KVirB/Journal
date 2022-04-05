import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";

class StudentByDiscipline extends React.Component {
  state = {
    passes: [],
    groupsId: 0,
    studentId: 0,
    disciplineId: 0,
    groupName: 0,
  };
  componentDidMount() {
    this.props.getGroupsThunk();
  }

  getStudents = (e) => {
    (async () => {
      await this.setState({
        studentId: e,
      });
      //   this.props.getDisciplinesStatisticThunk(this.state.groupsId);
    })();
  };

  getGroups = (e) => {
    (async () => {
      await this.setState({
        groupsId: e,
      });
      this.props.getDisciplinesStatisticThunk(this.state.groupsId);
      this.props.getStudentsThunk(this.state.groupsId);
    })();
  };
  getValueDiscipline = (e) => {
    (async () => {
      await this.setState({
        disciplineId: e,
      });
      this.props.getGeneralStatisticsThunk(
        this.state.groupsId,
        this.state.disciplineId
      );
    })();
  };
  render() {
    const { getGroups, getValueDiscipline, getStudents } = this;
    const { generalStatistics } = this.props;
    const { isLoading } = this.props;
    return isLoading ? (
      <div>LOADING...</div>
    ) : (
      <div>
        <div className="display-flex">
          <div>
            <div className="group-name">Группа</div>
            <Select
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
              className="group-select-statistics"
              onChange={(e) => getValueDiscipline(e.value)}
              options={this.props.disciplinesStatistic.map((m, i) => ({
                value: m.id,
                label: m.name,
              }))}
            />
          </div>
          <div>
            <div className="student-name">Студент</div>
            <Select
              className="student-select-statistic"
              onChange={(e) => getStudents(e.value)}
              options={this.props.students.map((m) => ({
                value: m.id,
                label: m.surname + " " + m.name,
              }))}
            />
          </div>
        </div>
        <div className="graph">
          <Bar
            data={{
              labels: this.props.generalStatistics.map((statistic, i) => {
                return (
                  statistic.studentPerformanceDTO.studentDTO.surname +
                  " " +
                  statistic.studentPerformanceDTO.studentDTO.name
                );
              }),
              datasets: [
                {
                  label: "Общий средний балл",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.studentPerformanceDTO.overallGPA;
                  }),
                  maxBarThickness: 30,
                  backgroundColor: ["#1C2742"],
                },
                {
                  label: "Колличество пропусков",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberPasses;
                  }),
                  maxBarThickness: 30,
                  backgroundColor: ["#3A405C"],
                },
                {
                  label: "Опоздания",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberLates;
                  }),
                  maxBarThickness: 30,
                  backgroundColor: ["#6F6B94"],
                },
              ],
            }}
            height={(generalStatistics.length / 5) * 600}
            plugins={[ChartDataLabels]}
            options={{
              maintainAspectRatio: false,
              plugins: {
                datalabels: {
                  color: "white",
                  align: "right",
                  anchor: "start",
                  padding: "25",
                  font: {
                    size: 16,
                    family: "san-serif",
                  },
                },
              },

              indexAxis: "y",
              scales: {
                x: {
                  type: "linear",
                  min: 0,
                },
              },
            }}
          />
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default StudentByDiscipline;