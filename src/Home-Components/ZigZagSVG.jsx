import React from 'react';
import '../App.css';

const ZigZagSVG = () => {
  return (
    <div className='zigzag-container'>
      <svg className='svg-img no-border' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,256L60,224C120,192,240,128,360,133.3C480,139,600,213,720,208C840,203,960,117,1080,80C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
      </path>
        <rect x="10" y="10" />
      </svg>
    </div>
  )
};

export default ZigZagSVG;
