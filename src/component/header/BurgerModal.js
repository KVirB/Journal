import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Home } from "../../Home.svg";
import { ReactComponent as Cross } from "../../cross.svg";
import { ReactComponent as BurgerBt } from "../../BurgerBt.svg";
import { useAuth } from "../../hooks/useAuth";

Modal.setAppElement("#root");

function BurgerModal() {
  const [stats, setCount] = useState(true);
  const [second, setSecond] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  let count_stats = () => {
    stats === true ? setCount(false) : setCount(true);
    console.log(stats);
  };
  let second_stats = () => {
    second === true ? setSecond(false) : setSecond(true);
    console.log(second);
  };

  return (
    <div>
      {user && (
        <button
          className="burger_button"
          hidden={modalIsOpen}
          onClick={openModal}
        ></button>
      )}
      <div>
        <Modal
          className="modal_main"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName={"modal_open"}
          contentLabel="Example Modal"
        >
          <div className="burger_main_with_bt">
            <div className="container_with_bt_close">
              <button
                className="bt_main_page"
                onClick={() =>
                  navigate("/electronicaljournal-view/journal", {
                    replace: false,
                  })
                }
              >
                <Link
                  className="home_item"
                  to="/electronicaljournal-view/journal"
                  onClick={closeModal}
                >
                  Главная
                </Link>
              </button>
            </div>
            <div>
              <button className="bt_close" onClick={closeModal}></button>
            </div>
          </div>
          <button
            className={
              stats
                ? "input_statistics"
                : "input_statistics input_statistics_menu_down"
            }
            onClick={() => {
              count_stats();
            }}
          >
            <div>
              <div>Статистика</div>
              <div className="arrow_div">
                <span
                  className={
                    stats
                      ? "arrow_down"
                      : "arrow_down_menu arrow_down_transform"
                  }
                ></span>
              </div>
            </div>
          </button>

          <div className="menu_container" hidden={stats}>
            <Link
              className="item_stat"
              to="/electronicaljournal-view/statistics"
              onClick={closeModal}
            >
              Группы по дисциплине
            </Link>
          </div>
          <div className="menu_container" hidden={stats}>
            <Link
              className="item_stat"
              to="/electronicaljournal-view/studentbydiscipline"
              onClick={closeModal}
            >
              Студента по дисциплине
            </Link>
          </div>
          <div className="menu_container" hidden={stats}>
            <Link
              className="item_stat"
              to="/electronicaljournal-view/studentstatistic"
              onClick={closeModal}
            >
              Студента по периоду
            </Link>
          </div>
          <div className="menu_container" hidden={stats}>
            <Link
              className="item_stat"
              to="/electronicaljournal-view/generalgroupstatistic"
              onClick={closeModal}
            >
              Общая статистика по группе
            </Link>
          </div>
          <div className="menu_container" hidden={stats}>
            <Link
              className="item_stat"
              to="/electronicaljournal-view/facultystatistic"
              onClick={closeModal}
            >
              Статистика по факультету
            </Link>
          </div>
          {/* <button
            className={
              second
                ? "input_statistics"
                : "input_statistics input_statistics_menu_down"
            }
            onClick={() => {
              second_stats();
            }}
          >
            <div>
              <div>Пункт меню 1</div>
              <div className="arrow_div">
                <span
                  className={
                    second
                      ? "arrow_down"
                      : "arrow_down_menu arrow_down_transform"
                  }
                ></span>
              </div>
            </div>
          </button> */}
        </Modal>
      </div>
    </div>
  );
}

export default BurgerModal;
