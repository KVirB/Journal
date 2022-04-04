import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";

class Statistics extends React.Component {
  state = {
    passes: [],
    groupsId: 0,
    disciplineId: 0,
  };
  componentDidMount() {
    this.props.getGroupsThunk();
  }
  getGroups = (e) => {
    (async () => {
      await this.setState({
        groupsId: e,
      });
      this.props.getDisciplinesStatisticThunk(this.state.groupsId);
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
    const { getGroups, getValueDiscipline } = this;
    const { generalStatistics } = this.props;
    const { isLoading } = this.props;
    return isLoading ? (
      <div>LOADING...</div>
    ) : (
      <div>
        {/* {console.log(JSON.stringify(this.props.groups))}
        {console.log(this.props.generalStatistics.length)} */}
        {console.log(this.state.groupsId)}
        {console.log(this.state.disciplineId)}
        {console.log(JSON.stringify(this.props.disciplinesStatistic))}
        <div className="display-flex">
          <div>
            <div className="group-name">Группа</div>
            <div className="group-select-statistic">
              <Select
                onChange={(e) => getGroups(e.value)}
                options={this.props.groups.map((m) => ({
                  value: m.id,
                  label: m.name,
                }))}
              />
            </div>
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
        </div>
        <div>
          <Bar
            className="graph"
            data={{
              labels: this.props.generalStatistics.map((statistic, i) => {
                return (
                  statistic.studentPerformanceDTO.studentDTO.surname +
                  " " +
                  statistic.studentPerformanceDTO.studentDTO.name
                );
              }),
              // labels: this.state.averageMarks,

              datasets: [
                {
                  // type: "bar",
                  // axis: "y",
                  label: "Общий средний балл",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.studentPerformanceDTO.overallGPA;
                  }),
                  // data: this.state.studentNames,
                  maxBarThickness: 30,
                  // fill: false,
                  backgroundColor: ["#1C2742"],
                },
                {
                  // type: "bar",
                  // axis: "y",
                  label: "Колличество пропусков",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberPasses;
                  }),
                  // data: this.state.studentNames,
                  maxBarThickness: 30,

                  // fill: false,
                  backgroundColor: ["#3A405C"],
                },
                {
                  // type: "bar",
                  // axis: "y",
                  label: "Опоздания",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberLates;
                  }),
                  // data: this.state.studentNames,
                  maxBarThickness: 30,
                  // fill: false,
                  backgroundColor: ["#6F6B94"],
                },
              ],
            }}
            height={(generalStatistics.length / 5) * 600}
            // width={2000}
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
                // yAxes: [
                //   {
                //     ticks: {
                //       // beginAtZero: true,
                //       min: -1,
                //     },
                //   },
                // ],
              },
            }}
          />
        </div>
        <hr></hr>
        <div className="">
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
                  type: "bar",
                  axis: "x",
                  label: "Колличество пропусков",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberPasses;
                  }),
                  fill: false,
                  backgroundColor: [
                    "#0C293B",
                    "#015AA2",
                    "#2D6082",
                    "#4F9BD0",
                    "#3A405C",
                    "#6F6B94",
                  ],

                  borderWidth: 3,
                },
                {
                  type: "line",
                  axis: "x",
                  label: "Колличество пропусков",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberPasses;
                  }),
                  fill: false,
                  backgroundColor: [
                    "#0C293B",
                    "#015AA2",
                    "#2D6082",
                    "#4F9BD0",
                    "#3A405C",
                    "#6F6B94",
                  ],

                  borderWidth: 3,
                },
              ],
            }}
            height={1200}
            width={2000}
            // plugins={[ChartDataLabels]}
            options={{
              maintainAspectRatio: false,
              indexAxis: "x",
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <hr></hr>
        <div className="">
          <Radar
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
                  label: "Опоздания",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberLates;
                  }),
                  fill: true,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgb(255, 99, 132)",
                  pointBackgroundColor: "rgb(255, 99, 132)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgb(255, 99, 132)",
                },
              ],
            }}
            height={1200}
            width={2000}
            plugins={[ChartDataLabels]}
            options={{
              maintainAspectRatio: false,
              indexAxis: "x",
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Statistics;
