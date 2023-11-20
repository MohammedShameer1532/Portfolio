import React, { useEffect } from 'react';
import profileimage from '../assets/profileimage.png'
import '../About-Components/about.css';
import Particle from '../About-Components/Particle';
import html5 from '../assets/html5-logo.png';
import css3 from '../assets/css3-icons.png';
import bootstrap from '../assets/bootstrap-logo.png';
import javascript from '../assets/javascript-logo.png'
import react from '../assets/react-logo.png';
import redux from '../assets/reduxlogo.webp';
import typescript from '../assets/typescript-icon.png';
import node from '../assets/nodejs.png';
import express from '../assets/expressjs.png';
import mongo from '../assets/mongodb.png';
import fire from '../assets/firebase.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
      Aos.init({ duration: 2000 });
  }, []);

  const FrontEndData = [
    {
      title: "HTML5",
      cName: "frontend-image",
      icon: html5,
      to: "https://www.w3schools.com/html/",
    },
    {
      title: "CSS3",
      cName: "frontend-image",
      icon: css3,
      to: "https://www.w3schools.com/Css/",
    },
    {
      title: "BOOTSTRAP5",
      cName: "frontend-image",
      icon: bootstrap,
      to: "https://getbootstrap.com/docs/versions/",
    },
    {
      title: "JAVASCRIPT",
      cName: "frontend-image",
      icon: javascript,
      to: "https://developer.mozilla.org/en-US/docs/Web/javascript",
    },
    {
      title: "REACT JS",
      cName: "frontend-image",
      icon: react,
      to: "https://react.dev/learn",
    },
    {
      title: "REDUX",
      cName: "frontend-image",
      icon: redux,
      to: "https://redux.js.org/",
    },
    {
      title: "TYPESCRIPT",
      cName: "frontend-image",
      icon: typescript,
      to: "https://www.typescriptlang.org/",
    }
  ]

  const ServerData = [

    {
      title: "NODE JS",
      cName: "server-image",
      icon: node,
      to: "https://www.w3schools.com/nodejs/nodejs_intro.asp",
    },
    {
      title: "EXPRESS JS",
      cName: "server-image",
      icon: express,
      to: "https://expressjs.com/",
    }
  ]

  const DataBase = [
    {
      title: "MONGODB",
      cName: "database-image",
      icon: mongo,
      to: "https://www.w3schools.com/mongodb/index.php",
    },
    {
      title: "FIREBASE",
      cName: "database-image",
      icon: fire,
      to: "https://firebase.google.com/docs/",
    }
  ]
  return (
    <div>
      <Particle />
      <div className='about-me'>
        <img className='shameer-img' src={profileimage} alt='' />
        <h1 className='name-container'>Mohammed Shameer</h1>
        <h2 className='role-container'>Front End Developer | Technology Enthusiast</h2>
        <div className='introduction' data-aos="fade-top">
          <p>Welcome to my portfolio! I'm Mohammed Shameer, a dedicated web developer with a passion for crafting innovative digital solutions. I am dedicated to delivering results, exceeding expectations, and continually honing my skills. </p>
        </div>
      </div>
      <div className='body-tag'>
        <div className='whoami' data-aos="fade-top">
          <h1>Who Am I</h1>
          <p>
            I'm a firm believer that technology can transform ideas into reality. My journey into web development started with an insatiable curiosity for coding and design. , I've honed my skills in front-end and back-end development, ensuring that user-friendly, robust, and scalable websites are at the core of my work.
          </p>
        </div>
        <div className='whatido' data-aos="fade-top">
          <h1>What I Do</h1>
          <p>My expertise lies in crafting clean, efficient code and intuitive user experiences.
            Whether it's turning wireframes into fully functional sites or optimizing performance,
            I believe in continuous learning and staying up-to-date with emerging web technologies.
            Collaborative by nature, I thrive in team environments and am always eager to share my knowledge and learn from my peers.</p>
        </div>
      </div>
  
      <div className='skill'>
        <div><h2 className='title'>My Development Stack</h2></div>
        <h3 className='fronttitle'>Front End</h3>
        <div className='frontend-container'data-aos="fade-top">
         
          <ul>
            {
              FrontEndData.map((item, index) => {
                return (
                  <li key={index}>
                    <div >
                      <a href={item.to}  target='_blank' rel="noreferrer" >
                      <img src={item.icon} alt="this is an images"  className={item.cName}/>{item.title}
                   
                      </a>
                    </div>
                  </li>
                )

              })
            }
          </ul>
        </div>
        <h3 className='servertitle'>BackEnd</h3>
        <div className='server-container' data-aos="fade-top">
          <ul>
            {
              ServerData.map((item, index) => {
                return (
                  <li key={index}>
                    <div >
                    <a href={item.to} target='_blank' rel="noreferrer">
                      <img className={item.cName} src={item.icon}   alt="" />{item.title}
                    </a>
                    </div>
                  </li>
                )

              })
            }
          </ul>
        </div>
        <h3 className='datatitle'>DataBase</h3>
        <div className='database-container' data-aos="fade-top">
          <ul>
            {
              DataBase.map((item, index) => {
                return (
                  <li key={index}>
                    <div >
                    <a href={item.to}  target='_blank' rel="noreferrer">
                      <img className={item.cName} src={item.icon} alt="" />{item.title}
                    </a>
                    </div>
                  </li>
                )

              })
            }
          </ul>
        </div>
      </div>


    </div>
  )
}

export default About;
