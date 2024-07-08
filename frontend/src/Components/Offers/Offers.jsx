import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers</h1>
                <p>Only Online</p>
               
            </div>
            <div className="offer-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Offers