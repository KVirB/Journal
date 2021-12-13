import * as React from "react";
import "./Login.css";

class Login extends React.Component {
  state = {
    login: 0,
    password: 0,
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
  Login = () => {
    if (this.state.login === "Абазовская" && this.state.password === "1") {
      window.open("/journal");
      window.close("/");
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
                defaultValue=""
                placeholder="Логин"
                onChange={getLogin}
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                defaultValue=""
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
                onClick={Login}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Login;
