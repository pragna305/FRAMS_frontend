import React from 'react';
import './style.css';
import './Ab.css'; 
import Header1 from './Header1';
function Ab() {
    return(
        <>
        <Header1/>
        <div id='ab'>
        <br/><br/><br/><br/><br/>
      <div id='Ab' className="main">
    <h1 className="text" >Choose an option:-</h1>
    <br/>
    <div className="card">
        <div className="card-body">
          <h5 className="card-title">Vacancies</h5>
          <p className="card-text">Check the list of vacancies and apply now</p>
          <a href="/Vacancies" className="btn btn-primary">Click here</a>
        </div>
      </div>
    {/* <!-- <a href="vacancies.html">
    <button style="color: aliceblue;" type="button" className="btn btn-primary btn-lg">Vacancies</button>
</a> --> */}
    <br/>
<button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Notifications</h5>
          <p className="card-text">Get notified for every new Vacancy</p>
        </div>
      </div>
  </button>
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Notifications</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          Would you like to receive notifications for upcoming vacancies?
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Yes</button>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>
</div>
<br/><br/>
<br></br>
<br/><br/>
<br></br>
</div>
        </>
    );
    
}

export default Ab;