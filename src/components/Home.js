import React from 'react';
import './Home.css'
import img1 from '../img/img1.jpg'

export default function Home() {
  console.log('homepage')
  return (
  
    <div className='main'>
      <img src={img1} alt="404 error" className='img' />
    {/* </div> */}
    </div>
  );
}
