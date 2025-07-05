import React, { useContext } from 'react'
import './Review.css'
import UserContext from '../../store/Store'

const Review = () => {
  const { reviewPage } = useContext(UserContext)
  console.log(reviewPage)
  return (
    <div>
      <h1 className='heading_service'>What Clients Say About Us</h1>
      <div className='subHeading_Review_page_container'>
        <h2 className='subHeading_Review_page'>We have been delighted to recieve many letters of thanks from couples </h2><h2 className='subHeading_Review_page'>who have chosen Wedding Planner for their unique wedding.</h2>
      </div>
      <div className='reviewpage_container'>
        {
          reviewPage.map((product, i) => (
            <div className='review_page_card' key={i}>
              <div>
                <img src={product.image} alt="" />
              </div>
              <div>
                <div className='review_page_discription'>{product.discription}</div>
                <div className='review_page_name'>{product.name}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Review