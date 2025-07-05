import React, { useContext } from 'react'
import './Service.css'
import UserContext from '../../store/Store'
import { Link } from 'react-router-dom'

const Service = () => {
  const { servicepage } = useContext(UserContext)
  console.log(servicepage)
  return (
    <div>
      <h3 className='heading_service'>What We Do</h3>
      <h1 className='subHeading_service'>Full-service event production</h1>
      <div className='servicePage_card_container'>
        {
          servicepage.map((product, i) => (
            <div key={i} className='servicePage_card'>
              <div>
                <span className='servicePage_name'>{product.id}</span>
                <span className='servicePage_name'>{product.name}</span>
                <div className='servicePage_discription'>{product.discription}</div>
                <div className='servicePage_contact_us'><button className='contact_Us_btn'><Link to="/contact">Contact-Us</Link></button></div>
              </div>
              <div>
                <img src={product.image} alt="" className='servicePage_card_img'/>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Service