import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";
import { height } from "@mui/system";

class GeneralBar extends React.Component {
  render() {
    return (
      <div
        className="graph"
        style={{ height: this.props.height }}
        hidden={
          this.props.isLoading === null
            ? true
            : this.props.isLoading === true
            ? true
            : false
        }
      >
        {/* {console.log(this.props.students + "students")} */}
        <Bar
          data={{
            labels: this.props.generalGroupStatistic.map((statistic, i) => {
              return (
                statistic.studentPerformanceDTO.studentDTO.surname +
                " " +
                statistic.studentPerformanceDTO.studentDTO.name
              );
            }),
            datasets: [
              {
                label: "Общий средний балл",
                data: this.props.generalGroupStatistic.map((statistic, i) => {
                  return statistic.studentPerformanceDTO.overallGPA;
                }),
                maxBarThickness: 30,
                backgroundColor: ["#1C2742"],
              },
              {
                label: "Колличество пропусков",
                data: this.props.generalGroupStatistic.map((statistic, i) => {
                  return statistic.totalNumberPasses;
                }),
                maxBarThickness: 30,
                backgroundColor: ["#3A405C"],
              },
              {
                label: "Опоздания",
                data: this.props.generalGroupStatistic.map((statistic, i) => {
                  return statistic.totalNumberLates;
                }),
                maxBarThickness: 30,
                backgroundColor: ["#6F6B94"],
              },
            ],
          }}
          height="auto"
          plugins={[ChartDataLabels]}
          options={{
            responsive: true,
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
    );
  }
}

export default GeneralBar;
