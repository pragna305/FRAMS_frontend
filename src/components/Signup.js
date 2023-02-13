import React from "react";
import './style.css';
import './signup.css';
import Header from "./Header";

function Signup(){
    return(
        <>
        <Header/>
        <div id="signupcss">
        <div className="pt-5">
      <h1 className="text-center">Signup Page</h1>

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
                _lpchecked="1">
                <input
                  type="hidden"
                  name="_csrf"
                />
                <div className="form-group required">
                  <label htmlFor="username">Enter Username</label>
                  <input
                    type="text"
                    className="form-control text-lowercase"
                    id="username"
                    required=""  
                    name="username"
                  />
                </div>
                <input
                  type="hidden"
                  name="_csrf"
                />
                <div className="form-group required">
                  <label htmlFor="username">Enter Email</label>
                  <input
                    type="text"
                    className="form-control text-lowercase"
                    id="username1"
                    required=""  
                    name="username"
                  />
                </div>
                <div className="form-group required">
                  <label
                    className=""
                    htmlFor="password"
                    >Enter Password
                    </label
                  >
                  <input
                    type="password"
                    className="form-control"
                    required=""
                    id="password"
                    name="password"
                  />
                  </div>
                  <br/>
                  <div className="form-group required">
                    <label
                      className=""
                      htmlFor="password"
                      >Re-Enter Password
                      </label
                    >
                    <input
                      type="password"
                      className="form-control"
                      required=""
                      id="password1"
                      name="password"
                    />
                </div>
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
                      >Remember me?</label
                    >
                  </div>
                </div>
                <a href="/Ab">
                  <button type="button">Signup</button>
                </a>
              </form>
              <p className="small-xl pt-3 text-centered">
                <span className="text-muted">Already have an account?</span>
                <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        </>
    );
}

export default Signup;