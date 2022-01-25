import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import "../app/App.css";

export default class MarksTable extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.journalsite !== prevProps.journalsite) {
    }
  }
  state = {
    presence: null,
    date: null,
    koko: [],
    x: null,
  };
  getCheckBox = (e) => {
    const { value } = e.target;
    this.setState({
      presence: value,
    });
  };
  save = () => {
    this.props.setJournalHeader();
    setTimeout(() => {
      let header = this.props.journalHeader;
      this.props.getJournalHeaderThunk(header);
      this.props.clearJournalHeader();
    }, 300);
  };
  changeInputHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  componentDidMount() {
    if (localStorage.getItem("journalsite") !== null) {
      let isBoss = window.confirm(
        "С момента прошлой сессии у вас остались не сохраненные данные.Сохранить прошлые изменения?"
      );
      this.props.setJournalHeader();
      if (isBoss === true) {
        setTimeout(() => {
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          this.props.clearJournalHeader();
          console.log(JSON.stringify(header) + "all good");
          alert("Сохранено");
          localStorage.clear();
          this.props.clearTP();
          window.location.reload();
        }, 1);
      } else {
        localStorage.clear();
        this.props.clearTP();
      }
    }
  }
  render() {
    const { getCheckBox, getDateBox } = this;
    return (
      <div>
        <div className="headHr" />
        <div className="all-content">
          <TableContainer sx={{ maxHeight: 760 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{ maxWidth: 0, minWidth: 0 }}
              className="disp"
            >
              <TableRow>
                {this.props.jh.map((m, i) => {
                  if (i === 0)
                    return (
                      <div className="line-fio diagonal-line" key={m.id}>
                        <label className="dzs">Дата</label>
                        <label className="fios">ФИО</label>
                      </div>
                    );
                })}
                {/* {this.props.journalsite.map((m) => */}
                {this.props.jh.map((item, i) => {
                  if (i === 0) {
                    return item.content
                      .sort((a, b) => a.id - b.id)
                      .map((content) => (
                        <TableCell
                          height="19px"
                          width="153.55px"
                          className="disp line-stud"
                          key={content.id}
                        >
                          <div className="surname">
                            {content.student.surname}
                          </div>
                          <div className="csn surname">
                            {content.student.name}
                          </div>
                        </TableCell>
                      ));
                  }
                })}
                {/* )} */}
              </TableRow>
              {/* {this.props.journalsite.map((m) => */}
              {this.props.jh.map((item, i) => {
                return (
                  <tbody key={i}>
                    <TableRow>
                      <TableCell height="126px" className="line-data">
                        <div className="">
                          <p className="day_mount">
                            {item.data[2] < 10
                              ? (this.state.x = "0" + item.data[2])
                              : item.data[2]}
                            .
                            {item.data[1] < 10
                              ? (this.state.x = "0" + item.data[1])
                              : item.data[1]}
                            <br />
                          </p>
                          <p className="year">
                            {item.data[0] < 10
                              ? (this.state.x = "0" + item.data[0])
                              : item.data[0]}
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                    {item.content
                      .sort((a, b) => a.id - b.id)
                      .map((content, j) => {
                        return (
                          <TableRow key={j}>
                            <TableCell
                              className="line-grade disp"
                              height="26px"
                            >
                              <div className="std_cell">
                                {content.presence === true && (
                                  <select
                                    key={content.id}
                                    className="sel_grade myInput"
                                    name="select"
                                    defaultValue={content.grade}
                                    onChange={(e) => {
                                      this.props.setBtnFalse();
                                      this.props.setJournalSiteMark(
                                        item.id,
                                        content.id,
                                        e.target.value
                                      );
                                      if (typeof Storage !== "undefined") {
                                        localStorage.setItem(
                                          "journalsite",
                                          JSON.stringify(this.props.journalsite)
                                        );
                                      }
                                    }}
                                  >
                                    <option hidden></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                  </select>
                                )}
                                <div className="checkbox">
                                  <input
                                    className="custom-checkbox top"
                                    type="checkbox"
                                    id={content.id}
                                    name={content.id}
                                    defaultChecked={content.presence}
                                    onChange={() => {
                                      this.props.setBtnFalse();
                                      console.log(
                                        this.props.disabled + "DISABBLE F MARKS"
                                      );
                                      this.props.toggleJournalSitePresence(
                                        item.id,
                                        content.id
                                      );
                                      if (typeof Storage !== "undefined") {
                                        localStorage.setItem(
                                          "journalsite",
                                          JSON.stringify(this.props.journalsite)
                                        );
                                      }
                                    }}
                                  />
                                  <label htmlFor={content.id}></label>
                                </div>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </tbody>
                );
              })}
              {/* )} */}
            </Table>
          </TableContainer>
        </div>
        <div className="headHrDown" />
      </div>
    );
  }
}
