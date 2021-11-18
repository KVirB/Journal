import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import './App.css';

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
      { student_id: 15, grade: 7, presence: true }
    ]
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
      { student_id: 15, grade: 3, presence: true }
    ]
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
      { student_id: 15, grade: 3, presence: true }
    ]
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
      { student_id: 15, grade: 3, presence: true }
    ]
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
      { student_id: 15, grade: 3, presence: true }
    ]
  }
];

const students = [
  { student_id: 10, fio: "Ибрагим", marks: [] },
  { student_id: 11, fio: "Петр", marks: [] },
  { student_id: 12, fio: "Степан", marks: [] },
  { student_id: 13, fio: "Моника", marks: [] },
  { student_id: 14, fio: "Ольга", marks: [] },
  { student_id: 15, fio: "Лев", marks: [] }
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

const App = (props) => {
  return (
    <div>
      <hr/>
      <TableContainer sx={{ maxHeight: 440 }}>
        <table stickyHeader aria-label="sticky table" style={{ maxWidth: 0, minWidth: 0}}>
          <TableHead>
            <tr>
              {tabTitles.map((cl, i) => (
                <td key={i}>
                  <div  class="vertical cellwidth">
                    {cl}
                  </div>
                </td>
              ))}
            </tr>
          </TableHead>
          <TableBody>
            {students.map((student, i) => {
              return (
                <tr key={i}>
                  <td key={-1}>{student.fio}</td>
                  {student.marks.map((mark, i) => (
                    <td key={i} >
                      <div class="cellwidth">
                      <input
                        class="myInput"
                        type="text"
                        defaultValue={mark.grade}
                        onFocus={e => e.target.select()}
                      />
                      </div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </TableBody>
        </table>
      </TableContainer>
      <hr/>
     </div> 
  );
}
export default App;