import React from "react";
import "./Header.css";
import profile from "../../profile.png";
import mech from "../../Vector.png";
import col from "../../Col.png";
import que from "../../Que.png";
class MainHeader extends React.Component {
  Logout = () => {
    window.location.assign("/electronicaljournal-view");
  };

  render() {
    const { Logout } = this;
    return (
      <div>
        <header className="head display-flex">
          <h1 className="journal-name">
            <a className="j_name" href="/electronicaljournal-view/journal">
              Электронный журнал преподавателя УО «ВГТУ»
            </a>
          </h1>
          <div className="disp">
            <div className="icons_que">
              <a href="/electronicaljournal-view/journal">
                <img src={que} alt="description"></img>
              </a>
            </div>
            <div className="icons_col">
              <a href="/electronicaljournal-view/journal">
                <img src={col} alt="description"></img>
              </a>
            </div>
            <div className="icons_mech">
              <a href="/electronicaljournal-view/journal">
                <img src={mech} alt="description"></img>
              </a>
            </div>
            <div>
              <img
                className="profile_pic"
                src={profile}
                alt="description"
              ></img>
            </div>
            <div>
              <label className="name_of_teacher">Абазовская Н.К.</label>
              <input
                type="submit"
                className="bth_exit"
                value="Выйти"
                onClick={Logout}
              />
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default MainHeader;
