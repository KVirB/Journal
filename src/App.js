import * as React from "react";
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

class App extends React.Component {
  state = {
    discipline:[]
  };
  
  onDisciplineSelected = (e) => {
    let { value } = e.target;
    this.setState({
      discipline: value,
    });
  };
  
  render(){
    const {onDisciplineSelected} = this;
  return (
    <div>
      {console.log(this.state.discipline)}
      <div className="journal-name">
        Электронный журнал преподавателя
      </div>
      <div className="display-flex">
        <div className="discipline-name">  
          Название дисциплины:
        </div>
        <select className="discipline-select" name="discipline" title="Выберите дисциплину" onChange={onDisciplineSelected}>
              <option value="" selected hidden>Выберите дисциплину</option> 
              <option className="lang__items">
                Физика
              </option>
              <option className="lang__items">
                Высшая математика
              </option>
        </select>
        <div className="special-name">
          Специальность:
        </div>
        <select className="special-select" name="special" title="Выберите специальность">
              <option value="" selected hidden>
                Выберите специальность
              </option> 
              <option className="lang__items">
                Дизайн
              </option>
              <option className="lang__items">
                Технология машиностроения
              </option>
        </select>
      </div>
      <div className="display-flex">
        <div className="course-name">  
            Курс:
        </div>
        <input className="course-input"></input>
        <div className="group-name">
          Группа:
        </div>
        <select className="group-select" name="select" title="Выберите группу">
              <option value="" selected hidden>
                Выберите группу
              </option> 
              <option className="lang__items">
                Ит-5
              </option>
              <option className="lang__items">
                АЭ-21
              </option>
        </select>
        <div className="view-name">
          Вид занятий:
        </div>
        <input className="view-input"></input>
      </div>
      <hr/>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" style={{ maxWidth: 0, minWidth: 0}}>
          <TableHead>
            <TableRow>
              {tabTitles.map((cl, i) => (
                <TableCell className="line-cell line-up" key={i}>
                  <div  className="vertical cellwidth">
                    {cl}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="line-cell" key={-1}>{student.fio}</TableCell>
                  {student.marks.map((mark, i) => (
                    <TableCell className="line-cell" key={i} >
                      <div className="cellwidth">
                      <input
                        className="myInput"
                        type="text"
                        defaultValue={mark.grade}
                        onFocus={e => e.target.select()}
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
      <hr/>
     </div> 
  );
}};
export default App;