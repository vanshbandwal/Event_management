import './DisplayReview.css'
import { useContext } from 'react'
import { Admincontext } from '../../store/store'
import cross_icon from '../../assets/cart_cross_icon.png'
import axios from 'axios'

const DisplayReview = () => {
  const {fetchReview,getservice} = useContext(Admincontext)


    const remove_Review = async(id)=>{
        let res = await axios.post('http://localhost:3000/removeReview',{id})
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
           {fetchReview.map((product, index) => {
             return <>
               <div className='listproduct-format-main listproduct-format' key={index}>
                 <img src={product.image} alt="" className='listproduct-product-icon' />
                 <p>{product.name}</p>
                 <p>{product.discription}</p>
                 <div className='remove_icon_container'>
                 <img src={cross_icon} alt="" className='listproduct-remove-icon'  onClick={()=>{remove_Review(product.id)}}/>
                 </div>
               </div>
               <hr />
             </>
           })}
         </div>
       </div>
       </>
  )
}

export default DisplayReview