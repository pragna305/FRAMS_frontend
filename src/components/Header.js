import React from 'react';
import './style.css';

function Header(){
  return (
    <>
    <nav id="navb" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">FR</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav -auto ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link bi bi-house-fill" aria-current="page" href="/Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bi bi-file-earmark-post-fill" aria-current="page" href="/F11">Post a job</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bi bi-newspaper" aria-current="page" href="/Ab">Find a job</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bi bi-ticket-fill" href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bi bi-person-lines-fill" href="/Contact">Contact us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bi bi-sign-turn-right-fill" href="/Login">Login/Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Header;
