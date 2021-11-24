import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../app/App.css";
import Header from "../header/Header";

const classes = [
  {
    journal_header_id: 11,
    date_of_lesson: new Date("2021-12-17"),
    type_class: "лаб",
    marks: [
      { student_id: 10, grade: 2, presence: true },
      { student_id: 11, grade: 3, presence: true },
      { student_id: 12, grade: 4, presence: true },
      { student_id: 13, grade: 5, presence: true },
      { student_id: 14, grade: 6, presence: true },
      { student_id: 15, grade: 7, presence: true },
    ],
  },

  {
    journal_header_id: 12,
    date_of_lesson: new Date("2021-12-20"),
    type_class: "лаб",
    marks: [
      { student_id: 10, grade: 9, presence: true },
      { student_id: 11, grade: 8, presence: true },
      { student_id: 12, grade: 7, presence: true },
      { student_id: 13, grade: 1, presence: true },
      { student_id: 14, grade: 2, presence: true },
      { student_id: 15, grade: 3, presence: true },
    ],
  },

  {
    journal_header_id: 13,
    date_of_lesson: new Date("2021-12-21"),
    type_class: "лаб",
    marks: [
      { student_id: 10, grade: 9, presence: true },
      { student_id: 11, grade: 8, presence: true },
      { student_id: 12, grade: 7, presence: true },
      { student_id: 13, grade: 1, presence: true },
      { student_id: 14, grade: 2, presence: true },
      { student_id: 15, grade: 3, presence: true },
    ],
  },

  {
    journal_header_id: 14,
    date_of_lesson: new Date("2021-12-22"),
    type_class: "лаб",
    marks: [
      { student_id: 10, grade: 9, presence: true },
      { student_id: 11, grade: 8, presence: true },
      { student_id: 12, grade: 7, presence: true },
      { student_id: 13, grade: 1, presence: true },
      { student_id: 14, grade: 2, presence: true },
      { student_id: 15, grade: 3, presence: true },
    ],
  },

  {
    journal_header_id: 15,
    date_of_lesson: new Date("2021-12-23"),
    type_class: "лаб",
    marks: [
      { student_id: 10, grade: 9, presence: true },
      { student_id: 11, grade: 8, presence: true },
      { student_id: 12, grade: 7, presence: true },
      { student_id: 13, grade: 1, presence: true },
      { student_id: 14, grade: 2, presence: true },
      { student_id: 15, grade: 3, presence: true },
    ],
  },
];

const students = [
  { student_id: 10, fio: "Ибрагим", marks: [] },
  { student_id: 11, fio: "Петр", marks: [] },
  { student_id: 12, fio: "Степан", marks: [] },
  { student_id: 13, fio: "Моника", marks: [] },
  { student_id: 14, fio: "Ольга", marks: [] },
  { student_id: 15, fio: "Лев", marks: [] },
];

for (let st of students) {
  for (let cl of classes) {
    st.marks.push(cl.marks.find((mrk) => mrk.student_id === st.student_id));
  }
}

console.log(students);
console.log(classes);
const tabTitles = classes.map((cl) =>
  cl.date_of_lesson.toLocaleDateString("ru-RU")
);
tabTitles.unshift("ФИО");

console.log(tabTitles);
//const rows = students.map ()
export default class MarksTable extends React.Component {
  state = [
    {
        id: 1,
        discipline: {
            id: 1,
            name: "Автоматизация информационного обеспечения",
            idFromSource: 3
        },
        teacher: {
            id: 1,
            surname: "Абазовская",
            name: "Наталья",
            patronymic: "Викторовна",
            idFromSource: 3
        },
        group: {
            id: 1,
            name: "Дзк-19"
        },
        streamId: null,
        journalHeaders: [
            {
                id: 1,
                subGroup: 1,
                classTopic: null,
                discription: null,
                dateOfLesson: "15.12.2021",
                hoursCount: null,
                typeClass: {
                    id: 1,
                    name: "Лабораторная работа"
                },
                journalContents: [
                    {
                        id: 1,
                        presence: true,
                        grade: 5,
                        discription: null,
                        student: {
                            id: 1,
                            surname: "Седова",
                            name: "Мария",
                            patronymic: "Петровна",
                            subGroup: 1
                    }
                    },
                    {	
                        id: 2,
                        presence: false,
                        grade: 3,
                        discription: null,
                          student: {
                          id: 2,
                          surname: "Липская",
                          name: "Анна",
                          patronymic: "Григорьевна",
                          subGroup: 1
                    }
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
                            subGroup: 1
                    }
                    }
                ]
            },
            {
              id: 2,
              subGroup: 1,
              classTopic: null,
              discription: null,
              dateOfLesson: "21.11.2021",
              hoursCount: null,
              typeClass: {
                  id: 1,
                  name: "Лабораторная работа"
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
                          subGroup: 1
                  }
                  },
                  {	
                      id: 2,
                      presence: false,
                      grade: 6,
                      discription: null,
                        student: {
                        id: 2,
                        surname: "Липская",
                        name: "Анна",
                        patronymic: "Григорьевна",
                        subGroup: 1
                  }
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
                          subGroup: 1
                  }
                  }
              ]
          }
        ]
    }
]

  componentDidMount() {
    console.log(this.props.journalsite + "ureureorieorie");
  }

  getData() {
    // () => this.props.dataLesson.map((m) => <div>{m}</div>)
    const { dataLesson } = this.props;

    console.log(dataLesson);
    return dataLesson.map((item) => {
      return <div key={item.id}>{item.dateOfLesson}</div>;
    });
  }
    render() {
      return (
        <div>
          {/* <Header /> */}
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{ maxWidth: 0, minWidth: 0 }}
            >
              <TableHead>
                <TableRow>
                  {/* {tabTitles.map((cl, i) => (
                    <TableCell className="line-cell line-up" key={i}>
                      <div className="vertical cellwidth">{cl}</div>
                    </TableCell>
                  ))} */}
                  <TableCell className="line-cell line-up">
                    <div>ФИО</div>
                  </TableCell>
                  {/* {this.getData().map((cl, i) => (
                    <TableCell className="line-cell line-up" key={i}>
                      <div className="vertical cellwidth">{cl}</div>
                    </TableCell>
                  ))} */}
                  {this.props.dataLesson.map((m) => (
                    <TableCell className="line-cell line-up">
                      <div className="vertical cellwidth">{m.dateOfLesson}</div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell className="line-cell" key={-1}>
                        {student.fio}
                      </TableCell>
                      {student.marks.map((mark, i) => (
                        <TableCell className="line-cell" key={i}>
                          <div className="cellwidth">
                            <input
                              className="myInput"
                              type="text"
                              defaultValue={mark.grade}
                              onBlur={(e) => console.log(e.target.value)}
                              onFocus={(e) => e.target.select()}
                            />
                          </div>
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* journalHeaders.journalContents.student */}
          {this.props.journalsite.map((m) => (
            <div>{m.id}</div>
          ))}
          {this.props.dataLesson.map((m) => (
            <div>{m.dateOfLesson}</div>
          ))}
        </div>
      );
    }
  }
//   render() {
//     return (
//       <div>
//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table
//             stickyHeader
//             aria-label="sticky table"
//             style={{ maxWidth: 0, minWidth: 0 }}
//           >
//                 <TableCell className="line-cell line-up">
//                   <div>ФИО</div>
//                 </TableCell>
              
//                 {/* {this.state.map((m) => 
//                   m.journalHeaders.map((item) => {
//                     return(
//                       <TableCell className="line-cell line-up">
//                         <div className="vertical cellwidth">{item.dateOfLesson}</div>
//                       </TableCell>
//                     )
//                   })
//               )} */}
//               { this.state.map((m) => 
//                    m.journalHeaders.map((item) => {
//                 return  item.journalContents.map((content,i) => {
//                     return(
//                       <TableRow>
//                         <TableCell className="line-cell">
//                           {content.student.name}
//                         </TableCell>
//                         <TableCell className="line-cell">
//                           <div className="cellwidth">
//                             <input
//                               className="myInput"
//                               type="text"
//                               defaultValue={content.grade}
//                               onBlur={(e) => console.log(e.target.value)}
//                               onFocus={(e) => e.target.select()}
//                             />
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     )
//                   })
//                   })
//               )}
//           </Table>
//         </TableContainer>
//       </div>
//     );
//   }
// }

// {
//   props.marks.map((m) => (
//     <div>
//       {m.grade}
//       {m.student_id}
//       {m.journal_header_id}
//     </div>
//   ));
// }
