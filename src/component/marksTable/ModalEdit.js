import React from "react";
import Modal from "react-modal";
import { ReactComponent as CrBlue } from "../../cross_blue.svg";
import { ReactComponent as CrWhite } from "../../cross_white.svg";

class ModalEdit extends React.Component {
  state = {
    theme: null,
  };
  handleClick = (e) => {
    const { value } = e.target;
    this.setState({ theme: value });
  };
  render() {
    return (
      <div onClick={this.props.closeModal}>
        <Modal
          isOpen={this.props.isOpen}
          className="modal_unsave_data"
          // onAfterOpen={afterOpenModal}
          onRequestClose={this.props.closeModal}
          contentLabel="Example Modal"
          overlayClassName={"modal_open"}
        >
          <div
            className="modal_unsave_data"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="head_modal_unsave">
              <div>Тема занятия</div>
              <button
                className="btn_close_modal_unsave"
                onClick={this.props.closeModal}
              >
                <CrBlue className="cross_blue"></CrBlue>
                <CrWhite className="cross_white"></CrWhite>
              </button>
            </div>
            <div className="body_modal_unsave">
              <input
                placeholder="Введите тему занятия"
                className="input_block_theme"
                onChange={(e) => this.handleClick(e)}
                defaultValue={this.props.themeHeader}
              ></input>

              <div className="second_text_block_unsave">
                Если вы не сохраните ваши изменения будут потеряны.
              </div>
            </div>
            <div className="foot_modal_unsave">
              <button
                className="bt_cancel_modal_unsave"
                onChange={this.props.closeModal}
              >
                Отменить
              </button>
              <button
                // disabled={this.props.disabled}
                className="bt_savechanges_modal_unsave"
                onClick={() => {
                  this.props.patchThemeHeaderThunk(
                    this.props.idHeader,
                    this.state.theme
                  );
                }}
              >
                Сохранить
              </button>
              {console.log(this.props.idHeader, this.state.theme)}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default ModalEdit;
