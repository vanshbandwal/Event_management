import './display_services.css'
import { useContext } from 'react'
import { Admincontext } from '../../store/store'
import cross_icon from '../../assets/cart_cross_icon.png'
import axios from 'axios'

const Display_services = () => {
  const {fetchservice,getservice} = useContext(Admincontext)


    const remove_product = async(id)=>{
        let res = await axios.post('http://localhost:3000/removeproduct',{id})
        getservice()
    }
  return (
    <>
      <h1 className='heading'>Our Services</h1>
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
           {fetchservice.map((product, index) => {
             return <>
               <div className='listproduct-format-main listproduct-format' key={index}>
                 <img src={product.image} alt="" className='listproduct-product-icon' />
                 <p>{product.name}</p>
                 <p>{product.discription}</p>
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

export default Display_services