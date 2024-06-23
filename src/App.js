import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Pages/Main/main.jsx";
import RegisterComp from "./Components/registerComp/registerComp.jsx";
import LoginComp from './Components/loginComp/loginComp.jsx';
import ProfilePage from './Components/profileComp/profileComp.jsx';
import ServicePage from './Pages/service/service.jsx';
import FeedbackPage from './Pages/application/applicationPage.jsx';
function App() {

  if ("token" in localStorage) {
    console.log("Токен существует в localStorage");
} else {
    console.log("Токен не найден в localStorage");
}

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<RegisterComp />} />
          <Route path='/login' element={<LoginComp />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/application' element={<FeedbackPage />}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
