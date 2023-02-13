import React from 'react';
import Header from './Header';
import './style.css';


function Login(){
    return(
        <>
        <Header/>
        <div id='loginimg'>
        <div className="pt-5">
      <h1 className="text-center">Login Page</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card card-body">
              <form
                id="submitForm"
                action="/login"
                method="post"
                data-parsley-validate=""
                data-parsley-errors-messages-disabled="true"
                noValidate=""
                _lpchecked="1"
              >
                <input
                  type="hidden"
                  name="_csrf"/>
                <div className="form-group required">
                  <label htmlFor="username">Username / Email</label>
                  <input
                    type="text"
                    className="form-control text-lowercase"
                    id="username"
                    required=""  
                    name="username"
                  />
                </div>
                <div className="form-group required">
                  <label
                    className=""
                    htmlFor="password"
                    >Password
                    </label>
                  <input
                    type="password"
                    className="form-control"
                    required=""
                    id="password"
                    name="password"
                  />
                </div>
                <a id='acss'
                  className="ml-auto border-link small-xl"
                      href="/forget-password"
                      >Forget?</a>
                <div className="form-group mt-4 mb-4">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="remember-me"
                      name="remember-me"
                      data-parsley-multiple="remember-me"
                    />
                    <label className="custom-control-label" htmlFor="remember-me"
                      >Remember me?</label>
                  </div>
                </div>
                <a href="/Ab">
                  <button type="button">Login</button>
                </a>
              </form>
              <p className="small-xl pt-3 text-centered">
                <span className="text-muted">Not a member?</span>
                <a href="/signup">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>  
    <br></br>
    <br></br>
    </div> 
    </>  
    );
}

export default Login;