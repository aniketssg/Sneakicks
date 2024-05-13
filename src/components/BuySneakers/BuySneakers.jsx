// import React from 'react';
import './BuySneakers.css';
import adidas from '../../assets/adidas.jpg';
import nike from '../../assets/nike.jpg';
import nb from '../../assets/nb.jpg';
import nikeIcon from '../../assets/nike-icon.jpg';
import adidasIcon from '../../assets/adidas-icon.png';
import nbIcon from '../../assets/nb-icon.jpg';


const BuySneakers = () => {
  return (
    <div className='buySneakers container'>

        <div className='buySneaker'>
          <img src={adidas} alt="" />
          <div className='caption'>
            <img src={adidasIcon} alt="" />
            <p>Adidas Sneakers</p>
          </div>
        </div>

        <div className='buySneaker'>
          <img src={nike} alt="" />
          <div className='caption'>
            <img src={nikeIcon} alt="" />
            <p>Nike Sneakers</p>
          </div>
        </div>

        <div className='buySneaker'>
          <img src={nb} alt="" />
          <div className='caption'>
            <img src={nbIcon} alt="" />
            <p>New Balance Sneakers</p>
          </div>
        </div>
    </div>
  )
}

export default BuySneakers