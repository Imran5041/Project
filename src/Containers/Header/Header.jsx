import React from 'react';
import "./Header.scss"
import { BiUserCircle } from 'react-icons/bi';
import { SlBasketLoaded } from 'react-icons/sl';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
function Header() {
  return (
    <div className='Header _container'>
      <div className="Header__logo">
        <img src='/photos/logo.png' alt='logo' />
      </div>
      <div className="Header__text">
        <p>About Us</p>
        <p>Category</p>
        <span>
          <BiUserCircle />
        </span>
        <span>
          <SlBasketLoaded />
        </span>
        <span>
          <BsSearch />
        </span>
      </div>
      <div className="Header__menu">
        <AiOutlineMenu />
      </div>
    </div>
  )
}

export default Header
