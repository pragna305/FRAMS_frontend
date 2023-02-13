import React from 'react';
import './style.css';
import './About.css';
import Header1 from './Header1';
function About(){
    return(
        <>
        <Header1/>
    <br/>
    <section className="about">
      <div className="main">
        {/* <img className="aboutimage" alt="reload" /> */}
        <div id='img'></div>
        <div className="about-text">
          <h1>About us</h1>
          <br/>
          <h4>What is faculty recruitment and monetoring system?</h4>
          <p>
            This will indicate the future vacancies and positions for proper
            planning and recruitment of faculty. All the data of faculties who
            are retiring or leaving the institute will be updated in the app and
            simultaneously faculties who are available for that position and who
            are ready to join will be notified.
          </p>
          <a href="/Contact">
          <button type="button">contact</button>
        </a>
        </div>
      </div>
    </section>
    </>
    );
}

export default About;