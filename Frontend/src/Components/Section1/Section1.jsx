import React, { useContext } from 'react'
import vidio from '../../assets/Event_vidio.mp4'
import UserContext from '../../store/Store'
import './Section.css'
import gallery1 from '../../assets/home_gallery1.jpg'
import gallery2 from '../../assets/home_gallery2.jpg'
import gallery3 from '../../assets/home_gallery3.jpg'
import gallery4 from '../../assets/home_gallery4.jpg'
import gallery5 from '../../assets/home_gallery5.jpg'
import gallery6 from '../../assets/home_gallery6.png'
import Footer from '../Footer/Footer'

const Section1 = () => {
  const { service, review } = useContext(UserContext)
  return (
    <div className='main_container'>
      <div>
        <video
          src={vidio}
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          controls={false}
        />
      </div>
      {/* service */}
      <div className='service'>
        <h3 className='heading_service'>We do everything</h3>
        <h1 className='subHeading_service'>Our Services</h1>
        <div className='service_container'>
          {
            service.map((product, i) => (
              <div key={i} className='service_card'>
                <div className=''><img src={product.image} alt="" /></div>
                <div className='service_card_name'>{product.name}</div>
                <div className='service_card_discription'>{product.discription}</div>
              </div>
            ))
          }
        </div>
      </div>
      {/* Images */}
      <div>
        <h3 className='heading_service'>Various Service Gallery</h3>
        <h1 className='subHeading_service'>We are Inspired by Your Happiness</h1>
        <div className="galleryRow_container">
  <div className="galleryRow_1">
    {[gallery1, gallery2, gallery3].map((img, i) => (
      <div className="image-wrapper" key={i} onClick={() => window.open(img, "_blank")}>
        <img src={img} alt="" />
        <div className="overlay">
          <span className="zoom-icon">🔍</span>
        </div>
      </div>
    ))}
  </div>
  <div className="galleryRow_2">
    {[gallery4, gallery5, gallery6].map((img, i) => (
      <div className="image-wrapper" key={i} onClick={() => window.open(img, "_blank")}>
        <img src={img} alt="" />
        <div className="overlay">
          <span className="zoom-icon">🔍</span>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
      {/* review */}
      <div className='service'>
        <h3 className='heading_service'>Testimonials</h3>
        <h1 className='subHeading_service'>What Our Clients Say About Us</h1>
        <div className='service_container'>
          {
            review.map((product, i) => (
              <div key={i} className='review_card'>
                <div className=''><img src={product.image} alt="" className='card_img' /></div>
                <div className='review_card_name'>{product.name}</div>
                <div className='review_card_discription'>{product.discription}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default Section1