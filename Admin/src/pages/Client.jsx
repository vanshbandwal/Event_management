import React from 'react'
import { useContext } from 'react'
import { Admincontext } from '../store/store'
import '../styles/Client.css'
import axios from 'axios'

const Client = () => {
  const {fetchClient} = useContext(Admincontext)
  const remove_client = async(id)=>{
    let res = await axios.post('http://localhost:3000/removeClient',{'id':id})
    if(res.data.success === true){
        alert('Remove client successfully')
    }
  }
  return (
    <div>
      <div className='heading_client_server'>
        <div>S.NO</div>
        <div>Name</div>
        <div>Last Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Message</div>
        <div>Remove</div>
      </div>
      <hr />
      {
        fetchClient.map((product,i)=>(
          <div className='contact_us_detail'> 
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.last}</div>
            <div>{product.email}</div>
            <div>{product.phone}</div>
            <div>{product.message}</div>
            <div onClick={()=>{remove_client(product.id)}} className='client_cross'>❌</div>
          </div>
        ))
      }
    </div>
  )
}

export default Client