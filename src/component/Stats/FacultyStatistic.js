import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";
import GeneralBar from "./Chart/GeneralBar";

class FacultyStatistic extends React.Component {
  state = {
    passes: [],
    groupsId: 0,
    facultyId: 0,
    firstDate: null,
    secondDate: null,
  };
  componentDidMount() {
    this.props.getFacultyThunk();
  }

  getFirstDate = (e) => {
    (async () => {
      await this.setState({
        firstDate: e,
      });
      this.setState({
        secondDate: null,
      });
      this.props.setFirstDate(e);
    })();
  };

  getSecondDate = (e) => {
    (async () => {
      await this.setState({
        secondDate: e,
      });
      this.props.setSecondDate(e);
    })();
  };

  getGroups = (e) => {
    (async () => {
      this.setState({
        groupsId: e,
      });
    })();
  };
  getFacultys = (e) => {
    (async () => {
      this.setState({
        facultyId: e,
      });
    })();
  };

  render() {
    const { getFacultys } = this;
    const { isLoading } = this.props;
    return (
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
              <div className="faculty-name">Факультет</div>
              <div className="faculty-select-statistic">
                <Select
                  defaultValue={{ value: "faculty", label: "Факультет" }}
                  onChange={(e) => getFacultys(e.label)}
                  options={this.props.faculty.map((m) => ({
                    value: m.shortName,
                    label: m.shortName,
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
          <div className="display-flex"></div>
          <div>
            <input
              className="bt_color bt_excel"
              type="submit"
              value="Excel"
              disabled={this.props.disabled}
              onClick={() => {
                this.props.getExcelFacultyThunk(
                  this.state.facultyId,
                  this.state.firstDate,
                  this.state.secondDate
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FacultyStatistic;
