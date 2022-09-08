import React from 'react';
import './Product.css';
import img4 from '../img/img4.jpg'

export default function Product() {
  console.log('product')
  return (
    <div className='products-section'>
      <img src={img4} alt="" className='img'  />
    </div>
  )
}
