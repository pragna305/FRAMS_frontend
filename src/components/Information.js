import React from "react";
import './style.css';
import './Information.css';
import Header1 from "./Header1";
function Information(){
    return(
        <>
        <Header1/>
        <div id="info" >
         <br/><br/>
      <div className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div>
      <br/>
      <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        FILTER
      </a>
      
      <div className="offcanvas offcanvas-start"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Filter by
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Position</a></li>
              <li><a className="dropdown-item" href="#">Institute</a></li>
            </ul>
          </div>
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Institite
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">KMIT</a></li>
              <li><a className="dropdown-item" href="#">NGIT</a></li>
            </ul>
          </div>
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Position
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Position</a></li>
              <li><a className="dropdown-item" href="#">Position</a></li>
            </ul>
            <div>
              <br></br>
      <button>
        Apply
      </button>
    </div>
          </div>
        </div>
      </div>
        <br/><br/>
    <table className="purple">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Institute</th>
            <th>Faculty name</th>
            <th>Position</th>
            <th>Working status(Working or retired)</th>
            <th>Vacancy(Yes/No)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>KMIT</td>
            <td>ABC</td>
            <td>Position</td>
            <td>Working</td>
            <td>NO</td>
          </tr>
          <tr>
            <td>2</td>
            <td>NGIT</td>
            <td>ABC</td>
            <td>Position</td>
            <td>Retired</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>3</td>
            <td>KMIT</td>
            <td>ABC</td>
            <td>Position</td>
            <td>Retired</td>
            <td>NO</td>
          </tr>
          <tr>
            <td>4</td>
            <td>KMEC</td>
            <td>ABC</td>
            <td>Position</td>
            <td>Working</td>
            <td>NO</td>
          </tr>
          <tr>
            <td>5</td>
            <td>KMEC</td>
            <td>ABC</td>
            <td>Position</td>
            <td>Working</td>
            <td>NO</td>
          </tr>
          <tr>
            <td>6</td>
            <td>NGIT</td>
            <td>ABC</td>
            <td>Position</td>
            <td>Retired</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>7</td>
            <td>KMIT</td>
            <td>ABC</td>
            <td>Position</td>
            <td>Working</td>
            <td>NO</td>
          </tr>

        </tbody>
      </table>
      <br/>
      <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
    
        </>
    );
}

export default Information;