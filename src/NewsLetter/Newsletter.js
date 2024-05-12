import React from 'react';
import './Newsletter.css';


const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1> Get Exclusive Offer In Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type='text' placeholder='Your Email here'/>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
