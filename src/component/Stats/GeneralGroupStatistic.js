import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";

class GeneralGroupStatistic extends React.Component {
  state = {
    passes: [],
    groupsId: 0,
    facultyId: 0,
    firstDate: null,
    secondDate: null,
  };
  componentDidMount() {
    this.props.getGroupsThunk();
    // this.props.getFacultyThunk();
    localStorage.removeItem("statGroupAll");
    localStorage.removeItem("statFaculty");
    localStorage.removeItem("firstDate");
    localStorage.removeItem("secondDate");
  }

  getFirstDate = (e) => {
    (async () => {
      await this.setState({
        firstDate: e,
      });
      localStorage.setItem("firstDate", e);
      console.log(this.state.firstDate);
      this.props.setFirstDate(e);
    })();
  };

  getSecondDate = (e) => {
    (async () => {
      await this.setState({
        secondDate: e,
      });
      localStorage.setItem("secondDate", e);
      console.log(this.state.secondDate);
    })();
  };

  getGroups = (e) => {
    (async () => {
      await this.setState({
        groupsId: e,
      });
      this.props.getGeneralGroupStatisticsThunk(this.state.groupsId);
      localStorage.setItem("statGroupAll", e);
    })();
  };
  getFacultys = (e) => {
    (async () => {
      await this.setState({
        facultyId: e,
      });
      this.props.getGeneralGroupStatisticsThunk(this.state.facultyId);
      localStorage.setItem("statFaculty", e);
    })();
  };

  render() {
    const { getGroups, getFacultys } = this;
    const { isLoading } = this.props;
    return isLoading ? (
      <div className="lds-dual-ring "></div>
    ) : (
      <div>
        {console.log(this.state.groupsId)}
        <div className="display-flex jst_content">
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
              <div className="group-name">
                Группа : {localStorage.getItem("statGroupAll")}
              </div>
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
              <div className="date_with_by">
                C : {localStorage.getItem("firstDate")}
              </div>
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
              <div className="date_with_by">
                По : {localStorage.getItem("secondDate")}
              </div>
              <input
                type="date"
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
                this.props.getExcelThunk(this.state.groupsId);
              }}
            />
          </div>
        </div>
        <hr></hr>
        <div className="display-flex jst_content">
          <div className="display-flex">
            <div>
              <div className="faculty-name">
                Факультет : {localStorage.getItem("statFaculty")}
              </div>
              <div className="faculty-select-statistic">
                <Select
                  defaultValue={{ value: "faculty", label: "Факультет" }}
                  onChange={(e) => getFacultys(e.label)}
                  // options={this.props.faculty.map((m) => ({
                  //   value: m.name,
                  //   label: m.name,
                  // }))}
                  options={[{ value: "fitr", label: "Фитр" }]}
                />
              </div>
            </div>
          </div>
          <div>
            <input
              className="bt_color bt_excel"
              type="submit"
              value="Excel"
              disabled={this.props.disabled}
              onClick={() => {
                this.props.getExcelFacultyThunk(this.state.facultyId);
              }}
            />
          </div>
        </div>
        <hr></hr>
        <div className="graph">
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
            height={this.props.height}
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
      </div>
    );
  }
}

export default GeneralGroupStatistic;
