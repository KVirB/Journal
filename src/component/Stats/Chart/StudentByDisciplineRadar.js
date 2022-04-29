import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";
import { height } from "@mui/system";

class StudentByDisciplineRadar extends React.Component {
  render() {
    return (
      <div
        className="graph"
        hidden={
          this.props.isLoading === null
            ? true
            : this.props.isLoading === true
            ? true
            : false
        }
      >
        <Radar
          data={{
            labels: ["Средний балл", "Опоздания", "Пропуски"],
            datasets: [
              {
                label: this.props.disciplineByStudentStatistic.map(
                  (statistic, i) => {
                    return (
                      statistic.studentPerformanceDTO.studentDTO.surname +
                      " " +
                      statistic.studentPerformanceDTO.studentDTO.name
                    );
                  }
                ),
                data: this.props.dataByStudentStatistic.map((data, i) => {
                  if (data === null) {
                    alert("У студента нет такой дисциплины!");
                  }
                  return data;
                }),
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
                  size: 25,
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
                suggestedMin: -1,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default StudentByDisciplineRadar;
