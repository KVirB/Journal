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
  sites = [
    {
      id: 1,
      discipline: {
        id: 1,
        name: "Автоматизация информационного обеспечения",
        idFromSource: 3,
      },
      teacher: {
        id: 1,
        surname: "Абазовская",
        name: "Наталья",
        patronymic: "Викторовна",
        idFromSource: 3,
      },
      group: {
        id: 1,
        name: "Дзк-19",
      },
      streamId: null,
      journalHeaders: [
        {
          id: 1,
          subGroup: 1,
          classTopic: null,
          discription: null,
          dateOfLesson: "10.12.2021",
          hoursCount: null,
          typeClass: {
            id: 1,
            name: "Лабораторная работа",
          },
          journalContents: [
            {
              id: 1,
              presence: true,
              grade: 6,
              discription: null,
              student: {
                id: 1,
                surname: "Седова",
                name: "Мария",
                patronymic: "Петровна",
                subGroup: 1,
              },
            },
            {
              id: 2,
              presence: false,
              grade: 8,
              discription: null,
              student: {
                id: 2,
                surname: "Липская",
                name: "Анна",
                patronymic: "Григорьевна",
                subGroup: 1,
              },
            },
            {
              id: 3,
              presence: true,
              grade: 7,
              discription: null,
              student: {
                id: 3,
                surname: "Цепото",
                name: "Виктор",
                patronymic: "Михайлович",
                subGroup: 1,
              },
            },
          ],
        },
        {
          id: 2,
          subGroup: 1,
          classTopic: null,
          discription: null,
          dateOfLesson: "11.12.2021",
          hoursCount: null,
          typeClass: {
            id: 1,
            name: "Лабораторная работа",
          },
          journalContents: [
            {
              id: 1,
              presence: true,
              grade: 4,
              discription: null,
              student: {
                id: 1,
                surname: "Седова",
                name: "Мария",
                patronymic: "Петровна",
                subGroup: 1,
              },
            },
            {
              id: 2,
              presence: false,
              grade: 2,
              discription: null,
              student: {
                id: 2,
                surname: "Липская",
                name: "Анна",
                patronymic: "Григорьевна",
                subGroup: 1,
              },
            },
            {
              id: 3,
              presence: true,
              grade: 9,
              discription: null,
              student: {
                id: 3,
                surname: "Цепото",
                name: "Виктор",
                patronymic: "Михайлович",
                subGroup: 1,
              },
            },
          ],
        },
        {
          id: 3,
          subGroup: 1,
          classTopic: null,
          discription: null,
          dateOfLesson: "12.12.2021",
          hoursCount: null,
          typeClass: {
            id: 1,
            name: "Лабораторная работа",
          },
          journalContents: [
            {
              id: 1,
              presence: true,
              grade: 8,
              discription: null,
              student: {
                id: 1,
                surname: "Седова",
                name: "Мария",
                patronymic: "Петровна",
                subGroup: 1,
              },
            },
            {
              id: 2,
              presence: false,
              grade: 5,
              discription: null,
              student: {
                id: 2,
                surname: "Липская",
                name: "Анна",
                patronymic: "Григорьевна",
                subGroup: 1,
              },
            },
            {
              id: 3,
              presence: true,
              grade: 10,
              discription: null,
              student: {
                id: 3,
                surname: "Цепото",
                name: "Виктор",
                patronymic: "Михайлович",
                subGroup: 1,
              },
            },
          ],
        },
        {
          id: 4,
          subGroup: 1,
          classTopic: null,
          discription: null,
          dateOfLesson: "13.12.2021",
          hoursCount: null,
          typeClass: {
            id: 1,
            name: "Лабораторная работа",
          },
          journalContents: [
            {
              id: 1,
              presence: null,
              grade: 8,
              discription: null,
              student: {
                id: 1,
                surname: "Седова",
                name: "Мария",
                patronymic: "Петровна",
                subGroup: 1,
              },
            },
            {
              id: 2,
              presence: null,
              grade: 7,
              discription: null,
              student: {
                id: 2,
                surname: "Липская",
                name: "Анна",
                patronymic: "Григорьевна",
                subGroup: 1,
              },
            },
            {
              id: 3,
              presence: null,
              grade: 6,
              discription: null,
              student: {
                id: 3,
                surname: "Цепото",
                name: "Виктор",
                patronymic: "Михайлович",
                subGroup: 1,
              },
            },
          ],
        },
      ],
    },
  ];
  state = {
    presence: null,
    date: null,
  };
  getCheckBox = (e) => {
    const { value } = e.target;
    this.setState({
      presence: value,
    });
  };
  changeInputHandler = (e) => {
    // console.log("name :", e.target.name);
    // console.log(e.target.checked);
    this.setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    window.onbeforeunload = function (e) {
      alert("yeees!");
    };
    const { getCheckBox, getDateBox } = this;
    return (
      <div className="all-content">
        {/* {console.log(
          this.state.presence +
            "givno-----------------------------------------------------------------------------"
        )} */}
        <TableContainer sx={{ maxHeight: 760 }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            style={{ maxWidth: 0, minWidth: 0 }}
            className="disp"
          >
            <TableRow>
              {this.props.journalsite.map((m, i) => {
                if (i === 0)
                  return (
                    <TableCell
                      height="75px"
                      className="line-fio diagonal-line"
                      width="153.55px"
                      key={m.id}
                    >
                      <div className="dzs">Дата</div>
                      <div className="fios">ФИО</div>
                    </TableCell>
                  );
              })}
              {this.props.journalsite.map((m) =>
                m.journalHeaders.map((item, i) => {
                  if (i === 0) {
                    return item.journalContents.map((content) => (
                      <TableCell
                        height="20px"
                        width="153.55px"
                        className="disp line-stud"
                        key={content.id}
                      >
                        <div>{content.student.surname}</div>
                        <div className="csn">{content.student.name}</div>
                      </TableCell>
                    ));
                  }
                })
              )}
            </TableRow>
            {this.props.journalsite.map((m) =>
              m.journalHeaders.map((item, i) => {
                return (
                  <tbody key={i}>
                    <input
                      type="submit"
                      value="HEDER"
                      onClick={() => {
                        this.props.setJournalHeader();
                        setTimeout(() => {
                          let header = this.props.journalHeader;
                          this.props.getJournalHeaderThunk(header);
                          console.log(this.props.journalHeader + "наш хидер");
                          this.props.clearJournalHeader();
                        }, 200);
                        // console.log(this.props.journalsite + "наш сит");
                      }}
                    />
                    <TableRow>
                      <TableCell height="75px" className="line-data">
                        <div className="vertical cellwidth">
                          {item.dateOfLesson}
                        </div>
                      </TableCell>
                    </TableRow>
                    {item.journalContents.map((content, i) => {
                      // if (content.presence === null) {
                      //   return (
                      //     <TableRow key={i}>
                      //       <TableCell className="line-grade">
                      //         <div className="cellwidth disp">
                      //           <input
                      //             className="myInput"
                      //             type="text"
                      //             maxLength="2"
                      //             defaultValue={content.grade}
                      //             onBlur={(e) =>
                      //               console.log(
                      //                 e.target.value +
                      //                   " : content-id=" +
                      //                   content.id
                      //               )
                      //             }
                      //             onFocus={(e) => e.target.select()}
                      //           />
                      //           <input
                      //             type="checkbox"
                      //             defaultChecked={true}
                      //             onChange={getCheckBox}
                      //           />
                      //         </div>
                      //       </TableCell>
                      //     </TableRow>
                      //   );
                      // } else {
                      return (
                        <TableRow key={i}>
                          {/* {console.log(content.grade + "наш контент")} */}
                          <TableCell className="line-grade" height="20px">
                            <div className="cellwidth disp">
                              {content.presence === true && (
                                <select
                                  key={content.id}
                                  className="sel_grade myInput"
                                  name="select"
                                  defaultValue={content.grade}
                                  onChange={(e) => {
                                    // console.log(item.id + "данные пришли");
                                    this.props.setJournalSiteMark(
                                      item.id,
                                      content.id,
                                      e.target.value
                                    );
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
                              <input
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                name="check"
                                defaultChecked={content.presence}
                                onChange={() => {
                                  this.props.toggleJournalSitePresence(
                                    item.id,
                                    content.id
                                  );
                                  // console.log(
                                  //   this.props.journalHeader + "наш хидер"
                                  // );
                                }}
                              ></input>
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
        </TableContainer>
      </div>
    );
  }
}
