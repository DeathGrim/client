import React, { useEffect, useState } from "react";
import { setAuthToken } from "../../utils/Api";
import "./UserApplication.css";

const UserApplication = () => {
    const [application, setApplication] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchApplication = async () => {
        try {
   
          const token = localStorage.getItem("token");
          console.log("Token:", token);
  
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          const userId = decodedToken._id;
          console.log("Decoded Token:", decodedToken);
          console.log("User ID:", userId);
  
          if (!userId) {
            setError("Пользователь не авторизован");
            setLoading(false);
            return;
          }
  
  
          setAuthToken(token, userId);
  
          const response = await fetch(
            `http://localhost:5000/api/application/user/${userId}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
          }
          const data = await response.json();
          if (Array.isArray(data)) {
            setApplication(data);
          } else {
            console.error("Data returned is not an array:", data);
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchApplication();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="feedback-list">
            <h1>Ваши заявки</h1>
      {application.length > 0 ? (
        application.map((application) => (
          <div className="application-item" key={application._id}>
            <div className="application-item__number">
              <h4>Телефон:{application.number}</h4>
            </div>
            <div className="application-item__service">
              <p>Тип услуги:{application.category}</p>
            </div>
            <p>{application.createAt}</p>
          </div>
        ))
      ) : (
        <p>No application found.</p>
      )}
        </div>
    );

};
export default UserApplication;