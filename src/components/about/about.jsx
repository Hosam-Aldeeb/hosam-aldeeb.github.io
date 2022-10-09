import React, { useEffect} from 'react'
import './about.css'
import ME from'../../assets/Work 03.jpg'
import { init } from 'ityped'
import {useRef}from'react'

const About = () => {

 const textRef=useRef()

 useEffect(()=>{
  init(textRef.current,{
    showCursor:true,
    backSpeed:  50,
    typeSpeed:  100,
    backDelay:  900,
    
    strings:['Welcome to my Page!','I am an Engineer.','I write code.',"I am a SWE Master's student @ UWaterloo.","Get to know me better by connecting!",
    "Check out my old & ongoing projects on my Github!"]
  })
 }, []);
 
  return (
    <section id='about'>
    <div className="container about__container">
      <div className='about__me'>
      <h1> <span ref={textRef}> </span></h1>
      
       
        </div>
      <div className="about__me-image">
        <img src={ME} alt='Image'/>
        </div>
        
      
    </div>
    </section>
  )
}

export default About