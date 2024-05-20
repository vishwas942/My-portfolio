import React, {useEffect, useRef} from 'react'
import element1 from '../images/component12.png'
import element2 from '../images/component2.png'
import element3 from '../images/component31.png'
import {motion, useAnimation, useInView} from 'framer-motion'

import './Homestyle.css';


export default function Firstslide() {

  const ref = useRef();
  const isInView = useInView(ref);

    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();

    useEffect(()=>{
        if(isInView){
          animation1.start({
            x:0, opacity:1,
            transition:{
              delay:1
            }
          })
          animation2.start({
            x:0, opacity:1,
            transition:{
              delay:0.7
            }
          })
          animation3.start({
            x:0,
            opacity:1,
            transition:{
              delay:0.7
            }
          })
        }
        if(!isInView){
          animation1.start({
            x:40, opacity:0
          })
          animation2.start({
            x:40, opacity:0,
          })
          animation3.start({
            x:-20,
            opacity:0,
          })
        }
    }, [isInView, animation1, animation2, animation3, animation4])


  return (

    <div id='home' className='w-100 mt-2' style={{height:"99vh", color:"white" ,position:"relative"}}>

        <div className="containermain" >
            <p className='headline display-6' >Hi, My name is </p>
            <h1 id='about_heading' className='display-1'  >Vishwas Agarwal.</h1>
            <hr/>
            <p className='about_text'>A versatile and  skilled programmer, proficient in both web development and data structures and algorithms (DSA), I am dedicated to crafting dynamic digital experiences and solving complex computational challenges. With a strong foundation in front-end and back-end technologies, including expertise in the MERN stack (MongoDB, Express, React, and Node.js) and other Frameworks, I have a proven track record of designing and developing robust, user-friendly websites and web applications.</p>           
        </div>

      <div>
        <motion.img ref={ref} animate={animation1} initial={{x:50, opacity:0}} src={element2} alt='component2'  style={{width:"28%", position:"absolute" , bottom:"0" , right:"15%", zIndex:"1"}}/> 
        <motion.img ref={ref} initial={{x:50, opacity:0}} animate={animation2} src={element1} alt="component1"  style={{width:"36%", position:"absolute" , bottom:"0", right:"0%", zIndex:"2"}} /> 
        <motion.img ref={ref}  initial={{x:-50, opacity:0}} animate={animation3} src={element3} alt='component2'  style={{width:"10%", position:"absolute" , bottom:"0" , left:"0%"}}/>
        <motion.div  initial={{x:20, opacity:0}} animate={{x:0, opacity:1}} className='w-50 bg-secondary' style={{height:"3px", position:"absolute", right:"0",  bottom:"0" }}></motion.div>
      </div>

    </div>

  )
}
