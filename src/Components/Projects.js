import React, {useEffect, useRef} from 'react'
// import card12 from '../images/Monarchcard.png'
import comp7 from '../images/portfoliocomp7.png'
import comp8 from '../images/component5.png'
import {motion, useAnimation, useInView} from 'framer-motion'
import mystore from '../images/mystore.png'
import inotebook from '../images/inotebook.png'
import mini from '../images/mini.png'

import  './Projectstyle.css'

export default function Projects() {


  const ref = useRef();
  const isInView = useInView(ref);

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
useEffect(()=>{
    if(isInView){
        animation1.start({
          x:0,
          opacity:1,
          transition:{
            delay:'0.8'
          }
        })
        animation2.start({
          opacity:1,
       
        })
        animation3.start({
          opacity:1,
         
          transition:{
            delay:0.5
          }
        })
    }
    if(!isInView){
        animation1.start({
          x:-30,
          opacity:0
        })
        animation2.start({
          opacity:0,
        })
        animation3.start({
          opacity:0,
        })
    }
}, [isInView, animation1, animation2, animation3])


  return ( 
    <div id='projects' className='Project_container' style={{color:"white", position:"relative", overflowX:"hidden"}}>

    {/* Title */}
      <motion.div ref={ref} animate={animation2} id='Project_header' className='d-flex flex-row justify-content-center align-items-center position-absolute' >
      <div className='bg-secondary' style={{width:"18%", height:"2px"}} ></div>
      <h2 className='Projecttitle display-6 px-3'>Projects I worked on</h2>
      <div className='bg-secondary' style={{width:"18%", height:"2px"}} ></div>
     </motion.div>
     {/* title ends */}


    {/* Carousal begins */}

      <motion.div ref={ref}  animate={animation3}
       className='proj_display position-absolute' >
     <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={mystore} className="d-block" alt="..." style={{"width":"95%",'filter':"brightness(65%)"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>Ecommerce Store</h5>
        <p>MERN stack based Ecommerce store.</p>
      </div>
    </div>
     <a href='https://github.com/vishwas942/iNotebook' >
    <div className="carousel-item">
       <img src={inotebook} className="d-block w-100" alt="..." style={{'filter':"contrast(75%)"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>iNotbook - Note application</h5>
        <p>Mern stack based Notes application</p>
      </div>
    </div>
       </a>
       <a href='https://github.com/vishwas942?tab=repositories' >
    <div className="carousel-item">
      <img src={mini} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Mini Projects</h5>
        <p>Basic HTML/CSS/JS Applications</p>
      </div>
    </div>
    </a>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</motion.div>

{/* Corousal ends */}

<div className='Greencomp'>
      <motion.img ref={ref} animate={animation1} src={comp7} style={{width:"100%"}} alt='component1' />
</div>
<div className='whitecomp' >
<img src={comp8} style={{width:"100%"}} alt='component1' />
  </div> 


    </div>
  )
}
