import React from "react";
import './style.css';
import './Postajob.css';
import Header from "./Header";

function Postajob() {
    return(
        <>
        <Header/>
<div id="postcss">
        <br></br>
<div clas="text">
  <h1  >POsT Jobs HERE</h1>
</div>
<section id="sec">
  <div className="Container">
      <form>
          <div className="step step-1 Active">
              <div className="form-Group">
                  <label htmlFor="firstName">Institite</label>
                  <input type="Text" id="firstName" name="first-Name" />
              </div>
              <div className="form-Group">
                  <label htmlFor="lastName">faculty position</label>
                  <input type="Text" id="lastName" name="last-Name" />
              </div>
              <div className="form-Group">
                  <label htmlFor="NickName">Application criteria</label>
                  <input type="Text" id="NickName" name="Nick-Name" />
              </div>
              <button type="button" className="Next-btn">POST</button>
          </div>

      </form>
  </div>
  </section>
  <button id="btn" type="button">
      Add
  </button>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
</div>
        </>
        
    );
    
}

export default Postajob;