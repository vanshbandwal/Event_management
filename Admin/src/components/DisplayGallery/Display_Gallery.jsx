import { useContext } from 'react'
import { Admincontext } from '../../store/store'
import cross_icon from '../../assets/cart_cross_icon.png'
import axios from 'axios'
import './Display_Gallery.css'

const Display_Gallery = () => {
  const {fetchImage,getservice} = useContext(Admincontext)


    const remove_product = async(id)=>{
        let res = await axios.post('http://localhost:3000/removeImages',{id})
        getservice()
    }
  return (
    <>
      <h1 className='heading'>Our Images</h1>
      <hr  className='hr'/>
    <div className='list-product'>
         <div className='listproduct-format-main'>
           <p>Images</p>
           <p>Remove</p>
         </div>
         <div className='listproduct-allproduct'>
            <hr/>
           {fetchImage.map((product,index) => {
             return <>
               <div className='listproduct-format-main listproduct-format' key={index}>
                 <img src={product.image} alt="" className='listproduct-product-icon' />
                 <img src={cross_icon} alt="" className='listproduct-remove-icon' onClick={()=>{remove_product(product.id)}}/>
               </div>
               <hr />
             </>
           })}
         </div>
       </div>
       </>
  )
}

export default Display_Gallery