import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstName: "",
      surname: "",
      email: "",
      password: "",
      avatarUrl: "",
      
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            "http://localhost:5000/api/user/register",
            formData
          );
          console.log(response.data);
          navigate("/login");
        } catch (error) {
          console.error("Registration error:", error.response.data);
          
        }
      };

      return (
        <div class="container-reg">
  <h2>Регистрация</h2>
  <form onSubmit={handleSubmit} className="register">
    <label htmlfor="firstName">Имя пользователя:</label>
    <input onChange={handleChange} value={formData.firstName} type="text" id="firstName" name="firstName"/>
    <label htmlfor="surname">Фамилия пользователя:</label>
    <input onChange={handleChange} value={formData.surname} type="text" id="surname" name="surname"/>
    <label htmlfor="email">email:</label>
    <input onChange={handleChange} value={formData.email} type="text" id="email" name="email"/>
    <label htmlfor="password">Пароль:</label>
    <input onChange={handleChange} value={formData.password} type="password" id="password" name="password"/>
    <label htmlFor="avatarUrl">URL аватара:</label>
    <input onChange={handleChange} value={formData.avatarUrl} type="text" id="avatarUrl" name="avatarUrl"/>
    <button className="reg_button" type="submit">Зарегистрироваться</button>
  
        <Link to="/login" class="entry">Уже есть аккаунт?</Link>
        
        <hr/>
        
        <Link to="/">Вернуться на сайт</Link>
   </form>
</div>


      )
};
export default RegistrationForm;