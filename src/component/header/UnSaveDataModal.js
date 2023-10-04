import React from "react";
import "./Header.css";
import Modal from "react-modal";
import { ReactComponent as CrBlue } from "../../cross_blue.svg";
import { ReactComponent as CrWhite } from "../../cross_white.svg";

class UnSaveDataModal extends React.Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          className="modal_unsave_data"
          // onAfterOpen={afterOpenModal}
          //   onRequestClose={this.props.closeModal}
          // contentLabel="Example Modal"
          overlayClassName={"modal_open"}
        >
          <div className="head_modal_unsave">
            <div>Предупреждение</div>
            <button className="btn_close_modal_unsave">
              <CrBlue className="cross_blue"></CrBlue>
              <CrWhite className="cross_white"></CrWhite>
            </button>
          </div>
          <div className="body_modal_unsave">
            <div className="first_text_block_unsave">
              Вы хотите сохранить изменения в этом документе перед закрытием?
            </div>
            <div className="second_text_block_unsave">
              Если вы не сохраните ваши изменения будут потеряны.
            </div>
          </div>
          <div className="foot_modal_unsave">
            <button
              className="bt_cancel_modal_unsave"
              onClick={this.props.closeModal}
            >
              Отменить
            </button>
            <button
              // disabled={this.props.disabled}
              className="bt_savechanges_modal_unsave"
              onClick={() => {
                window.location.assign(`/journal`);
              }}
            >
              Вернуться к изменениям
            </button>
            {/* <input
              className="button-header bt_color"
              type="submit"
              value="Сохранить"
              disabled={this.props.disabled}
            /> */}
          </div>
        </Modal>
      </div>
    );
  }
}
export default UnSaveDataModal;
