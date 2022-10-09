import React from 'react'
import './tools.css'
import CSS from'../../assets/css.png'
import HTML from'../../assets/html.png'
import Mongo from'../../assets/mongoDB.png'
import Express from'../../assets/express.png'
import Node from'../../assets/nodejs.png'
import Docker from'../../assets/docker.png'
import Reactjs from'../../assets/react.png'


const tools = () => {
  return (
  <section id='tools'>
    <div className="container tools__container">
    <div className='toolstitle'>
      <h1> My Tools</h1>
      </div>
    <div className='toolsrow1'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'alt='JS'></img>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png' alt='python'></img>
        <img src='https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' alt='c++'></img>
        <img src={Docker} alt='docker'></img>
        <img src={Reactjs} alt='react'></img>
        
       
        
      </div>
    <div className='toolsrow2'>
    <img src={CSS} alt='css'></img>
        <img src={HTML} alt='html'></img>
        <img src={Mongo} alt='mongo'></img>
        <img src={Express} alt='express'></img>
        <img src={Node} alt='Node'></img>
      
     

      </div>
      </div>
  </section>
  )
}

export default tools