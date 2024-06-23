import React, { useState, useEffect } from 'react';
import "./application.css";
import { NavLink } from "react-router-dom";


const SubmitFeedback = () => {
  const [category, setCategory] = useState('');
    const [services, setServices] = useState([]);
    const [number, setNumber] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    

    useEffect(() => {
      // Проверяем, есть ли токен в localStorage
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
      }
    }, []);
  
  
    const handleLogout = () => {
    
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    };

    useEffect(() => {
      
      const token = localStorage.getItem('token');
      fetch('http://localhost:5000/api/user/user', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
      })
        .then(response => response.json())
        .then(data => {
          setUser(data);
          setLoading(false);
        })
        .catch(error => {
          setError('Failed to load user data');
          setLoading(false);
        });
  
      fetch('http://localhost:5000/api/category/category')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch services');
          }
          return response.json();
        })
        .then(data => {
          setServices(data);
        })
        .catch(error => {
          setError('Failed to fetch services');
          console.error('Error fetching services:', error);
        });
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
  
      const feedbackData = {
        category,
        number,
        user: user ? user._id : null,
        
        
      };
      
  
      fetch('http://localhost:5000/api/application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(feedbackData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to submit feedback');
          }
          return response.json();
        })
        .then(data => {
          console.log('Feedback submitted:', data);
          setCategory('');
          setNumber([])
          setUser([]);
          
         
        })
        .catch(error => {
          console.error('Error submitting feedback:', error);
        });
    };
    
  

      return (
        <div>
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
        <section className="sect">
        <div className="container">
          <div className="section_header">
            <h2 className="section_title">Запись</h2>
          </div>
        </div>

        <div className="appointment" id="appoint">
          <h2>Запись в компьютерный клуб</h2>
          <form onSubmit={handleSubmit} action="#" method="post">
            <div className="input">
              <input type="text"
              key={number}
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required placeholder="Телефон" />

              <select  id="Name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required className="selector">
                <option className="selector_service" value="">-- Выберите услугу --</option>
                {services.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
              </select>
            </div>
            <button className="appointment_button" type="submit">Отправить</button>
          </form>
        </div>
      </section>
        </div>

      )
      
};
export default SubmitFeedback;