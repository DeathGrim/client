
import "./serviceComp.css";
import { NavLink } from "react-router-dom";
import React from 'react';
import {useEffect, useState} from 'react'

  

const ServiceCard = ({ service }) => {
  console.log(service);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
      }
    }, []);
  
    
    const handleLogout = () => {
      
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    };
    
    
    return (
        <div>
        <header className="header">
        <div className="container">
          <div className="header_inner">
            <div className="header_logo">PushGang</div>
            <nav className="nav" id="nav">
            <li>
                    <NavLink className="profile_nav_main" key="/" to="/">Главная</NavLink>
                  </li>
              {!isAuthenticated? (                
                <li>
                  <NavLink className="login_nav" key="/login" to="/login" onClick={handleLogout}>Войти</NavLink>
                </li>
              ) : (
                <>
                    <li>
                    <NavLink className="service_nav" key="/profile" to="/profile">Личный кабинет</NavLink>
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
     
        <div style={{border: '2px solid #fff', borderRadius:'4px', padding: '20px'}}>
            <h2 style={{color: "#fff"}}>{service?.Name}</h2>
            <p style={{color: "#fff"}}>{service?.description}</p>
            <p style={{color: "#fff"}}>Цена: {service?.price}</p>
            <img style={{height: "300px", width: "300px"}} src={service?.imageUrl} alt="Service"></img>
        </div>
       
        </div>
    );
};

export default ServiceCard;
