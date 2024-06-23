import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./logis.css";
import { setAuthToken } from "../../utils/Api";

const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      console.log("Токен:", localStorage.getItem("token"));

      setAuthToken(response.data.token);

      navigate("/");

      setEmail(response.data.email);
    } catch (error) {
      console.error("Ошибка авторизации:", error);
    }
  };
  return (
    <div className="login-form">
      <h2>Авторизация</h2>
      <div className="login-form__input">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login-form__btn" onClick={handleLogin}>
          Войти
        </button>

        <Link
          to="/register"
          style={{
            textDecoration: "none",
            display: "inline-block",
            marginTop: "10px",
          }}
        >
          Нет аккаунта? Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};
export default AuthComponent;
