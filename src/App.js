import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home-Components/Home';
import About from './About-Components/About';
import Project from './Project-Components/Project';
import Contact from './Contact-Components/Contact';
import Navbar from './Home-Components/Navbar';
import Resume from './Resume-Components/Resume';
import ZigZagSVG from '../src/Home-Components/ZigZagSVG';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import './App.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className='linked-container'>
            <ZigZagSVG />
            <div className='linkedin-item'>
              <Link href='https://www.linkedin.com/in/a-mohammed-shameer-60454623b/' target="_blank">
                <LinkedInIcon className='linkedin-logo' />
              </Link>
              <Link href='https://github.com/MohammedShameer1532' target="_blank">
                <GitHubIcon className='git-logo' />
              </Link>
              <Link href='https://www.instagram.com/mshameer260/' target="_blank">
                <InstagramIcon className='insta-logo' />
              </Link>
              <a href='https://www.facebook.com/a.mdshameer.a.mdshameer' rel='noreferrer' target="_blank">
                <FacebookIcon className='facebook-logo' />
              </a>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
