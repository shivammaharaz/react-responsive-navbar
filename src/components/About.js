import React from 'react';

import './About.css';
import img3 from '../img/img3.jpg';


export default function About() {
  console.log('about page')
  return (
    <div className='about-section'>
      <img src={img3} alt="" className='img' />
    </div>
  )
}
