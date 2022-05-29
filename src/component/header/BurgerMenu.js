import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStats } from "../../icon_stats.svg";
import { ReactComponent as IconStatsWhite } from "../../icons_stats_white.svg";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
export default class BurgerMenu extends React.Component {
  state = {
    modal: false,
    stats: true,
  };

  openModal = () => {
    if (this.state.modal === false) {
      this.setState({
        modal: true,
      });
    } else {
      this.setState({
        modal: false,
      });
    }
  };
  setStats = () => {
    if (this.state.stats === false) {
      this.setState({
        stats: true,
      });
    } else {
      this.setState({
        stats: false,
      });
    }
  };
  setStatsClose = () => {
    this.setState({
      stats: true,
    });
  };
  setStatsOpen = () => {
    this.setState({
      stats: false,
    });
  };

  render() {
    return (
      <div className="burger_menu_main_container">
        <div
          className={
            this.state.modal ? "main_burger_window" : "main_burger_window_close"
          }
          onClick={() => this.openModal()}
        >
          <div className="Burger_menu" onClick={(e) => e.stopPropagation()}>
            <button
              className="burger_button"
              onClick={() => {
                this.openModal();
                this.setStatsClose();
              }}
            ></button>
            <button
              className="bt_icon_stats"
              onClick={() => {
                this.openModal();
                this.setStatsOpen();
              }}
            >
              <IconStats className="icon_stats_blue"></IconStats>
              <IconStatsWhite className="icon_stats_white"></IconStatsWhite>
            </button>
          </div>

          <div
            className={
              this.state.modal
                ? "pull_out_menu_open"
                : "pull_out_menu_open pull_out_menu_close"
            }
            onClick={(e) => e.stopPropagation()}
          >
            <div className="burger_main_with_bt">
              <div className="container_with_bt_close">
                <button
                  className="bt_main_page"
                  // onClick={() =>
                  //   navigate("/electronicaljournal-view/journal", {
                  //     replace: false,
                  //   })
                  // }
                >
                  <Link
                    className="home_item"
                    to="/electronicaljournal-view/journal"
                  >
                    Главная
                  </Link>
                </button>
              </div>
              <div>
                <button
                  className="bt_close"
                  onClick={() => {
                    this.openModal();
                    this.setStatsClose();
                  }}
                ></button>
              </div>
            </div>
            <button
              onClick={() =>
                this.state.stats === true
                  ? this.setStatsOpen()
                  : this.setStatsClose()
              }
              className={
                this.state.stats
                  ? "input_statistics"
                  : "input_statistics input_statistics_menu_down"
              }
            >
              <div>
                <div>Статистика</div>
                <div className="arrow_div">
                  <span
                    className={
                      this.state.stats
                        ? "arrow_down"
                        : "arrow_down_menu arrow_down_transform"
                    }
                  ></span>
                </div>
              </div>
            </button>
            <div className="menu_container" hidden={this.state.stats}>
              <Link
                className="item_stat"
                to="/electronicaljournal-view/statistics"
              >
                Группы по дисциплине
              </Link>
            </div>
            <div className="menu_container" hidden={this.state.stats}>
              <Link
                className="item_stat"
                to="/electronicaljournal-view/studentbydiscipline"
              >
                Студента по дисциплине
              </Link>
            </div>
            <div className="menu_container" hidden={this.state.stats}>
              <Link
                className="item_stat"
                to="/electronicaljournal-view/studentstatistic"
              >
                Студента по периоду
              </Link>
            </div>
            <div className="menu_container" hidden={this.state.stats}>
              <Link
                className="item_stat"
                to="/electronicaljournal-view/generalgroupstatistic"
              >
                Общая статистика по группе
              </Link>
            </div>
            <div className="menu_container" hidden={this.state.stats}>
              <Link
                className="item_stat"
                to="/electronicaljournal-view/facultystatistic"
              >
                Статистика по факультету
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
