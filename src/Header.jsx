import React from 'react';
import './App.css';
import logo from "./images/logo1.png"

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src={logo} alt="logo" width="70" height="50" />
      <h1>Text Keep</h1>
      </div>
    </>
  );
}

export default Header;
