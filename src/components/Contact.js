import React from 'react';
import './style.css';
import './Contact.css';
import Header1 from "./Header1";
function Contact(){
  return (
    <>
    <Header1/>
    <div id='contact'>
<div className="container">
    <div className="content">
      <div className="left-side">
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">xxxxxxxxxxxx</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">yyyyyyyyy@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
          
        </div>
        <div className="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
  </>
  );
  }

export default Contact;