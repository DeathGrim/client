import React, { useState, useEffect } from "react";
import "./profile.css";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Проверяем, есть ли токен в localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Функция для выхода из системы
  const handleLogout = () => {
    // Здесь должна быть логика выхода из системы
    // Например, удаление токена из localStorage и обновление состояния
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/user/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при получении данных пользователя");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Ошибка при загрузке профиля пользователя");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div >
        <div className="profile-page">
        <header className="header">
        <div className="container">
          <div className="header_inner">
            <div className="header_logo">PushGang</div>
            <nav className="nav" id="nav">
              {!isAuthenticated? (
                <li>
                  <NavLink className="login_nav" key="/login" to="/login" onClick={handleLogout}>Войти</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink className="profile_nav_main" key="/" to="/">Главная</NavLink>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="header_nav-btn">Выйти</button>
                  </li>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
      
      <h1>Личный кабинет</h1>
      <img src={user?.avatarUrl || "default-avatar-url.png"} alt="Аватар" />
      
      <div className="info_profile">
      <p>
        <strong>Имя:</strong> {user?.firstName}
      </p>
      <p>
        <strong>Фамилия:</strong> {user?.surname}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
      </div>
      </div>
    </div>
  );
};
export default Profile;
