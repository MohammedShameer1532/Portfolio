import React, { useRef, useState } from 'react';
import '../Contact-Components/contact.css';
import contact  from '../assets/contact-us.webp';
import emailjs from '@emailjs/browser';
 
const Result =()=>{
  return(
    <p>
      Your message has been successfully sent.I will contact you soon
    </p>
  );
};

const Contact = () => {
  const [result,showResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('mohammed_abdul15', 'template_a9sw1ej', form.current, 'H4gUEdOg3eAQmfKo-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
  setTimeout(() => {
    showResult(false)
  }, 5000);
  return (
    <div>
      <div className='contact-form' >
        <img  className='contact-image' src={contact} alt='' />
        <form action='' ref={form} onSubmit={sendEmail} className='form-container'>
          <h2 className='contact-title '>Contact Us</h2>
          <input type="text" placeholder='FirstName' name='FirstName' required/><br></br>
          <input type="text" placeholder='LastName' name='LastName' required/><br></br>
          <input type='number' placeholder='PhoneNumber' name='PhoneNumber' required/><br></br>
          <input type="email" placeholder='Email' name='Email' required/><br></br>
          <textarea className='text-area' placeholder="Message Me" name='Message' required/><br></br>
          <button className='btn btn-primary' type='submit'>Submit</button>
          <div>{result ? <Result/>: null}</div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
