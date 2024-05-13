// import React from 'react';
import '../../index.css';
import './Navbar.css';
import logo from '../../assets/logo-no-background.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// import logo from '../../assets/logo-1.jpg'
import menuItem from '../../assets/menu-icon.png'

const Navbar = () => {

  const [mobileMenu , setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 250 ? setSticky(true) : setSticky(false)
    })
  } , [])

  return (
    <nav className= {`container ${sticky ? 'dark-nav' : ""}`}>
      <img src={logo} alt="logo.png" className='logo'/>
      <ul className={mobileMenu ? '' : 'hide-mob-menu'}>
        <li className='li-item'><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li className='li-item'><Link to='buySneakers' smooth={true} offset={-260} duration={500}>Buy Sneakers</Link></li>
        <li className='li-item'><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li className='li-item'><Link to='collections' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
        <li className='li-item'><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li className='li-item'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
      </ul>

      <img src={menuItem} alt="" className='menuIcon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar