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
    inputs: {},
    lessonHours: {
      1: "8:00",
      2: "9:50",
      3: "11:40",
      4: "14:00",
      5: "15:45",
      6: "17:30",
      7: "19:15",
    },
  };

  getCheckBox = (e) => {
    const { value } = e.target;
    this.setState({
      presence: value,
    });
  };

  handleKeyPress(event) {
    const invalidChars = ["-", "+", "e", ".", "E"];
    if (invalidChars.indexOf(event.key) !== -1) {
      event.preventDefault();
    }
  }
  getInputValue = (e, inputId) => {
    let value = e.target.value;
    if (value.length <= 3 && Number.isInteger(+value)) {
      if (value <= 120) {
        this.setState({
          ...this.state,
          inputs: {
            ...this.state.inputs,
            [inputId]: +value,
          },
        });
      }
    } else {
      return;
    }
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
      this.props.setJH();
    }

    // if (localStorage.getItem("journalsite") !== null) {
    //   let isBoss = window.confirm(
    //     "С момента прошлой сессии у вас остались не сохраненные данные.Сохранить прошлые изменения?"
    //   );
    //   this.props.setJournalHeader();
    //   if (isBoss === true) {
    //     (async () => {
    //       await this.props.clearJournalHeader();
    //       this.props.setJournalHeader();
    //       let header = this.props.journalHeader;
    //       this.props.getJournalHeaderThunk(header);
    //       alert("Сохранено");
    //       await localStorage.removeItem("journalsite");
    //       await this.props.clearTypeClass();
    //     })();
    //   } else {
    //     localStorage.removeItem("journalsite");
    //     this.props.clearTypeClass();
    //   }
    // }
  }

  mapDate = (mapArr) =>
    mapArr.map((m, i) => {
      if (i === 0)
        return (
          <td className="line-fio diagonal-line" key={i}>
            <label className="dzs">Дата</label>
            <label className="fios">ФИО</label>
          </td>
        );
    });

  mapStudents(mapArr) {
    return mapArr.map((item, i) =>
      item.journalHeaders.map((header, i) => {
        if (i === 0) {
          return header.journalContents
            .sort((a, b) => a.id - b.id)
            .map((content, i) => (
              <TableCell
                height="19px"
                width="270px"
                className="disp line-stud"
                key={content.id}
              >
                <div className="surname">
                  {i + 1 + ". " + content.student.surname}
                </div>
                <div className="csn surname">{content.student.name}</div>
              </TableCell>
            ));
        }
      })
    );
  }
  mapContent(mapArr) {
    return mapArr.map((item, i) =>
      item.journalHeaders
        .sort((a, b) => a.id - b.id)
        .map((header, i) => {
          return (
            <tbody key={i}>
              <TableRow>
                <TableCell height="126px" className="line-data">
                  <div className="">
                    <p className="day_mount">
                      {header.dateOfLesson !== null
                        ? header.dateOfLesson[2] < 10
                          ? String(this.state.x) + header.dateOfLesson[2]
                          : header.dateOfLesson[2]
                        : "No date"}
                      .
                      {header.dateOfLesson !== null
                        ? header.dateOfLesson[1] < 10
                          ? String(this.state.x) + header.dateOfLesson[1]
                          : header.dateOfLesson[1]
                        : console.log("kiki")}
                      <br />
                    </p>
                    <p className="year">
                      {header.dateOfLesson !== null
                        ? header.dateOfLesson[0] < 10
                          ? String(this.state.x) + header.dateOfLesson[0]
                          : header.dateOfLesson[0]
                        : console.log("kaki")}
                    </p>
                    <p className="day_mount">
                      {this.state.lessonHours[header.hoursCount]}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
              {header.journalContents
                .sort((a, b) => a.id - b.id)
                .map((content, j) => {
                  // if (content.presence === false) {
                  return (
                    <TableRow key={j}>
                      <TableCell
                        className="line-grade disp"
                        height="26px"
                        width={
                          localStorage.getItem("typeC") === "2"
                            ? "65px"
                            : "47px"
                        }
                      >
                        <div className="std_cell">
                          {/* {content.presence === true && ( */}
                          <select
                            key={content.id}
                            className="sel_grade myInput"
                            name="select"
                            disabled={content.presence === false ? true : false}
                            hidden={
                              localStorage.getItem("typeC") === "1" //Лекция
                                ? true
                                : localStorage.getItem("typeC") === "2" //Лабораторная
                                ? true
                                : localStorage.getItem("typeC") === "3" //Практическая
                                ? false
                                : localStorage.getItem("typeC") === "4" // Экзамен
                                ? false
                                : console.log("Error with hidden")
                            }
                            defaultValue={content.grade}
                            onChange={(e) => {
                              this.props.setBtnFalse();
                              this.props.setJournalSiteMark(
                                header.id,
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
                          {/* // )} */}
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
                                  this.props.setBtnFalse();
                                  await this.props.toggleJournalSitePresence(
                                    header.id,
                                    content.id
                                  );
                                  if (typeof Storage !== "undefined") {
                                    localStorage.setItem(
                                      "journalsite",
                                      JSON.stringify(this.props.journalsite)
                                    );
                                  }
                                })();

                                // if (typeof Storage !== "undefined") {

                                // }
                              }}
                            />
                            <label htmlFor={content.id}></label>
                          </div>
                          <div className="lateness">
                            <input
                              value={this.state.inputs[content.id]}
                              type="number"
                              // step="1"
                              onKeyPress={this.handleKeyPress}
                              // maxLength="2"
                              defaultValue={content.lateness}
                              onChange={(e) => {
                                this.getInputValue(e, content.id);
                                this.props.setBtnFalse();
                                this.props.setJournalSiteLateness(
                                  header.id,
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
                              className="sel_grade myInputMin"
                              hidden={
                                localStorage.getItem("typeC") === "2"
                                  ? false
                                  : true
                              }
                            />
                            <label
                              hidden={
                                localStorage.getItem("typeC") === "2"
                                  ? false
                                  : true
                              }
                            >
                              Мин.
                            </label>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </tbody>
          );
        })
    );
  }

  render() {
    {
      return (
        <div>
          <div className="headHr" />
          {console.log(JSON.stringify(this.props.journalsite) + "site")}
          <div className="all-content">
            <TableContainer>
              <Table
                stickyHeader
                aria-label="sticky table"
                style={{ maxWidth: 0, minWidth: 0 }}
                className="disp"
              >
                <tbody>
                  <TableRow>
                    {localStorage.getItem("journalsite") !== null
                      ? this.mapDate(
                          JSON.parse(localStorage.getItem("journalsite"))
                        )
                      : this.mapDate(this.props.journalsite)}
                    {
                      /* {localStorage.getItem("journalsite") !== null
                      ? JSON.parse(localStorage.getItem("journalsite")).map(
                          (m, i) => {
                            if (i === 0)
                              return (
                                <td className="line-fio diagonal-line" key={i}>
                                  <label className="dzs">Дата</label>
                                  <label className="fios">ФИО</label>
                                </td>
                              );
                          }
                        )
                      : this.props.journalsite.map((m, i) => {
                          if (i === 0)
                            return (
                              <td className="line-fio diagonal-line" key={i}>
                                <label className="dzs">Дата</label>
                                <label className="fios">ФИО</label>
                              </td>
                            );
                        })} */
                      // this.props.jh.map((m, i) => {
                      //   if (i === 0)
                      //     return (
                      //       <td className="line-fio diagonal-line" key={i}>
                      //         <label className="dzs">Дата</label>
                      //         <label className="fios">ФИО</label>
                      //       </td>
                      //     );
                      // })
                    }
                    {localStorage.getItem("journalsite") !== null
                      ? this.mapStudents(
                          JSON.parse(localStorage.getItem("journalsite"))
                        )
                      : this.mapStudents(this.props.journalsite)}
                  </TableRow>
                </tbody>
                {localStorage.getItem("journalsite") !== null
                  ? this.mapContent(
                      JSON.parse(localStorage.getItem("journalsite"))
                    )
                  : this.mapContent(this.props.journalsite)}
              </Table>
              <Table
                stickyHeader
                aria-label="sticky table"
                style={{ maxWidth: 0, minWidth: 0 }}
              >
                <tbody>
                  <TableRow>
                    {this.props.journalsite.map((item, i) => {
                      if (i === 0) {
                        return (
                          <TableCell className="line_itogo" key={i}>
                            <div className="pris">Присутствующих</div>
                          </TableCell>
                        );
                      }
                    })}
                    {this.props.journalsite.map((item, i) => {
                      if (i === 0) {
                        return this.props.present.map((item, i) => {
                          return (
                            <TableCell className="line_itogo_col" key={i}>
                              <div
                                className={
                                  localStorage.getItem("typeC") === "2"
                                    ? "pris_col_lecture"
                                    : "pris_col"
                                }
                              >
                                {item}
                              </div>
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
          {console.log(this.state.inputs)}
        </div>
      );
    }
  }
}
