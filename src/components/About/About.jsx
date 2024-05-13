// import React from 'react';
import './About.css';
import aboutImg from '../../assets/about-img.jpg';
import playIcon from '../../assets/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={aboutImg} alt="" className='about-img' />
        <img src={playIcon} alt="" className='play-icon' onClick={() => {
          setPlayState(true)
        }}/>
      </div>

      <div className='about-right'>
        <h3>About Snea-K-icks</h3>
        <h2>Real and Rare, Just BUY don't STARE</h2>
        <p>India's Premier street-wear fashion destination, Snea-K-icks deals in premium luxury apparel. Redefining the sneaker culture in India.</p>
        <p>Making exclusive kicks from Yeezys, Jordans, Anti Social Social Club, Adidas, Nike, etc more accessible to the niche yet prevalent market of sneakerheads.</p>
        <p>Snea-K-icks is more than just a marketplace; it's a community. We're dedicated to redefining streetwear culture in India and providing an exceptional shopping experience.</p>
      </div>
    </div>
  )
}

export default About