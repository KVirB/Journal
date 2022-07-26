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

export default class ButtonStatistics extends React.Component {
  render() {
    return (
      <div>
        <div className="Burger_menu" onClick={(e) => e.stopPropagation()}>
          <button
            className="bt_icon_stats"
            onClick={() => {
              this.props.openModal();
              this.props.setStatsOpen();
            }}
          >
            <IconStats className="icon_stats_blue"></IconStats>
            <IconStatsWhite className="icon_stats_white"></IconStatsWhite>
          </button>
        </div>
      </div>
    );
  }
}
