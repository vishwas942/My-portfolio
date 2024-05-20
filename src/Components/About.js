import React, { useEffect } from "react";
import pfp from "../images/portfoliocomp.png";
import comp5 from "../images/portfoliocomp5.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import "./Aboutstyle.css";

export default function About() {
  const { ref, inView } = useInView();

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  // const animation4 = useAnimation();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation1.start({
        opacity: 1,
        scale: 1,
      });
      animation2.start({
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.6,
        },
      });
      animation3.start({
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.4,
        },
      });
      // animation4.start({
      //   x:0,
      //   opacity:1,
      //   transition:{
      //     delay:0.4
      //   }
      // })
    }
    if (!inView) {
      animation2.start({
        opacity: 0,
        scale: 1.1,
      });
      animation1.start({
        opacity: 0,
        scale: 1.1,
      });
      animation3.start({
        x: 40,
        opacity: 0,
      });
      // animation4.start({
      //   x:-150,
      //   opacity:0,
      // })
    }
  }, [inView, animation1, animation2, animation3]);

  return (
    <div
      id="about"
      className="w-100 mt-2"
      style={{ height: "100vh", position: "relative", overflowX: "hidden" }}
    >
      <motion.div
        ref={ref}
        animate={animation1}
        id="heading_container"
        className="d-flex justify-content-evenly align-items-center"
      >
        <h3 className="aboutme display-6">About me</h3>
        <div
          className="bg-secondary"
          style={{ height: "1px", width: "65%" }}
        ></div>
      </motion.div>

      <motion.div className="aboutText" ref={ref} animate={animation2}>
        <p id="about_text">
        I'm a dedicated and multifaceted programmer with a passion for solving complex problems and creating exceptional digital experiences. With a strong foundation in programming languages, web development, and an eye for innovation, I'm excited to be a part of the ever-evolving tech landscape.
          <div id="aboutpoints" >
      <p>Proficiency in programming languages: C, C++, Python and Data Structures and Algorithms (DSA).</p>
      <p>Skilled in crafting visually appealing and user-friendly websites using Bootstrap, Tailwind, and React.</p>
      <p>Backend capabilities include Node.js and Express, enabling the creation of robust server-side solutions.</p>
      <p>Well-versed in efficient database management with MongoDB along with mongoose.</p>
      <p>Committed to staying updated with the latest industry trends and emerging technologies.</p>
          </div>
        </p>
      </motion.div>

      <div>
        <motion.img
          className="pfp"
          ref={ref}
          animate={animation3}
          src={pfp}
          alt="profilepicture"
        />
      </div>

      <div className="w-25">
        <motion.img
          // ref={ref} animate={animation4}
          src={comp5}
          style={{ width: "20%", position: "absolute", left: "0", bottom: "0" }}
          alt="profilepicture7"
        />
      </div>
      <div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-secondary"
        style={{
          width: "30%",
          height: "2px",
          position: "absolute",
          left: "0",
          bottom: "0",
        }}
      ></div>
    </div>
  );
}
