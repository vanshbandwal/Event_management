import React from 'react'
import '../DisplayReview/DisplayReview.css'
import { useContext } from 'react'
import { Admincontext } from '../../store/store'
import cross_icon from '../../assets/cart_cross_icon.png'
import axios from 'axios'


const DisplayReview_page = () => {
    const {fetchReviewPage,getservice} = useContext(Admincontext)


    const remove_Review = async(id)=>{
        let res = await axios.post('http://localhost:3000/removeReviewpage',{id})
        getservice()
    }
  return (
    <>
      <h1 className='heading'>Our Reviews</h1>
      <hr  className='hr'/>
    <div className='list-product'>
         <div className='listproduct-format-main'>
           <p>Service</p>
           <p>Title</p>
           <p>Discription</p>
           <p>Remove</p>
         </div>
         <div className='listproduct-allproduct'>
            <hr/>
           {fetchReviewPage.map((product, index) => {
             return <>
               <div className='listproduct-format-main listproduct-format' key={index}>
                 <img src={product.image} alt="" className='listproduct-product-icon' />
                 <p>{product.name}</p>
                 <p>{product.discription}</p>
                 <img src={cross_icon} alt="" className='listproduct-remove-icon' onClick={()=>{remove_Review(product.id)}}/>
               </div>
               <hr />
             </>
           })}
         </div>
       </div>
       </>
  )
}

export default DisplayReview_page