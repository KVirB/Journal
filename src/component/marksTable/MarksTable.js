import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import "../app/App.css";
import { reduxForm, Field } from "redux-form";

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
  constructor(props) {
    super(props);
    this.state = {
      financialGoal: "",
    };
  }

  handleChange(evt) {
    const financialGoal = evt.target.validity.valid
      ? evt.target.value
      : this.state.financialGoal;

    this.setState({ financialGoal });
  }
  render() {
    return (
      <div className="all-content">
        {console.log(this.props.journalsite + "jopa")}
        <TableContainer sx={{ maxHeight: 440 }}>
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
                    <div>
                      <TableCell
                        height="75px"
                        className="line-fio diagonal-line"
                        width="153.55px"
                      >
                        <div className="dzs">Дата</div>
                        <div className="fios">ФИО</div>
                      </TableCell>
                    </div>
                  );
              })}
              {this.props.journalsite.map((m) =>
                m.journalHeaders.map((item, i) => {
                  if (i === 0) {
                    return item.journalContents.map((content) => (
                      <TableRow>
                        <TableCell
                          height="20px"
                          width="153.55px"
                          className="disp line-stud"
                        >
                          <div>{content.student.surname}</div>
                          <div className="csn">{content.student.name}</div>
                        </TableCell>
                      </TableRow>
                    ));
                  }
                })
              )}
            </TableRow>
            {this.props.journalsite.map((m) =>
              m.journalHeaders.map((item) => {
                return (
                  <div>
                    <TableCell height="75px" className="line-data">
                      <div className="vertical cellwidth">
                        {item.dateOfLesson}
                      </div>
                    </TableCell>
                    {item.journalContents.map((content, i) => {
                      if (content.presence === null) {
                        return (
                          <TableRow key={i}>
                            <TableCell className="line-grade">
                              <div className="cellwidth disp">
                                <input
                                  className="myInput"
                                  type="number"
                                  defaultValue={content.grade}
                                  onBlur={(e) =>
                                    console.log(
                                      e.target.value +
                                        " : content-id=" +
                                        content.id
                                    )
                                  }
                                  onFocus={(e) => e.target.select()}
                                />
                                <input type="checkbox" defaultChecked={true} />
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      } else {
                        return (
                          <TableRow key={i}>
                            <TableCell className="line-grade">
                              <div className="cellwidth disp">
                                <input
                                  className="myInput"
                                  type="number"
                                  defaultValue={content.grade}
                                  onBlur={(e) =>
                                    console.log(
                                      e.target.value +
                                        " : content-id=" +
                                        content.id
                                    )
                                  }
                                  onFocus={(e) => e.target.select()}
                                />
                                <input
                                  type="checkbox"
                                  defaultChecked={content.presence}
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    })}
                  </div>
                );
              })
            )}
            <div>
              {/* <TableCell height="71.58px" className="line-data">
                <div className="cellwidth">
                  <input
                    className="myInput"
                    type="text"
                    defaultValue="Vvedi datu"
                    onBlur={(e) => console.log(e.target.value)}
                    onFocus={(e) => e.target.select()}
                  />
                </div>
              </TableCell> */}
              {/* {this.sites[0].journalHeaders[0].journalContents.map(
                (content, i) => (
                  <div>
                    <TableRow>
                      <TableCell className="line-grade">
                        <div className="cellwidth">
                          <input
                            className="myInput"
                            type="text"
                            onBlur={(e) =>
                              console.log(
                                e.target.value +
                                  "student.id=" +
                                  content.student.id
                              )
                            }
                            onFocus={(e) => e.target.select()}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  </div>
                )
              )} */}
            </div>
          </Table>
        </TableContainer>
        {this.props.journalsite.map((m) =>
          m.journalHeaders.map((item) => <div>{item.id}</div>)
        )}
      </div>
    );
  }
}
