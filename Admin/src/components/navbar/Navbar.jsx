import React, { useState } from 'react'
import './Navbar.css'
import Display_services from '../display_services/display_services'
import AddProduct from '../create_list/CreateList'
import Services from '../../pages/Services'
import Reviews from '../../pages/Reviews'

const Navbar = () => {
   
    const [servicenav,setservicenav] = useState('service')
  return (
     <>
    <div className='Navbar_cantainer'>
        <div onClick={()=>{setservicenav('service')}} className={servicenav === 'service'?'active1':''}>Sevices</div>
        <div onClick={()=>{setservicenav('review')}} className={servicenav === 'review'?'active1':''}>Reviews</div>
       
    </div>
     {servicenav === 'service' ?<Services/>:<Reviews/>}
    </>
  )
}

export default Navbar