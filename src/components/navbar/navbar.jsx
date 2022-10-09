import React from 'react'
import'./navbar.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from'react-icons/bs'
import Logo from'../../assets/HA2.png'
import {GiHamburgerMenu} from'react-icons/gi'
import { useState } from 'react'
import NavLink from './NavLink'

const Navbar = () => {
 const [open,setOpen]=useState(false);
 const closeMobileMenu= () => setOpen(false);
  return (
    
    <nav >
      <div class='leftnav'>
      <div className="logo">
        <img src={Logo} alt='Image'/>
        </div>
        <a class='hosam'href='#'>Hosam Aldeeb | </a>
        <a class='linkedin' href='https://linkedin.com/in/Hosam-Aldeeb-3ald' target="_blank"><BsLinkedin/></a>
        <a class='github' href='https://github.com/Hosam-Aldeeb' target="_blank"><BsGithub/></a>
        
      </div>
      <div class='rightnav'>
        <a href='#about'>About Me</a>
        <a href='https://drive.google.com/file/d/1L0UpUtgLO_taIne86BlE4bFIUFOx2PZb/view?usp=sharing'target='_blank'>Resume</a>
        <a href='#tools'>Tools</a>
        <a href='#contact'>Contact</a>
        </div>
        <div class='hamburger'>
        <a class='hamburgericon'><GiHamburgerMenu size='45px'onClick={()=> setOpen(!open)}/>
        {open && <NavLink isMobile={true} closeMobileMenu={closeMobileMenu}/>}</a>
        
        </div>
        
      
    </nav>
  )
}

export default Navbar