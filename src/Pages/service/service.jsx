import React, { useEffect, useState } from "react";
import axios from "axios";
import "./service.css";
import ServiceCard from "../../Components/serviceComp/serviceComp";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  
  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/service/service");
        setServices(response.data);
      } catch (error) {
        console.error("Failed to load services:", error);
      }
    };
  
    fetchServices();
    
  }, []);
  
  
  return (
    <div>
      <h1 className='Service-Title'>Услуги</h1>
      <div className="services-container">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
