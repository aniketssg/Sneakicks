// import React from 'react'
import './Hero.css';
import darkArrow from '../../assets/dark-arrow.png'

export const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure you get the best sneakers.</h1>
        <p>Our 13 stage verification process ensure you get authentic 
          sneakers at the best price guranteed. Get the most hyped sneakers 
          at your doorsteps in 3 days.
        </p>
        <button className='btn'>Explore more <img src={darkArrow} alt="" /></button>
      </div>

    </div>
  )
}
