import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStats } from "../../icon_stats.svg";
import { ReactComponent as IconStatsWhite } from "../../icons_stats_white.svg";
import { ReactComponent as Guide } from "../../guide.svg";
import { ReactComponent as HomeWhite } from "../../home_white.svg";
import { ReactComponent as HomeBlack } from "../../home_black.svg";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import BurgerModal from "./BurgerModal";

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
              <div className="container_with_bt_close disp">
                <div>
                  <button className="bt_main_page">
                    <HomeWhite className="home_white"></HomeWhite>
                    <HomeBlack className="home_black"></HomeBlack>
                  </button>
                </div>
                <Link
                  className="home_item"
                  to="/electronicaljournal-view/journal"
                >
                  Главная
                </Link>
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
            <div>
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
                  <div>
                    <IconStats
                      className={
                        this.state.stats
                          ? "icon_stats_blue"
                          : "icon_stats_blue_open"
                      }
                    ></IconStats>
                    <IconStatsWhite
                      className={
                        this.state.stats
                          ? "icon_stats_white"
                          : "icon_stats_white_open"
                      }
                    ></IconStatsWhite>
                    <div className="statistics_name">Статистика</div>
                  </div>
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
              <div className="statistics_container">
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
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/electronicaljournal-view/facultystatistic"
                  >
                    Статистика по факультету
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
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/electronicaljournal-view/facultystatistic"
                  >
                    RK
                  </Link>
                </div>
              </div>
            </div>
            <button className="bt_guide">
              <Guide className="guide_pic"></Guide>
              <div className="guide_name">Руководство пользователя</div>
            </button>
            <footer className="footer_burger_menu">
              <div className="support_name">
                Техническая поддержка веб-сервиса и последующее обновление —{" "}
                <a className="cit_name" href="https://cit.vstu.by">
                  cit.vstu.by
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
