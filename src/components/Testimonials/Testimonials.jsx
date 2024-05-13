// import React from 'react';
import './Testimonials.css';
import next from '../../assets/next-icon.png';
import back from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
import { useRef } from 'react';


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

   const slideForward = () => {

    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

   }

   const slideBackward = () => {

    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

   }

  return (
    <div className='testimonials'>
      <img src={next} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>

          <li>
            <div className='slide'>
              <div className='userInfo'>
                <img src={user1} alt="" />
                <div>
                  <h3>Sarah</h3>
                  <span>New Delhi</span>
                </div>
              </div>
              <p>The quality of the sneakers that Snea-K-icks provide
                is no doubt the best in the market. The community that 
                they're building in India for sneakerheads is just 
                awesome. Worth the hype. Cheers!
              </p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='userInfo'>
                <img src={user2} alt="" />
                <div>
                  <h3>Tarun</h3>
                  <span>Hyderababd</span>
                </div>
              </div>
              <p>The best in business, 100% real and authentic kicks.
                The price that they offer for the rare ones is something
                that I can only dream of. Thank you for existing
                SNEA-K-ICKS.
              </p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='userInfo'>
                <img src={user3} alt="" />
                <div>
                  <h3>Eleven</h3>
                  <span>Los Angeles</span>
                </div>
              </div>
              <p>Dude they delivered the sneakers that I wanted 
                in just 10 days that too in NY, USA. I am so
                impressed right now. Gonna boast my friends and flex
                my new pair of kicks that are super rare rn.
              </p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='userInfo'>
                <img src={user4} alt="" />
                <div>
                  <h3>Redfeet</h3>
                  <span>Mumbai</span>
                </div>
              </div>
              <p>I will say they deliver authentic sneakers within a week, Oh!
                sorry did I say sneakers? They deliver happiness to your 
                doorstep inside a week and that too at a price you couldn't 
                imagine. 
              </p>
            </div>
          </li>

        </ul>
      </div>
    </div>
    
  )
}

export default Testimonials