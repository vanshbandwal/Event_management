import React, { useState } from 'react'
import './contact.css'
import formImg from '../../assets/gallery14.jpg'
import axios from 'axios'

const Contact = () => {
  const [formdetail, setfromdetail] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    textarea: ''
  })

  const changeHandler = (e) => {
    setfromdetail({ ...formdetail, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault() // Prevent page reload on submit
    try {
      const res = await axios.post('http://localhost:3000/contact', formdetail)
      console.log(res.data)
      alert("Message sent!")
      if (res.data.success === true) {
        setfromdetail({
          first: '',
          last: '',
          email: '',
          phone: '',
          textarea: ''
        })
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong.")
    }
  }

  return (
    <div className='contact_us_container'>
      <div className='main_contact_us'>
        <h1 className='contact_us_heading'>Contact Us</h1>
        <h2>Your message could be the start of something great.</h2>
        <form className='form' onSubmit={handlesubmit}>
          <div className='name_container'>
            <div>
              <input
                type="text"
                placeholder='First Name'
                className='name_input'
                name="first"
                onChange={changeHandler}
                value={formdetail.first}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder='Last Name'
                className='name_input'
                name="last"
                onChange={changeHandler}
                value={formdetail.last}
              />
            </div>
          </div>
          <div className='can'>
            <input
              type="email"
              placeholder='Email'
              className='name_input'
              name="email"
              onChange={changeHandler}
              value={formdetail.email}
            />
          </div>
          <div className='can'>
            <input
              type="text"
              placeholder='Phone'
              className='name_input'
              name="phone"
              onChange={changeHandler}
              value={formdetail.phone}
            />
          </div>
          <div className='can'>
            <textarea
              cols={40}
              rows={8}
              name="textarea"
              placeholder="Message"
              onChange={changeHandler}
              value={formdetail.textarea}
            ></textarea>
          </div>
          <button className='contact_us_btn' type="submit">Submit</button>
        </form>
      </div>
      <div className='imgContainer'><img src={formImg} alt="Contact Visual" /></div>
    </div>
  )
}

export default Contact
