import React, { useState } from 'react'
import '../create_list/CreateList.css'
import upload_area from '../../assets/upload_cloud_icon.svg'
import axios from 'axios';
const AddReviews = () => {
    const [image, setimage] = useState(false);
    const [serviceDetails, setserviceDetails] = useState({
        name: '',
        image: '',
        discription: '',
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
            let d = await axios.post('http://localhost:3000/addReview', service)
            if (d.data.success === true) {
                alert(d.data.message)
                setserviceDetails({
                    name: '',
                    image: '',
                    discription: '',
                })
                setimage('')
            }

        }

    }
    return (<>
          <h1 className='heading'>Create Reviews</h1>
      <hr  className='hr'/>
        <div className='add-product'>
             <div className="addproduct-itemfield">
                <p>Review Name</p>
                <input type="text" name="name" placeholder='Type here' onChange={changeHandler} value={serviceDetails.name} />
            </div>
            <div className="addproduct-itemfield">
                <p>Review discription</p>
                <input type="text" name="discription" placeholder='Type here' onChange={changeHandler} value={serviceDetails.discription} />
            </div>
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

export default AddReviews