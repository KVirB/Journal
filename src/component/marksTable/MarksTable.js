import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import "../app/App.css";

export default class MarksTable extends React.Component {
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
    grades: [
      { grade: "" },
      { grade: "1" },
      { grade: "2" },
      { grade: "3" },
      { grade: "4" },
      { grade: "5" },
      { grade: "6" },
      { grade: "7" },
      { grade: "8" },
      { grade: "9" },
      { grade: "10" },
    ],
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
      this.props.setBtnFalse();
      this.state.inputs = {};
    }
  }

  render() {
    {
      const { isLoading } = this.props;
      return (
        <div>
          <div
            className="headHr"
            hidden={
              localStorage.getItem("journalsite") !== null ? false : isLoading
            }
          />
          <div className="all-content">
            <TableContainer>
              <Table
                // stickyHeader
                // aria-label="sticky table"
                // style={{ maxWidth: 0, minWidth: 0 }}
                className="disp overwlov_for_table"
              >
                <tbody className="sticky_fio">
                  <TableRow>
                    {this.props.journalsite.map((m, i) => {
                      if (i === 0) {
                        if (this.props.disabled === true) {
                          this.state.inputs = {};
                        }
                        return (
                          <TableCell
                            className="line-fio diagonal-line"
                            width="220px"
                            key={i}
                          >
                            <label className="dzs wrap_selects">????????</label>
                            <label className="fios">??????</label>
                          </TableCell>
                        );
                      }
                    })}

                    {this.props.journalsite.map((item, i) =>
                      item.journalHeaders.map((header, i) => {
                        if (i === 0) {
                          return header.journalContents.map((content, i) => (
                            <TableCell
                              width="220px"
                              className="disp line-stud"
                              key={content.id}
                            >
                              <div className="surname">
                                {i +
                                  1 +
                                  ". " +
                                  content.student.surname +
                                  " " +
                                  content.student.name}
                              </div>
                              {/* <div className="csn surname">{}</div> */}
                            </TableCell>
                          ));
                        }
                      })
                    )}
                  </TableRow>
                </tbody>

                {this.props.journalsite.map((item, i) =>
                  item.journalHeaders.map((header, i) => {
                    return (
                      <tbody key={i}>
                        <TableRow>
                          <TableCell height="158.5px" className="line-data">
                            <div className="">
                              <p className="day_mount">
                                {header.dateOfLesson !== null
                                  ? header.dateOfLesson[2] < 10
                                    ? String(this.state.x) +
                                      header.dateOfLesson[2]
                                    : header.dateOfLesson[2]
                                  : "No date"}
                                .
                                {header.dateOfLesson !== null
                                  ? header.dateOfLesson[1] < 10
                                    ? String(this.state.x) +
                                      header.dateOfLesson[1]
                                    : header.dateOfLesson[1]
                                  : false}
                                <br />
                              </p>
                              <p className="year">
                                {header.dateOfLesson !== null
                                  ? header.dateOfLesson[0] < 10
                                    ? String(this.state.x) +
                                      header.dateOfLesson[0]
                                    : header.dateOfLesson[0]
                                  : false}
                              </p>
                              <p className="day_mount">
                                {this.state.lessonHours[header.hoursCount]}
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                        {header.journalContents.map((content, j) => {
                          {
                            let presence = content.presence;
                          }
                          return (
                            <TableRow key={j}>
                              <TableCell
                                className="line-grade"
                                height="37px"
                                width={
                                  localStorage.getItem("typeC") === "????????????"
                                    ? "65px"
                                    : "47px"
                                }
                              >
                                <div
                                  className={
                                    localStorage.getItem("typeC") ===
                                    "???????????????????????? ????????????"
                                      ? "std_cell_lab"
                                      : "std_cell"
                                  }
                                >
                                  <select
                                    key={content.id}
                                    className="sel_grade myInput"
                                    name="select"
                                    disabled={
                                      content.presence === false
                                        ? true
                                        : false || content.presence === null
                                        ? true
                                        : false
                                    }
                                    hidden={
                                      localStorage.getItem("typeC") === "????????????" //????????????
                                        ? true
                                        : localStorage.getItem("typeC") ===
                                          "???????????????????????? ????????????" //????????????????????????
                                        ? true
                                        : localStorage.getItem("typeC") ===
                                          "???????????????????????? ????????????" //????????????????????????
                                        ? false
                                        : localStorage.getItem("typeC") ===
                                          "??????????????" // ??????????????
                                        ? false
                                        : 0
                                    }
                                    defaultValue={content.grade}
                                    onChange={(e) => {
                                      (async () => {
                                        await this.props.setJournalSiteMark(
                                          header.id,
                                          content.id,
                                          e.target.value
                                        );
                                        localStorage.setItem(
                                          "typeClassId",
                                          content.id
                                        );
                                        this.props.setBtnFalse();
                                        if (typeof Storage !== "undefined") {
                                          localStorage.setItem(
                                            "journalsite",
                                            JSON.stringify(
                                              this.props.journalsite
                                            )
                                          );
                                          localStorage.setItem(
                                            "typeClassId",
                                            header.typeClass.name
                                          );

                                          localStorage.setItem(
                                            "groupId",
                                            item.group.name
                                          );
                                          localStorage.setItem(
                                            "disciplineName",
                                            item.discipline.name
                                          );
                                          localStorage.setItem(
                                            "subgroupId",
                                            header.subGroup === 0
                                              ? "??????"
                                              : header.subGroup
                                          );
                                        }
                                      })();
                                    }}
                                  >
                                    {content.presence === false ? (
                                      <option hidden></option>
                                    ) : (
                                      this.state.grades.map((gr) => (
                                        <option
                                          key={gr.grade}
                                          hidden={
                                            gr.grade === "" ? true : false
                                          }
                                        >
                                          {gr.grade}
                                        </option>
                                      ))
                                    )}
                                  </select>
                                  <div className="checkbox">
                                    <input
                                      className="top"
                                      type="checkbox"
                                      name={"c" + content.id}
                                      id={"c" + content.id}
                                      // defaultChecked={content.presence}
                                      defaultChecked={content.presence}
                                      onChange={() => {
                                        (async () => {
                                          // await this.props.clearPresent();
                                          await this.props.toggleJournalSitePresence(
                                            header.id,
                                            content.id,
                                            content.grade
                                          );
                                          // this.props.setPresent();
                                          this.props.setBtnFalse();
                                          if (typeof Storage !== "undefined") {
                                            localStorage.setItem(
                                              "journalsite",
                                              JSON.stringify(
                                                this.props.journalsite
                                              )
                                            );
                                            localStorage.setItem(
                                              "typeClassId",
                                              header.typeClass.name
                                            );
                                            localStorage.setItem(
                                              "groupId",
                                              item.group.name
                                            );
                                            localStorage.setItem(
                                              "disciplineName",
                                              item.discipline.name
                                            );
                                            localStorage.setItem(
                                              "subgroupId",
                                              header.subGroup === 0
                                                ? "??????"
                                                : header.subGroup
                                            );
                                          }
                                        })();
                                      }}
                                    />
                                    <label htmlFor={"c" + content.id}></label>
                                  </div>
                                  <div
                                    className={
                                      localStorage.getItem("typeC") !==
                                      "???????????????????????? ????????????"
                                        ? "lateness"
                                        : ""
                                    }
                                  >
                                    <input
                                      disabled={
                                        content.presence === false
                                          ? true
                                          : false || content.presence === null
                                          ? true
                                          : false
                                      }
                                      value={
                                        content.presence === false
                                          ? (this.state.inputs[content.id] = "")
                                          : content.lateness === null
                                          ? undefined
                                          : content.lateness
                                        // this.state.inputs[content.id]
                                      }
                                      type="number"
                                      onKeyPress={this.handleKeyPress}
                                      // defaultValue={content.lateness}
                                      onChange={(e) => {
                                        (async () => {
                                          this.getInputValue(e, content.id);
                                          this.props.setBtnFalse();
                                          await this.props.setJournalSiteLateness(
                                            header.id,
                                            content.id,
                                            e.target.value
                                          );
                                          if (typeof Storage !== "undefined") {
                                            localStorage.setItem(
                                              "journalsite",
                                              JSON.stringify(
                                                this.props.journalsite
                                              )
                                            );
                                          }
                                        })();
                                      }}
                                      className="sel_grade myInputMin"
                                      hidden={
                                        localStorage.getItem("typeC") ===
                                        "????????????"
                                          ? false
                                          : true
                                      }
                                    />
                                    <label
                                      hidden={
                                        localStorage.getItem("typeC") ===
                                        "????????????"
                                          ? false
                                          : true
                                      }
                                    >
                                      ??????.
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
                )}
              </Table>
              {/* <Table
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
                            <div className="pris">????????????????????????????</div>
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
                                  localStorage.getItem("typeC") === "????????????"
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
              </Table> */}
            </TableContainer>
          </div>
          <div
            className="headHrDown"
            hidden={
              localStorage.getItem("journalsite") !== null ? false : isLoading
            }
          />
        </div>
      );
    }
  }
}
