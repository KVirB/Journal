import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStats } from "../../icon_stats.svg";
import { ReactComponent as IconStatsWhite } from "../../icons_stats_white.svg";
import { ReactComponent as Guide } from "../../guide.svg";
import { ReactComponent as HomeWhite } from "../../home_white.svg";
import { ReactComponent as HomeBlack } from "../../home_black.svg";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import BurgerModal from "./BurgerModal";
import ButtonStatistics from "./ButtonStatistics";

export default class BurgerMenuMain extends React.Component {
  render() {
    return (
      <div className="burger_menu_main_container">
        <ButtonStatistics
          setStatsOpen={this.props.setStatsOpen}
          openModal={this.props.openModal}
        ></ButtonStatistics>
        <div
          className={
            this.props.modal ? "main_burger_window" : "main_burger_window_close"
          }
          onClick={() => this.props.openModal()}
        >
          <div
            className={
              this.props.modal
                ? "pull_out_menu_open"
                : "pull_out_menu_open pull_out_menu_close"
            }
            onClick={(e) => e.stopPropagation()}
            id="pull_out"
          >
            <div className="burger_main_with_bt">
              <div className="container_with_bt_close disp">
                <div>
                  <button
                    className="bt_main_page"
                    // onClick={() => {
                    //   window.location.href =
                    //     "/teacher_profile";
                    // }}
                    onClick={() => {
                      document.getElementById("home_item").click();
                    }}
                  >
                    <HomeWhite className="home_white"></HomeWhite>
                    <HomeBlack className="home_black"></HomeBlack>
                  </button>
                </div>
                <Link
                  id="home_item"
                  className="home_item"
                  to="/"
                >
                  Главная
                </Link>
              </div>
              <div>
                <button
                  className="bt_close"
                  onClick={() => {
                    this.props.openModal();
                    this.props.setStatsClose();
                  }}
                ></button>
              </div>
            </div>
            <div>
              <button
                onClick={() =>
                  this.props.stats === true
                    ? this.props.setStatsOpen()
                    : this.props.setStatsClose()
                }
                className={
                  this.props.stats
                    ? "input_statistics"
                    : "input_statistics input_statistics_menu_down"
                }
              >
                <div>
                  <div>
                    <IconStats
                      className={
                        this.props.stats
                          ? "icon_stats_blue"
                          : "icon_stats_blue_open"
                      }
                    ></IconStats>
                    <IconStatsWhite
                      className={
                        this.props.stats
                          ? "icon_stats_white"
                          : "icon_stats_white_open"
                      }
                    ></IconStatsWhite>
                    <div className="statistics_name">Статистика</div>
                  </div>
                  <div className="arrow_div">
                    <span
                      className={
                        this.props.stats
                          ? "arrow_down"
                          : "arrow_down_menu arrow_down_transform"
                      }
                    ></span>
                  </div>
                </div>
              </button>
              <div className="statistics_container">
                <div className="menu_container" hidden={this.props.stats}>
                  <Link
                    className="item_stat"
                    to="/statistics"
                  >
                    Группы по дисциплине
                  </Link>
                </div>
                <div className="menu_container" hidden={this.props.stats}>
                  <Link
                    className="item_stat"
                    to="/studentbydiscipline"
                  >
                    Студента по дисциплине
                  </Link>
                </div>
                <div className="menu_container" hidden={this.props.stats}>
                  <Link
                    className="item_stat"
                    to="/studentstatistic"
                  >
                    Студента по периоду
                  </Link>
                </div>
                <div className="menu_container" hidden={this.props.stats}>
                  <Link
                    className="item_stat"
                    to="/generalgroupstatistic"
                  >
                    Общая статистика по группе
                  </Link>
                </div>
                <div className="menu_container" hidden={this.props.stats}>
                  <Link
                    className="item_stat"
                    to="/facultystatistic"
                  >
                    Статистика по кафедре
                  </Link>
                </div>
              </div>
            </div>
            {/* <button className="bt_guide">
              <Guide className="guide_pic"></Guide>
              <div className="guide_name">Руководство пользователя</div>
            </button> */}
            <div className="container_with_guide disp">
              <div>
                <button className="bt_guide_page">
                  <Guide className="guide_white"></Guide>
                </button>
              </div>
              <Link className="guide_item" to="/guide">
                Руководство пользователя
              </Link>
            </div>
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
