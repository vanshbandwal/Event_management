import React from 'react'
import './Footer.css'
import footer1 from '../../assets/logodyd.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/insta.png'
import youtube from '../../assets/youtube.png'
import instagallery from '../../assets/intsagallery.png'

const Footer = () => {
    return (
        <div className='main-footer-container'>
            <div className='footer'>
                <div className='footer-container'>
                    <div><img src={footer1} alt="" width='350px'/></div>
                    <div className='dis'>DYDwedding@gmail.com</div>
                    <div className='dis'>+91 8955874931</div>
                    <div className='dis social' >
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>
                <div>
                    <img src={instagallery} alt="" width='400px'/>
                </div>
            </div>
            <div className='mark'>2024 © DYD Wedding Pvt Ltd. All Rights Reserved.</div>
        </div>
    )
}

export default Footer