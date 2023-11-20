import React, { useEffect } from 'react';
import homepage from '../assets/homepage.svg';
import Carousel from './Carousel';
import fullstack from '../assets/fullstack-image.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../App.css";


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <div className='home-container' >
            <div className='nametitle-container'>
                <div className='header-container' data-aos="fade-top">
                    <h2 className='header-name'>Hello I am <br></br>Mohammed Shameer<br></br>Front End Developer</h2>
                </div>
                <img className='hpimg' src={homepage} alt='svg for design'></img>
            </div>
            <div className='motive-line'>
                <div>
                    <div className="label-name" data-aos="fade-top" >Success is not final,<br></br> failure is not fatal<br></br> It is the courage to continue that counts</div>
                    <div className="blob"></div>
                </div>
            </div>
            <div>
                <Carousel />
            </div>
            <div className='fullabout-container'>
                <div data-aos="fade-top" className='about-carousel'>
                    React.js is a powerful <br></br>front end JavaScript library<br></br> for building user interfaces<br></br> and single-page applications.<br></br>
                </div>
                <div className='full-container'>
                    <img className='full-image' src={fullstack} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Home;
