// import React from 'react';
import './Collections.css';
import galNike1 from '../../assets/gal-nike-1.jpg';
import galNike2 from '../../assets/gal-nike-2.jpg';
import galAdidas from '../../assets/gal-adidas.jpg';
import galNb from '../../assets/gal-nb.jpg';
import whiteArrow from '../../assets/white-arrow.png';
const Collections = () => {


  return (
    <div className='collections'>
      <div className='gallery'>
        <img src={galNike1} alt="" />
        <img src={galNike2} alt="" />
        <img src={galAdidas} alt="" />
        <img src={galNb} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={whiteArrow} alt="" /></button>
    </div>
  )
}

export default Collections