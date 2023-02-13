import React from "react";
import './style.css'
import './F11.css';
import Header1 from "./Header1";
function F11(){
    return(
        <>
        <Header1/>
        <div id="bg">
        <br/><br /><br /><br /><br />
        <div id="maincss" className="main">
            <h1>Choose an option:-</h1>
            <br/>
                <div>
                    <a href="Information">
                        <button type="button" className="btn btn-primary btn-lg">Faculty Information upload/update</button>
                    </a>
                    <br /><br />
                </div>
                <div>
                    <a href="/Postajob">
                        <button type="button" className="btn btn-secondary btn-lg">Post a job</button>
                    </a>
                </div>
            </div>
            </div>
        </>
                );
                }

export default F11;