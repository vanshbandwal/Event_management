import React, { useState } from 'react'
import './CreateGallery.css'
import upload_area from '../../assets/upload_cloud_icon.svg'
import axios from 'axios';
const Create_Gallery = () => {
    const [image, setimage] = useState(false);
    const [serviceDetails, setserviceDetails] = useState({
        image: '',
    })
    const imageHandler = (e) => {
        setimage(e.target.files[0])
    }


    const changeHandler = (e) => {
        setserviceDetails({ ...serviceDetails, [e.target.name]: e.target.value })
    }
    const Add_Product = async () => {
        console.log(serviceDetails)
        let service = serviceDetails
        let formdata = new FormData()
        formdata.append('service', image)
        console.log(formdata)
        let response = await axios.post('http://localhost:3000/upload', formdata)
        if (response.data.success === true) {
            service.image = response.data.image_url;
            let d = await axios.post('http://localhost:3000/addImages', service)
            if (d.data.success === true) {
                alert(d.data.message)
                setserviceDetails({
                    image: '',
                })
                setimage('')
            }

        }

    }
    return (<>
          <h1 className='heading'>Create Images</h1>
      <hr  className='hr'/>
        <div className='add-product'>
            <div className='addproduct-itemfield'>
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' alt="" />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button className='addproduct-btn' onClick={Add_Product}> Add
            </button>
        </div>
        </>
    )
}

export default Create_Gallery