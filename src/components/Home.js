import React from 'react';
import './style.css';
import './Home.css';
import Header from './Header';

function Home(){
    return(
       <>
       <Header/>
    <div id='Home'>
    <marquee className="stext" behavior="scroll" direction="left">Scrolling notifications!!</marquee>
    {/* <!-- <img className="background-image" width="1497" height="630" src="img.jpg" alt="image">
    <div className="overlay-text"></div>
    <h1>Welcome to website</h1> --> */}
    <div className="text">
      {/* <!-- <img  className="background-image" width="1497" height="630" src="https://www.pexels.com/photo/light-workspace-with-laptop-and-glass-of-coffee-6177685/" alt="image"> --> */}
      <div className="background-image"></div>
      <div className="overlay-text">
        <h1>Welcome to website</h1>
      <div className='para'><p>Faculty recruitment and monitoring system</p></div> 
      </div>
    </div>
    </div>


<footer className="footer">
  <div className="bottom-links">
    <div className="links">
      <span>More Info</span>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
    <div className="links">
      <span> Links</span>
      <a href="#"><i ></i></a>
      <a href="#"><i ></i></a>
      <a href="#"><i ></i></a>
    </div>
  </div>
</footer>
</>
    );
}

export default Home;