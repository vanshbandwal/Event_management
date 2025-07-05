import React from 'react'
import './Navbar.css'
import logo from '../../assets/logodyd.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar_container'>
      <div><img src={logo} alt="" className='navlogo'/></div>
      <div className='Link-container'>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/sevices'>Services</Link></div>
        <div><Link to='/gallery'>Gallery</Link></div>
        <div><Link to='/reviews'>Reviews</Link></div>
        <button className='contact-us'><Link to='/contact' className='a'>Contact Us</Link></button>
      </div>
    </div>
  )
}

export default Navbar