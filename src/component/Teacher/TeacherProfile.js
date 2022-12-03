import * as React from "react";
import "../app/App.css";
import BurgerButtonMain from "../header/BurgerButtonMain";
import Header from "../header/headerContainer";
import { ReactComponent as TeacherPicture } from "../../teacher_pic.svg";
import { ReactComponent as TeacherPicture480 } from "../../photo_480.svg";
import Select from "react-select";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import TeacherPhoto from "./TeacherPhoto";

export default class TeacherProfile extends React.Component {
  state = {
    date: "",
    mobile: "",
    discipline: "",
    group: "",
    type: "",
    subgroup: "",
  };

  componentDidMount() {
    if (localStorage.getItem("user") !== null) {
      if (localStorage.getItem("idSourse") !== null) {
        this.props.getTeacherProfileThunk(localStorage.getItem("idSourse"));
      } else {
        this.props.getTeacherProfileThunk(
          JSON.parse(localStorage.getItem("user")).id_from_source
        );
      }
    }
    if (localStorage.getItem("user") !== null) {
      this.props.getTeacherIconThunk(
        JSON.parse(localStorage.getItem("user")).id_from_source
      );
    }
  }

  getInputValue = (e) => {
    this.setState({
      mobile: e.target.value,
    });
  };

  render() {
    var date = new Date();
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    };

    return (
      <div className="disp" key={this.state.key}>
        {console.log(this.state.key + "key")}
        <div className="burger_combine">
          <BurgerButtonMain></BurgerButtonMain>
        </div>
        <div className="main_teacher_profile">
          <div className="disp header_main_teacher_profile">
            <div className="button_exit_teacher_profile_block">
              <button
                className="button_exit_teacher_profile"
                onClick={() => {
                  window.history.back();
                }}
              >
                Назад
              </button>
            </div>
            <div className="data_teacher_profile_block">
              <p className="p_today">Сегодня</p>
              <p className="p_data">{date.toLocaleString("ru", options)}</p>
            </div>
          </div>
          <div className="disp all_blocks_teacher_profile">
            <div className="left_block_teacher_profile">
              <div className="teacher_block disp">
                <div className="teacher_photo_block disp">
                  <TeacherPhoto
                    teacherProf={this.props.teacherProf}
                    getTeacherProfileThunk={this.props.getTeacherProfileThunk}
                    setProfileImageThunk={this.props.setProfileImageThunk}
                  ></TeacherPhoto>
                </div>
                <div className="block_name_with_info">
                  {console.log(this.props.teacherProf + "name")}
                  {this.props.teacherProf.map((teacher) => {
                    return (
                      <input
                        key={teacher.id}
                        className="teacher_name"
                        defaultValue={
                          teacher.surname +
                          " " +
                          teacher.name +
                          " " +
                          teacher.patronymic
                        }
                      ></input>
                    );
                  })}
                  <div className="teacher_info">
                    <textarea
                      className="input_teacher_info"
                      defaultValue="Разнообразный и богатый опыт говорит нам, что начало повседневной работы по формированию позиции способствует подготовке и реализации как самодостаточных, так и внешне зависимых концептуальных решений. Также как существующая теория предопределяет высокую востребованность своевременного выполнения сверхзадачи. Есть над чем задуматься : реплицированные с зарубежных источников, современные исследования будут заблокированы в рамках."
                    ></textarea>
                    <button className="button_teacher_info_save">
                      Сохранить
                    </button>
                    <button className="button_teacher_info_unsave">
                      Отмена
                    </button>
                  </div>
                </div>
              </div>
              <div className="contacts_block">
                <div className="block_name_contacts">
                  <p className="name_contacts">Контакты преподавателя</p>
                </div>
                <div className="block_of_contacts disp">
                  {/* <div className="disp"> */}
                  <div>
                    <p className="department_name">Кафедра:</p>
                    {this.props.teacherProf.map((teacher) => {
                      return (
                        <p className="block_of_department_name">
                          {teacher.department !== null
                            ? teacher.department.displayName
                            : "Нет данных"}
                        </p>
                      );
                    })}
                  </div>
                  <div>
                    <p className="email_name">Электронная почта:</p>
                    <p className="block_of_email_name">E-mail</p>
                  </div>
                  {/* </div> */}
                  {/* <div className="disp"> */}
                  <div>
                    <p className="interior_tel">Внутр.тел.:</p>
                    <InputMask
                      defaultValue={"99-99"}
                      className="block_of_interior_tel"
                      mask="99-99"
                      maskChar={null}
                      onChange={(e) => {
                        this.getInputValue(e);
                      }}
                    />
                  </div>
                  <div>
                    <p className="mobile_tel">Телефон:</p>
                    <InputMask
                      defaultValue={"+375-(99)-999-99-99"}
                      className="block_of_mobile_tel"
                      mask="+375-(99)-999-99-99"
                      maskChar={null}
                      onChange={(e) => {
                        this.getInputValue(e);
                      }}
                    />
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="right_block_teacher_profile">
              <div className="journal_block">
                <div className="journal_name_block">
                  <p className="journal_name">Журналы преподавателя</p>
                </div>
                <div className="block_with_selects">
                  <Header></Header>
                </div>
              </div>
              <div className="block_prompt">
                <div>
                  <p className="name_prompt">Подсказка</p>
                  <div className="text_of_prompt">
                    <p>
                      Чтобы посмотреть журнал преподавателя, нажмите на одно
                      из полей: «Название дисциплины», «Тип занятия», «Группа»
                      или «Подгруппа», выберите из выпадающего списка нужный вам
                      пункт, затем нажмите на кнопку «Загрузить журнал».
                    </p>
                    <br></br>
                    <p>
                      Контактная информация о вас будет привязана к вашему
                      профилю в этом веб-сервесе. Её можно редактировать в любое
                      время, такую информацию как «Ф.И.О», «Адрес электронной
                      почты», «Телефон», «Фотографию профиля» и «Информацию
                      о себе», чтобы это сделать нажмите на иконку.
                    </p>
                  </div>
                  <div className="block_link_prompt">
                    <Link
                      className="link_prompt"
                      to="/electronicaljournal-view/prompt_user"
                    >
                      Руководство пользователя
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
