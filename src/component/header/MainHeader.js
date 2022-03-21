import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import "./Header.css";
import profile from "../../profile.png";
import mech from "../../Vector.png";
import col from "../../Col.png";
import que from "../../Que.png";

function MainHeader() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const Logout = () => {
    localStorage.removeItem("user");
    signOut(() => navigate("/electronicaljournal-view", { replace: true }));
  };

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
          {user && (
            <div className="user-info__div">
              <div>
                <img
                  className="profile_pic"
                  src={profile}
                  alt="description"
                ></img>
              </div>
              <div>
                <label className="name_of_teacher">{user.fio}</label>
                <input
                  type="submit"
                  className="bth_exit"
                  value="Выйти"
                  onClick={Logout}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
export default MainHeader;
