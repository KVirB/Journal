import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../hooks/useAuth";

import schema from "./validation";
import "./Login.css";
import { getToken } from "./axios";

function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (localStorage.getItem("user")) {
      signIn(JSON.parse(localStorage.getItem("user")), () =>
        navigate("/electronicaljournal-view/journal", { replace: true })
      );
    }
  }, []);

  function getFormData(object) {
    let formData = new FormData();
    Object.keys(object).forEach((key) => {
      formData.append(key, object[key]);
    });
    return formData;
  }

  const onSubmit = (data) => {
    getToken(getFormData(data))
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        reset();
        signIn(data, () =>
          navigate("/electronicaljournal-view/journal", { replace: true })
        );
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h3 className="form-title">Вход в личный кабинет</h3>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <label className="login-form__input">Имя пользователя:</label>
          <input
            className="form-input"
            {...register("username")}
            type="email"
            placeholder="Введите имя пользователя"
            required
          />
          <label className="login-form__input">Пароль:</label>
          <input
            className="form-input"
            {...register("password")}
            type="password"
            placeholder="Введите пароль"
            required
          />
          <button className="login-form__submit" type="submit">
            Войти
          </button>
        </form>
        <div className="form-bottom">
          <p>Регистрация</p>
          <p>Забыли пароль?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
