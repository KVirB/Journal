import { Link } from "react-router-dom";

export default function TeacherCard({ teacher, getTeacherProfileThunk }) {
  return (
    <div className="teacher_card_info">
      <div className="teacher_card_info_upp_block">
        <div className="teacher_card_info_name">
          {teacher.surname + " " + teacher.name + " " + teacher.patronymic}
        </div>
        <div className="teacher_card_info_department">
          Кафедра: «
          {teacher.department !== null
            ? teacher.department.displayName
            : "Нет данных"}
          »
        </div>
      </div>
      <div className="teacher_card_info_link_block">
        <Link
          className="teacher_card_info_link"
          to="/teacher_profile"
          //   onClick={() => localStorage.setItem("idSourse", teacher.idFromSource)}
          onClick={() => {
            localStorage.setItem("idSourse", teacher.idFromSource);
            getTeacherProfileThunk(teacher.idFromSource);
            console.log(teacher.idFromSource + "ONCLICK");
          }}
        >
          Журналы преподавателя
        </Link>
      </div>
    </div>
  );
}
