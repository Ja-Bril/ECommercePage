import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get sent exclusive offers to your email</h1>
        <p>Sub to our newsletter!</p>
        <div>
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter