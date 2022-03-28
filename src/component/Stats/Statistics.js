import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";

class Statistics extends React.Component {
  state = {
    averageMarks: [],
    studentNames: [],
    passes: [],
  };
  componentDidMount() {
    (async () => {
      this.props.getGeneralStatisticsThunk();
    })();
    this.averageMark();
  }
  averageMark = () => {
    return this.props.generalStatistics.map((statistic, i) => {
      this.state.averageMarks.push(statistic.studentPerformanceDTO.overallGPA);
      this.state.studentNames.push(
        statistic.studentPerformanceDTO.studentDTO.surname +
          " " +
          statistic.studentPerformanceDTO.studentDTO.name
      );
      this.state.passes.push(statistic.totalNumberPasses);
    });
  };
  render() {
    return (
      <div>
        <hr></hr>
        <div className="graph">
          {console.log(JSON.stringify(this.state.averageMarks))}
          {console.log(JSON.stringify(this.state.studentNames))}
          {console.log(JSON.stringify(this.state.passes))}
          <Bar
            data={{
              labels: this.props.generalStatistics.map((statistic, i) => {
                return (
                  statistic.studentPerformanceDTO.studentDTO.surname +
                  " " +
                  statistic.studentPerformanceDTO.studentDTO.name
                );
              }),
              // labels: this.state.studentNames,
              datasets: [
                {
                  axis: "y",
                  label: "Общий средний балл",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.studentPerformanceDTO.overallGPA;
                  }),
                  // data: this.state.averageMarks,

                  backgroundColor: ["#1C2742"],
                },
                {
                  type: "bar",
                  axis: "y",
                  label: "Колличество пропусков",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberPasses;
                  }),
                  fill: false,
                  backgroundColor: ["#3A405C"],
                },
                {
                  label: "Опоздания",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberLates;
                  }),
                  fill: true,
                  backgroundColor: ["#6F6B94"],
                },
              ],
            }}
            height={3000}
            // width={2000}
            plugins={[ChartDataLabels]}
            options={{
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
              maintainAspectRatio: false,
              indexAxis: "y",
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
