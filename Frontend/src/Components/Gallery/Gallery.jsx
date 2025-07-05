import React, { useContext } from 'react'
import './Gallery.css'
import UserContext from '../../store/Store'

const Gallery = () => {
  const {Gallery} = useContext(UserContext) 
  return (
    <>
    <h3 className='heading_service'>Sweet Memories</h3>
      <h1 className='subHeading_service'>Our Captured Moments</h1>
    <div className='main_container_gallery'>
      {
        Gallery.map((product ,i)=>(
          <div key={i} className='gallery_container'>
            <img src={product.image} alt="" />
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Gallery