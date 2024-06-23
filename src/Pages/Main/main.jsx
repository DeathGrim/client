import about1 from "./../../img/about/about1.png";
import about2 from "./../../img/about/about2.png";
import about3 from "./../../img/about/about3.png";
import icons from "./../../img/icons/free-icon-computer-8489363.png";
import "./main.css";

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Main = () => {

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


  return (
    
    <body>
      <header className="header">
        <div className="container">
          <div className="header_inner">
            <div className="header_logo">PushGang</div>
            <nav className="nav" id="nav">
            <NavLink className="service_nav" key="/service" to="/service">Услуги</NavLink>
            
              {!isAuthenticated? (
                <li>
                  
                  <NavLink className="login_nav" key="/login" to="/login" onClick={handleLogout}>Войти</NavLink>                  
                </li>
                
              ) : (
                <>
                  <li>
                    <NavLink className="application_nav" key="/application" to="/application">Запись</NavLink>
                    <NavLink className="profile_nav" key="/profile" to="/profile">Личный кабинет</NavLink>
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
      <div className="intro">
        <div className="container">
          <div className="intro_inner">
            <h2 className="intro_title">Добро пожаловать в PushGang</h2>
            <h1 className="intro_suptitle">Компьютерный клуб</h1>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section_header">
            <h3 className="section_suptitle">Информация</h3>
            <h2 className="section_title">О компьютерном клубе</h2>
            <div className="section_text">
              <p>
                Pushgang — лучшее киберспортивное пространство в Кургане для
                тех, кто привык тащить катки на самом лучшем железе, а также
                погружаться в атмосферу киберспорта.
              </p>
            </div>
          </div>

          <div className="about">
            <div className="about_item">
              <div className="about_img">
                <img src={about1} alt="" />
              </div>
              <div className="about_text">Bootcamp</div>
            </div>

            <div className="about_item">
              <div className="about_img">
                <img src={about2} alt="" />
              </div>
              
              <div className="about_text">PC</div>
            </div>

            <div className="about_item">
              <div className="about_img">
                <img src={about3} alt="" />
              </div>
              <div className="about_text">Console</div>
            </div>
          </div>
        </div>
      </section>

      <div className="info">
        <div className="container">
          <div className="inf">
            <div className="info_item">
              <div className="info_count">32</div>
              <div className="info_text">мощных игровых компьютеров</div>
            </div>
            <div className="info_item">
              <div className="info_count">1</div>
              <div className="info_text">Лаунж зона Secret room с PS5</div>
            </div>
            <div className="info_item">
              <div className="info_count">1</div>
              <div className="info_text">PS5 с телевизорами - 65' 4k</div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section_header">
            <h3 className="section_suptitle">Информация</h3>
            <h2 className="section_title">О комплектующих PC</h2>
          </div>
          <div className="services">
            <div className="services_item">
              <img className="services_icon" src={icons} alt="" />

              <div className="services_title">ПК Standart</div>
              <div className="services_text">
                Видеокарта: nVidia GeForce RTX 2070 Super Процессор: Intel CORE
                I5 9600 KF Монитор: Acer 240Гц Периферия: Клавиатура: Zet Gaming
                Blade/Kailh Red Мышка: Logitech G102 Наушники: ARDOR GAMING Edge
              </div>
            </div>

            <div className="services_item">
              <img className="services_icon" src={icons} alt="" />
              <div className="services_title">ПК Comfort</div>
              <div className="services_text">
                Видеокарта: nVidia GeForce RTX 3060 Процессор: Intel CORE
                I5-12400F Монитор: Acer 280Гц Периферия: Клавиатура: ARDOR
                GAMING Blade Pro Мышка: Logitech G102 Наушники: ARDOR GAMING
                Edge
              </div>
            </div>
          </div>

          <hr />

          <div className="services">
            <div className="services_item">
              <img className="services_icon" src={icons} alt="" />

              <div className="services_title">ПК BOOTCAMP</div>
              <div className="services_text">
                Видеокарта: nVidia GeForce RTX 2080 Super Процессор: Intel CORE
                I7 10700 Монитор: Acer 240Гц Периферия: Клавиатура: Dark Project
                KD87A Мышка: Logitech g403 Hero Наушники: HyperX Cloud II
              </div>
            </div>

            <div className="services_item">
              <img className="services_icon" src={icons} alt="" />
              <div className="services_title">ПК Ultra</div>
              <div className="services_text">
                Видеокарта: nVidia GeForce RTX 3060ti Процессор: Intel CORE
                I5-12400F Монитор: Acer 280Гц Периферия: Клавиатура: Dark
                Project KD87A Мышка: Dark Project x VGN Наушники: HyperX Cloud
                II
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sect">
        <div className="container">
          <div className="section_header">
            <h2 className="section_title">Запись</h2>
          </div>
        </div>

        <div className="appointment" id="appoint">
          <h2>Запись в компьютерный клуб</h2>
          <form action="#" method="post">
            <div className="input">
              <input type="Name" placeholder="Имя" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Телефон" required />

              <select className="selector">
                <option className="selector_service" value="">-- Выберите услугу --</option>
              </select>
            </div>
            <button className="appointment_button" type="submit">Отправить</button>
          </form>
        </div>
      </section>
      </body>
      
  );
};
export default Main;
