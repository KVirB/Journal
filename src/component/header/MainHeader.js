import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import "./Header.css";
import profile from "../../profile.svg";
import mech from "../../Vector.png";
import col from "../../col.svg";
import que from "../../Que.png";
import BurgerMenu from "./BurgerMenu";
import BurgerModal from "./BurgerModal";
import BurgerButtonMain from "./BurgerButtonMain";

function MainHeader() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const Logout = () => {
    localStorage.removeItem("user");
    signOut(() => navigate("/electronicaljournal-view", { replace: true }));
  };
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (document.getElementById("header")) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "100px";
      } else {
        document.getElementById("header").style.top = "0";
      }
    }
    if (document.getElementById("journal_name_header")) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("journal_name_header").style.top = "0px";
      } else {
        document.getElementById("journal_name_header").style.top = "-100px";
      }
    }
    if (document.getElementById("pull_out")) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("pull_out").style.top = "200px";
      } else {
        document.getElementById("pull_out").style.top = "100px";
      }
    }

    console.log(currentScrollPos);
    prevScrollpos = currentScrollPos;
  };

  return (
    <div className="main_header">
      <div className="journal_name_header" id="journal_name_header">
        <h1 className="journal-name-600">
          <Link className="j_name-600" to="/electronicaljournal-view">
            Электронный журнал преподавателя УО «ВГТУ»
          </Link>
        </h1>
      </div>
      <div className="head" id="header">
        <div className="disp journal-name-block">
          {/* <button className="burger_button"></button> */}
          <h1 className="journal-name">
            <Link className="j_name" to="/electronicaljournal-view">
              Электронный журнал преподавателя УО «ВГТУ»
            </Link>
          </h1>
        </div>

        <div className="disp bt_burger_modal">
          <div className="disp">
            <div className="icons_col">
              {/* <Link to="/electronicaljournal-view"> */}
              <img src={col} alt="description"></img>
              {/* </Link> */}
            </div>

            {user && (
              <div className="user-info__div">
                <div>
                  <img
                    className="profile_pic"
                    src={profile}
                    alt="description"
                  ></img>
                </div>
                <div className="block_of_name">
                  <label className="name_of_teacher">{user.fio}</label>
                  <label className="email_of_teacher">{user.email}</label>
                </div>
                <div>
                  <input
                    type="submit"
                    className="bth_exit exit_1920"
                    value="Выйти"
                    onClick={Logout}
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    className="bth_exit exit_480"
                    value="➞"
                    onClick={Logout}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="burger_button_header">
            <BurgerButtonMain></BurgerButtonMain>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainHeader;
