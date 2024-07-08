import React from 'react'
import './Footer.css'
import gtlogo3 from '../Assets/gtlogo3.png'
import instagram_icon from '../Assets/instagram_icon.png'
import yelp_icon from '../Assets/yelp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={gtlogo3}/>
            
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a href ='https://www.instagram.com/gtplayers/'><img className='insagram' src={instagram_icon.png} alt="" /></a>
            </div>
            <div className="footer-icons-container">
                <a href='https://www.yelp.com/biz/gt-players-washington'><img className='yelp' src={yelp_icon} alt="" /></a>
            </div>
        </div>

    </div>
  )
}

export default Footer