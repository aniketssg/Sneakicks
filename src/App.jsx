// import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import BuySneakers from './components/BuySneakers/BuySneakers'
import Title from './components/Title/Title'
import About from './components/About/About'
import Collections from './components/Collections/Collections'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {

  const [playState , setPlayState] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our brand collabs' title='What we Offer'/>
        <BuySneakers />
        <About setPlayState = {setPlayState}/>
        <Title subTitle='Gallery' title='Kicks Photos'/>
        <Collections />
        <Title subTitle='TESTIMONIALS' title='What SNEAKERHEADS think about us.'/>
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState = {playState} setPlayState = {setPlayState}/>
    </div>
  )
}

export default App