import * as React from "react";
import "./Login.css";
import { connect } from "react-redux";
import { getTeacherThunk } from "../reducer/teacherReducer";

class Login extends React.Component {
  state = {
    login: null,
    password: null,
    discription: " ",
  };

  getLogin = (e) => {
    const { value } = e.target;
    this.setState({ discription: " " });
    this.setState({
      login: value,
    });
  };
  getPassword = (e) => {
    const { value } = e.target;
    this.setState({ discription: " " });
    this.setState({
      password: value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.password !== prevState.password) {
      this.props.getTeacherThunk(this.state.login, this.state.password);
    }
  }

  Login = () => {
    const { login, password } = this.state;
    if (login === "Абазовская" && password === "1") {
      window.location.assign("/electronicaljournal-view/journal");
      this.setState({ login: null, password: null });
    } else {
      this.setState({ discription: "Введите верные данные" });
    }
  };

  render() {
    const { getPassword, getLogin, Login } = this;
    return (
      <div className="back">
        {console.log(this.state.login)}
        <section className="container">
          <div className="login">
            <h1>Войти в электронный журнал</h1>
            <p>
              <input
                type="text"
                name="login"
                value={this.props.login}
                placeholder="Логин"
                onChange={getLogin}
              />
            </p>
            <p>
              <input
                type="text"
                name="password"
                value={this.props.password}
                placeholder="Пароль"
                onChange={getPassword}
              />
            </p>
            <p className="warning">
              <label>{this.state.discription}</label>
            </p>
            <div className="a1">
              <input type="checkbox" name="remember_me" id="remember_me" />
              <label>Запомнить меня</label>
            </div>
            <div className="a2">
              <input
                type="submit"
                className="button"
                name="commit"
                value="Войти"
                onClick={() => {
                  Login();
                }}
              />
              {/* <input
                type="submit"
                className="button"
                name="commit"
                value="Войти"
                onClick={() => {
                  this.props.toggleTeacher(
                    this.state.login,
                    this.state.password
                  );
                }}
              />
              {this.props.teacher.map((m) => (
                <label>{m.name}</label>
              ))}
              {console.log(this.props.teacher + "FAMILIYA")} */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    teacher: state.teacherPage.teacher,
  };
};

export default connect(mapStateToProps, {
  getTeacherThunk,
})(Login);
