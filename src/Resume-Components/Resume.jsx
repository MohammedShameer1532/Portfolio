import React, { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import mohammed from '../Resume-Components/mohammed.pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../Resume-Components/Resume.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import motive from '../assets/resumemotive.jpg';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const containerRef = useRef(null);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };


  useEffect(() => {
    const handleResize = (entries) => {
      const newWidth = entries[0].contentRect.width;
      setWindowWidth(newWidth);
    };

    if (containerRef.current) {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [containerRef]);
  return (
    <div>
      <div>
        <img className='inspiration-image' src={motive} alt='' />
      </div>
      <div   className='inspiration-container'>
        <p className='motive'>“The harder you work for something, the greater you’ll feel when you achieve it.”<br></br>
          “Don’t stop when you’re tired. Stop when you’re done.”
        </p>
      </div>
      <div>
        <div>
          <a href={mohammed} download="Resume.pdf">
            <button className='download-btn btn btn-primary'>Download Resume</button>
          </a>
        </div>
        <div ref={containerRef} className='resume-container'>
          <Document  file={mohammed} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (_, i) => (
              <Page key={`page_${i + 1}`} pageNumber={i + 1} width={windowWidth} />
            ))}
          </Document>
        </div>
      </div>

    </div>
  );
};

export default Resume;
