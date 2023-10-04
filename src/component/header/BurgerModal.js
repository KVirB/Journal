import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PoloskiWhite } from "../../poloski_white.svg";
import { ReactComponent as StrWhite } from "../../white_str.svg";
import { ReactComponent as HomeWhite } from "../../home_white.svg";
import { ReactComponent as HomeBlack } from "../../home_black.svg";
import { ReactComponent as IconStatsWhite } from "../../icons_stats_white.svg";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { ReactComponent as Guide } from "../../guide.svg";

export default class BurgerModal extends React.Component {
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
      <div className="burger_modal_main_container">
        <div
          className={
            this.state.modal ? "main_burger_window" : "main_burger_window_close"
          }
          onClick={() => this.openModal()}
        >
          <div className="" onClick={(e) => e.stopPropagation()}>
            <button
              className="burger_button_modal"
              onClick={() => {
                this.openModal();
                this.setStatsClose();
              }}
            >
              {this.state.modal === false ? (
                <PoloskiWhite></PoloskiWhite>
              ) : (
                <StrWhite></StrWhite>
              )}
            </button>
          </div>
          {console.log(this.state.modal)}
          <div
            className={
              this.state.modal
                ? "pull_out_menu_open"
                : "pull_out_menu_open pull_out_menu_close"
            }
            onClick={(e) => e.stopPropagation()}
            // id="pull_out"
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
                  to="/journal"
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
              <div className="statistics_container">
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/statistics"
                  >
                    Группы по дисциплине
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/studentbydiscipline"
                  >
                    Студента по дисциплине
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/studentstatistic"
                  >
                    Студента по периоду
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/generalgroupstatistic"
                  >
                    Общая статистика по группе
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/facultystatistic"
                  >
                    Статистика по факультету
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/statistics"
                  >
                    Группы по дисциплине
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/studentbydiscipline"
                  >
                    Студента по дисциплине
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/studentstatistic"
                  >
                    Студента по периоду
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/generalgroupstatistic"
                  >
                    Общая статистика по группе
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/facultystatistic"
                  >
                    Статистика по факультету
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/statistics"
                  >
                    Группы по дисциплине
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/studentbydiscipline"
                  >
                    Студента по дисциплине
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/studentstatistic"
                  >
                    Студента по периоду
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/generalgroupstatistic"
                  >
                    Общая статистика по группе
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/facultystatistic"
                  >
                    Статистика по факультету
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/facultystatistic"
                  >
                    Статистика по факультету
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/facultystatistic"
                  >
                    Статистика по факультету
                  </Link>
                </div>
                <div className="menu_container" hidden={this.state.stats}>
                  <Link
                    className="item_stat"
                    to="/facultystatistic"
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
                <Link className="cit_name" to="https://cit.vstu.by">
                  cit.vstu.by
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
