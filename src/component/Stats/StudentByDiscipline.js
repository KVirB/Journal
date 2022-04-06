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
    data: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.studentId !== prevState.studentId) {
      this.state.data = [];
    }
  }
  componentDidMount() {
    this.props.getGroupsThunk();
  }

  getStudents = (e) => {
    (async () => {
      await this.setState({
        studentId: e,
      });
      this.props.getStatisticByDisciplineStudentThunk(
        this.state.disciplineId,
        this.state.studentId
      );
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
    this.setState({
      disciplineId: e,
    });
  };
  render() {
    const { getGroups, getValueDiscipline, getStudents } = this;
    const { generalStatistics } = this.props;
    const { isLoading } = this.props;
    return isLoading ? (
      <div>LOADING...</div>
    ) : (
      <div>
        {console.log(this.props.disciplineByStudentStatistic)}
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
          <Radar
            data={{
              labels: ["Средний балл", "Опоздания", "Пропуски"],
              datasets: [
                {
                  label: this.props.disciplineByStudentStatistic.map(
                    (statistic, i) => {
                      this.state.data.push(
                        statistic.studentPerformanceDTO.overallGPA
                      );
                      this.state.data.push(statistic.totalNumberLates);
                      this.state.data.push(statistic.totalNumberPasses);
                      return (
                        statistic.studentPerformanceDTO.studentDTO.surname +
                        " " +
                        statistic.studentPerformanceDTO.studentDTO.name
                      );
                    }
                  ),
                  data: this.state.data.map((data, i) => {
                    return data;
                  }),
                  fill: true,
                  backgroundColor: "rgb(50, 50, 100, 0.3)",
                  borderColor: "#1C2742",
                  pointBackgroundColor: "#1C2742",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "#6F6B94",
                },
              ],
            }}
            height={700}
            plugins={[ChartDataLabels]}
            options={{
              plugins: {
                legend: {
                  labels: {
                    font: {
                      size: 20,
                    },
                  },
                },
                datalabels: {
                  align: "end",
                  offset: 5,
                  font: {
                    size: 16,
                    family: "san-serif",
                  },
                },
              },
              maintainAspectRatio: false,
              indexAxis: "y",
              scales: {
                r: {
                  pointLabels: {
                    padding: 30,
                    font: {
                      size: 15,
                    },
                  },
                  angleLines: {
                    display: false,
                  },
                  suggestedMin: 0,
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
