import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Link } from "react-router-dom";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function BurgerModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#ff0000";
  //   }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        className="burger_button"
        hidden={modalIsOpen}
        onClick={openModal}
      ></button>
      <div>
        <Modal
          className="modal_main"
          //   ariaHideApp={false}
          isOpen={modalIsOpen}
          //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          overlayClassName={"modal_open"}
          //   style={customStyles}
          contentLabel="Example Modal"
        >
          <button className="bt_close" onClick={closeModal}>
            close
          </button>
          <div>I am a modal</div>
          {/* <form> */}
          <div>
            <Link
              className="links"
              to="/media/examples/link-element-example.css"
            >
              Hello
            </Link>
            <br />
            <Link
              className="links"
              to="/media/examples/link-element-example.css"
            >
              Hello
            </Link>
            <br />
            <Link
              className="links"
              to="/media/examples/link-element-example.css"
            >
              Hello
            </Link>
            <br />
            <Link
              className="links"
              to="https://vk.com/im?peers=438774955_240124365_c58&sel=211533626"
            >
              Hello
            </Link>
          </div>
          {/* </form> */}
        </Modal>
      </div>
    </div>
  );
}

export default BurgerModal;
