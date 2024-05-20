import React from 'react'
import img1 from '../images/logo3.png'
import {motion} from 'framer-motion'
import CV from '../images/resume.pdf'

import './Navbarstyle.css'

export default function Navbar() {


  return ( 

    // Navbar starts
    <motion.div id='navcomp' initial={{y:-90, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.1}} ><nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" style={{overflow: "hidden"}}>

    <div className="container-fluid">

    <a href='#home'><motion.img initial={{ x:-150 }} animate={{x:0, rotate:360}} transition={{delay: 2.5}} src={img1} alt="Bootstrap" width={68} height={50} className='Navlogo' />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto me-5 d-flex justify-content-around mb-lg-0"  style={{width: "35%"}}>
          <li className="nav-item">
            <motion.a id='About'  initial={{x:-50, opacity:0}} animate={{x:0, opacity:1}} transition={{delay: 0.5}} className="nav-link active fs-5" aria-current="page" href="#about">About</motion.a>
          </li>
          <li className="nav-item">
            <motion.a id='Project' initial={{x:-50, opacity:0}} animate={{x:0, opacity:1}} transition={{delay: 0.8}}  className="nav-link active fs-5" href="#projects">Projects</motion.a>
          </li>
          <li className="nav-item">
            <motion.a id='Contact' initial={{x:-50, opacity:0}} animate={{x:0, opacity:1}} transition={{delay: 1.1}}  className="nav-link active fs-5" href="#contact">Contact</motion.a>
          </li>
          <li className="nav-item">
            <a href={CV}>
          <motion.button initial={{scale:5, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay: 1.6}} className="btn btn-outline-success fs-5" type="submit">Resume</motion.button>
          </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      
    </motion.div>


    
  )
}
