import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import { getJournalsiteThunk } from "../../reducer/journalsiteReducer";
class Header extends React.Component {
  state = {
    id: "",
  };

  getValue = (e) => {
    const { value } = e.target;
    this.setState({
      id: value,
    });
  };
  render() {
    const { getValue } = this;
    return (
      <div>
        {console.log(this.state.id)}
        <div className="journal-name">Электронный журнал преподователя</div>
        <div className="display-flex">
          <div className="discipline-name">Название дисциплины:</div>
          <select
            className="discipline-select"
            name="discipline"
            title="Выберите дисциплину"
            onBlur={getValue}
            onChange={() => {
              this.props.getJournalsiteThunk();
            }}
          >
            <option value="" selected hidden>
              Выберите дисциплину
            </option>
            {this.props.discipline.map((m) => (
              <option className="lang__items" value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
          <div className="special-name">Специальность:</div>
          <select
            className="special-select"
            name="special"
            title="Выберите специальность"
          >
            <option value="" selected hidden>
              Выберите специальность
            </option>
            <option className="lang__items">Дизайн</option>
            <option className="lang__items">Технология машиностроения</option>
          </select>
        </div>
        <div className="display-flex">
          <div className="course-name">Курс:</div>
          <input className="course-input"></input>
          <div className="group-name">Группа:</div>
          <select
            className="group-select"
            name="select"
            title="Выберите группу"
          >
            <option value="" selected hidden>
              Выберите группу
            </option>
            <option className="lang__items">Ит-5</option>
            <option className="lang__items">АЭ-21</option>
          </select>
          <div className="view-name">Вид занятий:</div>
          <input className="view-input"></input>
        </div>
      </div>
    );
  }
}
export default connect(null, { getJournalsiteThunk })(Header);
