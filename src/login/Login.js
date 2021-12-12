import * as React from "react";
import "./Login.css";

class Login extends React.Component {
    state = {
        login: 0,
        password: 0,
    }
    getLogin = (e) => {
        const { value } = e.target;
        this.setState({
            login: value,
        });
    };
    getPassword = (e) => {
        const { value } = e.target;
        this.setState({
          password: value,
        });
    };
    Login = () => {
        if(this.state.login==="Абазовская" && this.state.password==="1")
        {
            window.open("/journal");
            window.close("/")
        }
    }
    render(){
        const { getPassword, getLogin, Login} = this;
        return(
            <div className="back">
                {console.log(this.state.login)}
                  <section className="container">
                    <div className="login">
                        <h1>Войти в электронный журнал</h1>
                        <p><input type="text" name="login" defaultValue="" placeholder="Логин или Email" onChange={getLogin}/></p>
                        <p><input type="password" name="password" defaultValue="" placeholder="Пароль" onChange={getPassword}/></p>
                        <p className="remember_me">
                        <label>
                            <input type="checkbox" name="remember_me" id="remember_me"/>
                            Запомнить меня
                        </label>
                        </p>
                        <p className="submit"><input type="submit" className="button" name="commit" value="Войти" onClick={Login}/></p>
                    </div>
                </section>
            </div>
        )
    }
}
export default (Login);