import * as React from "react";
import "../app/App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  setJournalHeader,
  clearJournalHeader,
  getJournalHeaderThunk,
  setIsLoadJournalTrue,
  setIsLoadJournalFalse,
} from "../../reducer/journalsiteReducer";
import { setBtnTrue, setBtnFalse } from "../../reducer/btnReducer";

export class marksTableHeader extends React.Component {
  render() {
    // eslint-disable-next-line no-lone-blocks
    {
      return (
        <div>
          {console.log(this.props.disabled + "disabled")}
          <div className="disp marksTableHeaderWrap">
            <div
              className="block_for_marksTable"
              title={localStorage.getItem("disciplineName")}
            >
              <p className="name_for_marksTable name_discipline_header">
                Название дисциплины:
              </p>
              <input
                className="input_discipline_for_marksTable"
                defaultValue={localStorage.getItem("disciplineName")}
                disabled="true"
              ></input>
            </div>
            <div
              className="block_for_marksTable"
              title={localStorage.getItem("groupName")}
            >
              <p className="name_for_marksTable gr_margin">Группа:</p>
              <input
                className="input_group_for_marksTable"
                defaultValue={localStorage.getItem("groupName")}
                disabled="true"
              ></input>
            </div>
            <div
              className="block_for_marksTable"
              title={localStorage.getItem("typeName")}
            >
              <p className="name_for_marksTable type_margin">Тип занятия:</p>
              <input
                className="input_type_for_marksTable"
                defaultValue={localStorage.getItem("typeName")}
                disabled="true"
              ></input>
            </div>
            <div
              className="block_for_marksTable"
              title={localStorage.getItem("subgroupName")}
            >
              <p className="name_for_marksTable subgr_margin">Подгруппа:</p>
              <input
                className="input_subgroup_for_marksTable"
                defaultValue={localStorage.getItem("subgroupName")}
                disabled="true"
              ></input>
            </div>
            <input
              className="button-header bt_color"
              type="submit"
              value="Сохранить"
              disabled={this.props.disabled}
              onClick={() => {
                (async () => {
                  this.props.setIsLoadJournalFalse();
                  localStorage.setItem("isLoad", true);
                  await this.props.setJournalHeader();
                  let header = this.props.journalHeader;
                  await this.props.getJournalHeaderThunk(header);
                  this.props.clearJournalHeader();
                  this.props.setBtnTrue();
                  localStorage.removeItem("journalsite");
                  localStorage.removeItem("disciplineId");
                  localStorage.removeItem("disciplineName");
                  localStorage.removeItem("typeClassId");
                  localStorage.removeItem("groupId");
                  localStorage.removeItem("subgroupId");
                })();
              }}
            />

            {JSON.parse(localStorage.getItem("idSourse")) !== null ? (
              <></>
            ) : (
              <Link
                id="link_additional"
                className="button_additional_grade"
                to="/additional_grade"
              >
                Дополнительно
              </Link>
            )}
          </div>
        </div>
      );
    }
  }
}
let mapStateToProps = (state) => {
  return {
    journalHeader: state.journalsitePage.journalHeader,
    disabled: state.btnPage.disabled,
  };
};
export default connect(mapStateToProps, {
  setJournalHeader,
  clearJournalHeader,
  getJournalHeaderThunk,
  setBtnTrue,
  setBtnFalse,
  setIsLoadJournalTrue,
  setIsLoadJournalFalse,
})(marksTableHeader);
