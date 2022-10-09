import React from 'react'
import'./navlink.css'

const NavLink = (props) => {
  return (
    <div class='navlink'>
    <a onClick={() => props.isMobile && props.closeMobileMenu()}href='#about'>About Me</a>
    <a onClick={() => props.isMobile && props.closeMobileMenu()}href='https://drive.google.com/file/d/1L0UpUtgLO_taIne86BlE4bFIUFOx2PZb/view?usp=sharing'target='_blank'>Resume</a>
    <a onClick={() => props.isMobile && props.closeMobileMenu()}href='#tools'>Tools</a>
    <a onClick={() => props.isMobile && props.closeMobileMenu()}href='#contact'>Contact</a>
    </div>
  )
}

export default NavLink