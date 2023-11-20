import React from 'react';
import '../Home-Components/carousel.css';
import html5 from '../assets/html5-logo.png';
import bootstrap from '../assets/bootstrap-logo.png';
import javascript from '../assets/javascript-logo.png'
import react from '../assets/react-logo.png';
import nodejs from '../assets/nodejs.png';
import expressjs from '../assets/expressjs.png';
import mongodb from '../assets/mongodb.png';

const Carousel = () => (
  <div className="carousel-container">
    <div className='titleof-carousel'>
      Web Technologies I Use
    </div>
    <div className="carousel">
      <img src={html5} alt="HTML5" />
      <img src={bootstrap} alt="Bootstrap" />
      <img src={javascript} alt="JavaScript" />
      <img src={react} alt="React" />
      <img src={nodejs} alt="Node.js" />
      <img src={expressjs} alt="Express.js" />
      <img src={mongodb} alt="MongoDB" />
    </div>
  </div>
);

export default Carousel;

