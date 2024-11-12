import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Dashoard from './pages/dashboard';

function App() {
  const [isLogined, setIsLogined] = useState(false)

  const recieveLoginStatus=(status:boolean)=>{
    setIsLogined(status)
  }

  return (
    <>
      {
        localStorage.getItem('token')?<Dashoard />:
        !isLogined ? <Login handleLoginState={recieveLoginStatus} /> :  <Dashoard />
      }
    </>
  );
}

export default App;
