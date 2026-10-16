import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            I'm always happy to talk about platform architecture, AI in production and engineering leadership.
            The best way to reach me is
            <a href="mailto:leonid.abasov@gmail.com"> leonid.abasov@gmail.com</a>,
            or connect with me on
            <a href="https://www.linkedin.com/in/vosaba/" target="_blank" rel="noreferrer"> LinkedIn</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
