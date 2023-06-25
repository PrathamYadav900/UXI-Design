import React from 'react';
// import {RiMenu3line,RiCloselin} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'


const navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#home'>What is GPT?</a></p>
          <p><a href='#home'>Open AI</a></p>
          <p><a href='#home'>Case Studies</a></p>
          <p><a href='#home'>Library</a></p>

        </div>
      </div>
    <div className="navbar-signin_buttons">
      <p id='Sign_In'> <a href="#home"> Sign In</a></p>
      <button id='Sign_Up'> Sign Up</button>

    </div>
    </div>
  )
}

export default navbar
