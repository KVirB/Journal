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
  const [count, setCount] = useState(true);
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
    count === true ? setCount(false) : setCount(true);
    console.log(count);
  };

  return (
    <div>
      {user && (
        <button
          className="burger_button"
          hidden={modalIsOpen}
          onClick={openModal}
        >
          {/* <div>
            <BurgerBt />
          </div> */}
        </button>
      )}
      <div>
        <Modal
          className="modal_main"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName={"modal_open"}
          contentLabel="Example Modal"
        >
          <div className="container_with_bt_close">
            <button
              className="bt_main_page"
              onClick={() =>
                navigate("/electronicaljournal-view/journal", {
                  replace: false,
                })
              }
            >
              <div>
                <Home />
              </div>
            </button>
            <Link
              className="home_item"
              to="/electronicaljournal-view/journal"
              onClick={closeModal}
            >
              Главная
            </Link>
            <button className="bt_close" onClick={closeModal}>
              {/* <Cross /> */}
            </button>
          </div>
          <button
            className="input_statistics"
            onClick={() => {
              count_stats();
            }}
          >
            <div>
              <div>Статистика</div>
              <div className="arrow_div">
                <span
                  className={
                    count ? "arrow_down" : "arrow_down arrow_down_transform"
                  }
                ></span>
              </div>
            </div>
          </button>
          <div className="menu_container" hidden={count}>
            <Link
              className="item_stat"
              to="/electronicaljournal-view/statistics"
              onClick={closeModal}
            >
              1. Статистика группы по дисциплине
            </Link>
          </div>
          <div className="menu_container" hidden={count}>
            <Link
              className="item_stat"
              to="/electronicaljournal-view/studentbydiscipline"
              onClick={closeModal}
            >
              2. Статистика студента по дисциплине
            </Link>
          </div>
          <div className="menu_container" hidden={count}>
            <Link
              className="item_stat"
              to="/electronicaljournal-view/studentstatistic"
              onClick={closeModal}
            >
              3. Статистика студента по периоду
            </Link>
          </div>
          <div className="menu_container" hidden={count}>
            <Link
              className="item_stat"
              to="/electronicaljournal-view/generalgroupstatistic"
              onClick={closeModal}
            >
              4. Общая статистика по группе
            </Link>
          </div>
          <div className="menu_container" hidden={count}>
            <Link
              className="item_stat"
              to="/electronicaljournal-view/facultystatistic"
              onClick={closeModal}
            >
              5. Статистика по факультету
            </Link>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default BurgerModal;
