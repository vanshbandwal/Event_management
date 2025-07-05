import React from 'react'
import footer_logo from '../../assets/logodyd.png'
import './Footer.css'
import whatapp from '../../assets/whatsapp_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import instagram_icon  from '../../assets/instagram_icon.png'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
 <div className="footer">
  <div 
  className="footer_logo">
    <img src={footer_logo} alt="" />
    <p>DYD WEDDING</p>
  </div>
  <div className="footer-social-icon">
    <div className="footer-icons-container">
      <img src={instagram_icon} alt="" />
    </div>
    <div className="footer-icons-container">
      <img src={pintester_icon} alt="" />
    </div>
    <div className="footer-icons-container">
      <img src={whatapp} alt="" />
    </div>
  </div>
  <div className="footer-copyright">
    <hr />
    <p>DYDWedding@gmail.com</p>
  </div>
</div>

  )
}

export default Footer