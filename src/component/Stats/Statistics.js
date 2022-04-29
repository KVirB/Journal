import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";
import StatisticGroupByDisciplineBar from "./Chart/StatisticGroupByDisciplineBar";

class Statistics extends React.Component {
  state = {
    passes: [],
    groupsId: null,
    disciplineId: null,
  };
  componentDidMount() {
    this.props.getGroupsThunk();
  }
  getGroups = (e) => {
    (async () => {
      await this.setState({
        groupsId: e,
      });
      this.props.getDisciplinesStatisticThunk(e);
      this.state.groupsId !== null && this.state.disciplineId !== null
        ? this.props.getGeneralStatisticsThunk(
            this.state.groupsId,
            this.state.disciplineId
          )
        : console.log("Error with Statistics");
    })();
  };
  getValueDiscipline = (e, c) => {
    (async () => {
      await this.setState({
        disciplineId: e,
      });
      this.state.groupsId !== null && this.state.disciplineId !== null
        ? this.props.getGeneralStatisticsThunk(
            this.state.groupsId,
            this.state.disciplineId
          )
        : console.log("Error with Statistics");
    })();
  };
  render() {
    const { getGroups, getValueDiscipline } = this;
    const { generalStatistics } = this.props;
    const { isLoading } = this.props;
    return (
      <div>
        {console.log(this.state.groupsId)}
        {console.log(this.state.disciplineId)}
        {console.log(JSON.stringify(this.props.disciplinesStatistic))}
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
              <div className="group-name">Группа</div>
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
          </div>
        </div>
        <div className={isLoading ? "lds-facebook" : ""}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <StatisticGroupByDisciplineBar
          generalStatistics={this.props.generalStatistics}
          height={this.props.height}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}

export default Statistics;
