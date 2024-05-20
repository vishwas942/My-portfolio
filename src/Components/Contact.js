import React, {useEffect, useRef} from 'react'
import sidecomp from '../images/portfoliocomp57.png'
import maincomp from '../images/portcomp67.png'
import {motion, useAnimation, useInView} from 'framer-motion'
import emailjs from 'emailjs-com'

import './Contactstyle.css'

export default function Contact() {

  const form1 = useRef();
  // const [state, setState] = useState({ email: "", message: "" });
  // function reset(e) {
  //   e.preventDefault()
  //   setState({name:"", email: "", message: "" });
  // }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_s3trg5h', 'template_rc6ztpo', form1.current, 'fnv-NZBpdWY0UWUE0')
    .then((result) => {
      console.log(result.text);
      form1.current.reset();
      alert("Message sent successfully");
  }, (error) => {
      console.log(error.text);
  });

      
  };

  const ref = useRef();
  const isInView = useInView(ref);

    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation()

  useEffect(()=>{
        if(isInView){
          animation1.start({
            x:0,
            opacity:1,
            transition:{
              delay:0.4
            }
          })
          animation2.start({
            y:0,
            opacity:1,
            transition:{
              delay:0.9
            }
          })
          animation3.start({
            opacity:1,
            scale:1,
            transition:{
              delay:0.2
            }
          })
          animation4.start({
            opacity:1,
            transition:{
              delay:0.8
            }
          })
        }
        if(!isInView){
          animation1.start({
            x:-60,
            opacity:0,
          })
          animation2.start({
            y:-100,
            opacity:0
          })
          animation3.start({
            opacity:0,
            scale:0.6
          })
          animation4.start({
            opacity:0,
           
          })
        }
  }, [isInView, animation1,animation3, animation2, animation4])


  return (
    // 
    <div id='contact' className='Contact_container'>

        <div className='whitecomp2'  >
            <img  style={{width:"100%"}} src={sidecomp} alt='sidecomponent' />
        </div>
        <div className='green_comp'>
            <motion.img className='green' ref={ref} animate={animation1} src={maincomp} alt='sidecomponent' />
        </div>

        <motion.form className='Contact_form' ref={ref} animate={animation3} >
          <h3 className='Con_head display-6' style={{ textAlign:"center", color:"#2ADFAF" }}>Let's get in touch</h3>
          <p id='Touch_text' >Say Hello! anytime. Let's talk tech and explore new opportunities together!</p>
          <button id='Hello' className='btn'type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Say Hello!</button>     
        </motion.form>


{/* Modal */}
<button type="button" className="btn btn-primary d-none"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"></button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-dark" style={{color:'white'}}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form ref={form1} >
          <div className="mb-3">
            <label type="text" htmlFor="recipient-name" className="col-form-label">Your Email:</label>
             <input 
        //      value={state.email}
        // onChange={(e) => {
        //   setState({ ...state, email: e.target.value });
        // }} 
        name='email'  type="email" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label type="text" htmlFor="recipient-subject" className="col-form-label">Your Name:</label>
            <input
        //      value={state.name}
        // onChange={(e) => {
        //   setState({ ...state, name: e.target.value });
        // }} 
        name='name' type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Message:</label>
            <textarea 
        //     value={state.message}
        // onChange={(e) => {
        //   setState({ ...state, message: e.target.value });
        // }} 
        name='message' className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="submit" onClick={sendEmail} className="btn" style={{backgroundColor:"#13A66C"}}>Send Message</button>
      </div>
    </div>
  </div>
</div>
{/*Modal ends*/}



{/* Logo links */}

      <motion.div ref={ref} animate={animation2} className='logo_container d-flex flex-column justify-content-evenly align-items-center '>
        <div className='bg-secondary' style={{width:"1px", height:"70%"}}></div>

      <a href='https://www.linkedin.com/in/vishwas-agarwal-58a120248/' > 
       <motion.div whileHover={{scale:1.2, opacity:1}} style={{width:"auto", opacity:"0.6"}}><i id='linkedin' className="fa-brands fa-linkedin fa-2x" style={{color: "#13B690"}}></i></motion.div>
      </a>

      <a href='https://github.com/vishwas942'>
        <motion.div whileHover={{scale:1.2, opacity:1}} style={{width:"auto", opacity:"0.6"}}><i id='github' className="fa-brands fa-github fa-2x" style={{color: "#13B690"}}></i>
        </motion.div>
        </a>

      </motion.div>

{/* logo links end */}


{/* Copy rights and email contact */}
<motion.div ref={ref} animate={animation3} className="Ending_element">
  <p style={{textAlign:"center", marginBottom:"0"}} ><i id='mail' class="fa-solid fa-envelope fa-xl" style={{color:"#13B690", paddingRight:"8px"}}></i>vishwasc152@gmail.com</p>


<p style={{textAlign:"center"}} >Designed and built by - Vishwas Agarwal</p>
</motion.div>
{/* Copy rights and email contact */}


    </div>
  )
}
