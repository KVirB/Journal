import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";
import GeneralBar from "./Chart/GeneralBar";

class FacultyStatistic extends React.Component {
  state = {
    facultyId: 0,
    firstDate: null,
    secondDate: null,
    role: null,
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

  getFacultys = (e) => {
    (async () => {
      this.setState({
        facultyId: e,
      });
    })();
  };
  getRoles = (e) => {
    (async () => {
      await this.setState({
        role: e,
      });
    })();
  };
  render() {
    const { getFacultys, getRoles } = this;
    const { isLoading } = this.props;
    return (
      <div>
        <div className="lds-ellipsis" hidden={!isLoading}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div hidden={isLoading}>
          <div className="display-flex jst_content">
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
                <div className="role-name">Роль</div>
                <div className="role-select-statistic">
                  <Select
                    defaultValue={{ value: "role", label: "Роль" }}
                    onChange={(e) => getRoles(e.value)}
                    options={JSON.parse(localStorage.getItem("user")).roles.map(
                      (m) => ({
                        value: m,
                        label:
                          m === "HEAD_OF_DEPARTMENT"
                            ? "Заведующий кафедрой"
                            : m === "USER"
                            ? "Преподаватель"
                            : m === "RECTOR"
                            ? "Ректор"
                            : m === "DEAN"
                            ? "Декан"
                            : m,
                      })
                    )}
                  />
                </div>
              </div>
              <div>
                <div className="faculty-name">Кафедра</div>
                <div className="faculty-select-statistic">
                  <Select
                    defaultValue={{ value: "faculty", label: "Кафедра" }}
                    onChange={(e) => getFacultys(e.label)}
                    options={this.props.faculty.map((m) => ({
                      value: m.displayName,
                      label: m.displayName,
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
                    this.state.secondDate,
                    this.state.role
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FacultyStatistic;
