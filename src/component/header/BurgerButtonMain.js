import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStats } from "../../icon_stats.svg";
import { ReactComponent as IconStatsWhite } from "../../icons_stats_white.svg";
import { ReactComponent as Guide } from "../../guide.svg";
import { ReactComponent as HomeWhite } from "../../home_white.svg";
import { ReactComponent as HomeBlack } from "../../home_black.svg";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import BurgerModal from "./BurgerModal";
import BurgerMenuMain from "./BurgerMenuMain";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import ButtonStatistics from "../header/ButtonStatistics";
import { ReactComponent as PoloskiWhite } from "../../poloski_white.svg";
import { ReactComponent as StrWhite } from "../../white_str.svg";

export default class BurgerButtonMain extends React.Component {
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
      <div>
        <button
          className="burger_button"
          onClick={() => {
            this.openModal();
            this.setStatsClose();
          }}
        >
          {this.state.modal === false ? (
            <PoloskiWhite className="burger_pic"></PoloskiWhite>
          ) : (
            <StrWhite className="burger_pic"></StrWhite>
          )}
        </button>
        <BurgerMenuMain
          modal={this.state.modal}
          stats={this.state.stats}
          openModal={this.openModal}
          setStatsClose={this.setStatsClose}
          setStatsOpen={this.setStatsOpen}
          setStats={this.setStats}
        ></BurgerMenuMain>
      </div>
    );
  }
}
