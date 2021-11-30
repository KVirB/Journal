import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../app/App.css";
import Header from "../header/Header";
import actions from "redux-form/lib/actions";

// const classes = [
//   {
//     journalHeaderId: 15,
//     subGroup: 1,
//     classTopic: null,
//     discription: null,
//     dateOfLesson: new Date("2021-12-23"),
//     hoursCount: null,
//     typeClass: {
//       typeClassId: 1,
//       name: "Лабораторная работа",
//     },
//     marks: [
//       { studentId: 10, grade: 9, presence: true, discription: null },
//       { studentId: 11, grade: 8, presence: true, discription: null },
//       { studentId: 12, grade: 7, presence: true, discription: null },
//       { studentId: 13, grade: 1, presence: true, discription: null },
//       { studentId: 14, grade: 2, presence: true, discription: null },
//       { studentId: 15, grade: 3, presence: true, discription: null },
//     ],
//   },
// ];

// this.props.journalsite.map((m) =>
//   m.journalHeaders.map((item) => {
//     const classes = [
//       {
//         journalHeaderId: item.id,
//         subGroup: item.subGroup,
//         classTopic: item.classTopic,
//         discription: item.discription,
//         dateOfLesson: item.dateOfLesson,
//         hoursCount: item.hoursCount,
//         typeClass: {
//           typeClassId: item.typeClass.id,
//           name: item.typeClass.name,
//         },
//       },
//     ];
//     item.journalContents.map((content, i) => {
//       const students = [
//         {
//           studentId: content.student.id,
//           name: content.student.name,
//           surname: content.student.surname,
//           patronymic: content.student.patronymic,
//           grade: content.grade,
//           presence: content.presence,
//           discription: content.discription,
//         },
//       ];
//     });
//   })
// );

const classes = [
  {
    journalHeaderId: [],
    subGroup: [],
    classTopic: [],
    discription: [],
    dateOfLesson: [],
    hoursCount: [],
    typeClass: {
      typeClassId: [],
      name: [],
    },
    marks: [
      {
        studentId: [],
        grade: [],
        presence: [],
        discription: [],
      },
    ],
  },
];

const students = [
  {
    studentId: [],
    name: [],
    surname: [],
    patronymic: [],
    marks: [],
  },
];
for (let st of students) {
  for (let cl of classes) {
    st.marks.push(cl.marks.find((mrk) => mrk.student_id === st.student_id));
  }
}
console.log(students);
console.log(classes);
// const tabTitles = classes.map((cl) =>
//   cl.date_of_lesson.toLocaleDateString("ru-RU")
// );
// tabTitles.unshift("ФИО");

// console.log(tabTitles);
//const rows = students.map ()

export default class MarksTable extends React.Component {
  state = {
    classes: [
      // {
      //   journalHeaderId: [],
      //   subGroup: [],
      //   classTopic: [],
      //   discription: [],
      //   dateOfLesson: [],
      //   hoursCount: [],
      //   typeClass: {
      //     typeClassId: [],
      //     name: [],
      //   },
      //   marks: [
      //     {
      //       studentId: [],
      //       grade: [],
      //       presence: [],
      //       discription: [],
      //     },
      //   ],
      // },
    ],
    students: [
      // {
      //   studentId: [],
      //   name: [],
      //   surname: [],
      //   patronymic: [],
      //   marks: [],
      // },
    ],
  };
  students = [
    {
      id: 1,
      surname: "Седова",
      name: "Мария",
      patronymic: "Петровна",
      subGroup: 1,
    },
    {
      id: 2,
      surname: "Липская",
      name: "Анна",
      patronymic: "Григорьевна",
      subGroup: 1,
    },
    {
      id: 3,
      surname: "Цепото",
      name: "Виктор",
      patronymic: "Михайлович",
      subGroup: 1,
    },
  ];
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
              presence: true,
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
  //   render() {
  //     return (
  //       <div>
  //         {/* <Header /> */}
  //         <TableContainer sx={{ maxHeight: 440 }}>
  //           <Table
  //             stickyHeader
  //             aria-label="sticky table"
  //             style={{ maxWidth: 0, minWidth: 0 }}
  //           >
  //             <TableHead>
  //               <TableRow>
  //                 <TableCell className="line-cell line-up">
  //                   <div>ФИО</div>
  //                 </TableCell>
  //                 {/* {tabTitles.map((cl, i) => (
  //                   <TableCell className="line-cell line-up" key={i}>
  //                     <div className="vertical cellwidth">{cl}</div>
  //                   </TableCell>
  //                 ))} */}
  //                 {/* {this.props.dataLesson.map((m) => (
  //                     <TableCell className="line-cell line-up">
  //                       <div className="vertical cellwidth">{m.dateOfLesson}</div>
  //                     </TableCell>
  //                   ))} */}
  //               </TableRow>
  //             </TableHead>
  //             <TableBody>
  //               {students.map((student, i) => {
  //                 return (
  //                   <TableRow key={i}>
  //                     <TableCell className="line-cell" key={-1}>
  //                       {student.name}
  //                     </TableCell>
  //                     {student.marks.map((mark, i) => (
  //                       <TableCell className="line-cell" key={i}>
  //                         <div className="cellwidth">
  //                           <input
  //                             className="myInput"
  //                             type="text"
  //                             defaultValue={mark.grade}
  //                             onBlur={(e) => console.log(e.target.value)}
  //                             onFocus={(e) => e.target.select()}
  //                           />
  //                         </div>
  //                       </TableCell>
  //                     ))}
  //                   </TableRow>
  //                 );
  //               })}
  //             </TableBody>
  //           </Table>
  //         </TableContainer>
  //         {/* journalHeaders.journalContents.student */}
  //         {this.props.journalsite.map((m) => (
  //           <div>{m.id}</div>
  //         ))}
  //         {this.props.dataLesson.map((m) => (
  //           <div>{m.dateOfLesson}</div>
  //         ))}
  //       </div>
  //     );
  //   }
  // }

  render() {
    // let data = [
    //   {id: 1, grade: 5, student:{id:1, fio: 'fioq'}},
    //   {id: 2, grade: 9, student:{id:2, fio: 'fio2'}},
    //   {id: 1, grade: 8, student:{id:1, fio: 'fioq'}},
    //   {id: 2, grade: 9, student:{id:2, fio: 'fio2'}},
    //   ];
    //   data.sort(function (a, b) {
    //     if (a.student.id > b.student.id) {
    //       return 1;
    //     }
    //     if (a.student.id < b.student.id) {
    //       return -1;
    //     }
    //     // a должно быть равным b
    //     return 0;
    //   });
    //   let fios = [];
    //   data.forEach(function(item){
    //       fios.push(item.student.fio)
    //   });
    //   fios = fios.filter((v, i, a) => a.indexOf(v) === i);
    //   console.log(fios);
    //   data.forEach(el => console.log(el.id+':'+el.grade));
    return (
      <div className="all-content">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            style={{ maxWidth: 0, minWidth: 0 }}
            className="disp"
          >
            {/* {this.students.map(student => (
              <TableRow>
                <TableCell className="line-cell" key={-1}>
                  {student.name}
                </TableCell>
              </TableRow>
            ))} */}
            <TableRow>
              <TableCell height="75px" className="line-fio diagonal-line">
                <div className="dzs">Дата</div>
                <div className="fios">ФИО</div>
              </TableCell>
              {/* {this.props.journalsite[0].journalHeaders[0].journalContents.map(
                (content, i) => {
                  return (
                    <TableRow>
                      <TableCell height="20px" className="disp line-stud">
                        <div>{content.student.surname}</div>
                        <div className="csn">{content.student.name}</div>
                      </TableCell>
                    </TableRow>
                  );
                }
              )} */}
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
                    {item.journalContents.map((content, i) => (
                      <TableRow key={i}>
                        <TableCell className="line-grade">
                          <div className="cellwidth">
                            <input
                              className="myInput"
                              type="text"
                              defaultValue={content.grade}
                              onBlur={(e) =>
                                console.log(
                                  e.target.value + " : content-id=" + content.id
                                )
                              }
                              onFocus={(e) => e.target.select()}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
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

// {
//   props.marks.map((m) => (
//     <div>
//       {m.grade}
//       {m.student_id}
//       {m.journal_header_id}
//     </div>
//   ));
// }

// {
//   journal_header_id: 11,
//   date_of_lesson: new Date("2021-12-17"),
//   type_class: "лаб",
//   marks: [
//     { student_id: 10, grade: 2, presence: true },
//     { student_id: 11, grade: 3, presence: true },
//     { student_id: 12, grade: 4, presence: true },
//     { student_id: 13, grade: 5, presence: true },
//     { student_id: 14, grade: 6, presence: true },
//     { student_id: 15, grade: 7, presence: true },
//   ],
// },

// {
//   journal_header_id: 12,
//   date_of_lesson: new Date("2021-12-20"),
//   type_class: "лаб",
//   marks: [
//     { student_id: 10, grade: 9, presence: true },
//     { student_id: 11, grade: 8, presence: true },
//     { student_id: 12, grade: 7, presence: true },
//     { student_id: 13, grade: 1, presence: true },
//     { student_id: 14, grade: 2, presence: true },
//     { student_id: 15, grade: 3, presence: true },
//   ],
// },

// {
//   journal_header_id: 13,
//   date_of_lesson: new Date("2021-12-21"),
//   type_class: "лаб",
//   marks: [
//     { student_id: 10, grade: 9, presence: true },
//     { student_id: 11, grade: 8, presence: true },
//     { student_id: 12, grade: 7, presence: true },
//     { student_id: 13, grade: 1, presence: true },
//     { student_id: 14, grade: 2, presence: true },
//     { student_id: 15, grade: 3, presence: true },
//   ],
// },

// {
//   journal_header_id: 14,
//   date_of_lesson: new Date("2021-12-22"),
//   type_class: "лаб",
//   marks: [
//     { student_id: 10, grade: 9, presence: true },
//     { student_id: 11, grade: 8, presence: true },
//     { student_id: 12, grade: 7, presence: true },
//     { student_id: 13, grade: 1, presence: true },
//     { student_id: 14, grade: 2, presence: true },
//     { student_id: 15, grade: 3, presence: true },
//   ],
// },

// componentDidMount() {
//   const { journalsite, fio } = this.props;

//   journalsite.map((m) => {
//     return this.setState({
//       classes: [...this.state.classes, m.journalHeaders],
//     });
//   });

//   fio.map((item) => {
//     return this.setState({
//       students: [...this.state.students, item],
//     });
//   });
// }

// render() {
//   return (
//     <div>
//       <button onClick={() => console.log(this.state.classes)}>1</button>
//       <button onClick={() => console.log(this.state.students)}>2</button>
//     </div>
//   );
// }
// }
