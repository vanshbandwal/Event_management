import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logodyd.png'

const Header = () => {
  const [line,setLine] = useState('home')
  return (
     <nav className="navbar">
      <div className="navbar-logo"><img src={logo} alt="" className='logo'/></div>
      <ul className="navbar-links">
        <li><Link to="/"><p className={line === 'home' ? 'active' : ''} onClick={()=>setLine('home')}>Home</p></Link></li>

        <li><Link to="/services"><p className={line === 'services' ? 'active' : ''} onClick={()=>setLine('services')}>Services</p></Link></li>

        <li><Link to="/gallery"><p onClick={()=>setLine('gallery')} className={line === 'gallery' ? 'active' : ''} >Gallery</p></Link></li>

        <li><Link to="/reviews" ><p onClick={()=>setLine('review')} className={line === 'review' ? 'active' : ''} >Reviews</p></Link></li>

        <li><Link to='/client'><p onClick={()=>setLine('client')} className={line === 'client' ? 'active' : ''} >Client</p></Link></li>
      </ul>
    </nav>
  )
}

export default Header