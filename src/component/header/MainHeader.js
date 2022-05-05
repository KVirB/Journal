import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import "./Header.css";
import profile from "../../profile.svg";
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
      <header className="head">
        <h1 className="journal-name">
          <Link className="j_name" to="/electronicaljournal-view">
            Электронный журнал преподавателя УО «ВГТУ»
          </Link>
        </h1>
        <div className="disp">
          <div className="icons_que">
            {/* <Link to="/electronicaljournal-view"> */}
            <img src={que} alt="description"></img>
            {/* </Link> */}
          </div>
          <div className="icons_col">
            {/* <Link to="/electronicaljournal-view"> */}
            <img src={col} alt="description"></img>
            {/* </Link> */}
          </div>
          <div className="icons_mech">
            {/* <Link to="/electronicaljournal-view"> */}
            <img src={mech} alt="description"></img>
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
              </div>
              <div>
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
