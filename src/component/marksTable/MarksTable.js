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
    x: 0,
  };
  getCheckBox = (e) => {
    const { value } = e.target;
    this.setState({
      presence: value,
    });
  };
  save = () => {
    (async () => {
      await this.props.clearJournalHeader();
      this.props.setJournalHeader();
      let header = this.props.journalHeader;
      this.props.getJournalHeaderThunk(header);
    })();
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
        (async () => {
          await this.props.clearJournalHeader();
          this.props.setJournalHeader();
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          alert("Сохранено");
          await localStorage.clear();
          await this.props.clearTypeClass();
        })();
      } else {
        localStorage.clear();
        this.props.clearTypeClass();
      }
    }
  }
  render() {
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
              <tbody>
                <TableRow>
                  {this.props.jh.map((m, i) => {
                    if (i === 0)
                      return (
                        <td className="line-fio diagonal-line" key={i}>
                          <label className="dzs">Дата</label>
                          <label className="fios">ФИО</label>
                        </td>
                      );
                  })}
                  {this.props.jh.map((item, i) => {
                    if (i === 0) {
                      return item.content
                        .sort((a, b) => a.id - b.id)
                        .map((content, i) => (
                          <TableCell
                            height="19px"
                            width="186px"
                            className="disp line-stud"
                            key={content.id}
                          >
                            <div className="surname">
                              {i + 1 + ". " + content.student.surname}
                            </div>
                            <div className="csn surname">
                              {content.student.name}
                            </div>
                          </TableCell>
                        ));
                    }
                  })}
                </TableRow>
              </tbody>
              {this.props.jh.map((item, i) => {
                return (
                  <tbody key={i}>
                    <TableRow>
                      <TableCell height="126px" className="line-data">
                        <div className="">
                          <p className="day_mount">
                            {item.data[2] < 10
                              ? String(this.state.x) + item.data[2]
                              : item.data[2]}
                            .
                            {item.data[1] < 10
                              ? String(this.state.x) + item.data[1]
                              : item.data[1]}
                            <br />
                          </p>
                          <p className="year">
                            {item.data[0] < 10
                              ? String(this.state.x) + item.data[0]
                              : item.data[0]}
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                    {item.content
                      .sort((a, b) => a.id - b.id)
                      .map((content, j) => {
                        if (content.presence === false) {
                          return (
                            <TableRow key={j}>
                              <TableCell
                                className="line-grade disp"
                                height="26px"
                              >
                                <div className="std_cell">
                                  {/* {content.presence === true && ( */}
                                  <select
                                    key={content.id}
                                    className="sel_grade myInput"
                                    name="select"
                                    disabled
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
                                  {/* )} */}
                                  <div className="checkbox">
                                    <input
                                      className="custom-checkbox top"
                                      type="checkbox"
                                      id={content.id}
                                      name={content.id}
                                      defaultChecked={content.presence}
                                      onChange={() => {
                                        (async () => {
                                          await this.props.clearPresent();
                                          this.props.setPresent();
                                        })();
                                        this.props.setBtnFalse();
                                        this.props.toggleJournalSitePresence(
                                          item.id,
                                          content.id
                                        );
                                        if (typeof Storage !== "undefined") {
                                          localStorage.setItem(
                                            "journalsite",
                                            JSON.stringify(
                                              this.props.journalsite
                                            )
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
                        } else {
                          return (
                            <TableRow key={j}>
                              <TableCell
                                className="line-grade disp"
                                height="26px"
                              >
                                <div className="std_cell">
                                  {/* {content.presence === true && ( */}
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
                                  {/* )} */}
                                  <div className="checkbox">
                                    <input
                                      className="custom-checkbox top"
                                      type="checkbox"
                                      id={content.id}
                                      name={content.id}
                                      defaultChecked={content.presence}
                                      onChange={() => {
                                        (async () => {
                                          await this.props.clearPresent();
                                          this.props.setPresent();
                                        })();
                                        this.props.setBtnFalse();
                                        this.props.toggleJournalSitePresence(
                                          item.id,
                                          content.id
                                        );
                                        if (typeof Storage !== "undefined") {
                                          localStorage.setItem(
                                            "journalsite",
                                            JSON.stringify(
                                              this.props.journalsite
                                            )
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
                        }
                      })}
                  </tbody>
                );
              })}
            </Table>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{ maxWidth: 0, minWidth: 0 }}
            >
              <tbody>
                <TableRow>
                  {this.props.jh.map((item, i) => {
                    if (i === 0) {
                      return (
                        <TableCell className="line_itogo" key={i}>
                          <div className="pris">Присутствующих</div>
                        </TableCell>
                      );
                    }
                  })}
                  {this.props.jh.map((item, i) => {
                    if (i === 0) {
                      return this.props.present.map((item, i) => {
                        return (
                          <TableCell className="line_itogo_col" key={i}>
                            <div className="pris_col">{item}</div>
                          </TableCell>
                        );
                      });
                    }
                  })}
                </TableRow>
              </tbody>
            </Table>
          </TableContainer>
        </div>
        <div className="headHrDown" />
      </div>
    );
  }
}
