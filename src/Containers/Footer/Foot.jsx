import React from 'react'
import "./Foot.scss";
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram,BsTwitter} from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
function Foot() {
  return (
    <div className='Foot _footer'>
      <div className="Foot__content">
        <h1>Information</h1>
        <p>Home</p>
        <p>About</p>
        <p>Service</p>
       <p>My Account</p>
       <p>Privacy</p>
       <p>Cookies Party</p>
      </div>
      <div className="Foot__log">
        <img src='/photos/logo.png' alt='logo'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Porro veritatis tempore quas dignissimos optio ratione itaque <br></br>repellendus beatae adipiscil repudiandae?</p>
        <div className="Foot__icon _social">
           <AiOutlineYoutube  />
          </div>
          <div className="Foot__icon _social">
          <BsInstagram  />
          </div>
          <div className="Foot__icon _social">
          <BsTwitter />
          </div>
          <div className="Foot__icon _social">
          <FaFacebookF  />
          </div>
      </div>
      <div className="Foot__contact">
        <h1>Contact Us</h1>
        <p>8929545041</p>
        <p>ikhan891622@gmail.com</p>
        <p>0129 -241125</p>
        <p>Address: D-152 New Delhi 1100011</p>
      </div>
      
    </div>
  )
}

export default Foot
