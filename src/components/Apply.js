import React from "react";
import './style.css';
import './Apply.css';
import Header1 from "./Header1";
function Apply(){
    return(
        <>
        <Header1/>
    <div id="applycss">
        <br/><br/>
	<h1 className="txt" >Application</h1>
	<form id="form">
		<div className="form-control">
			<label htmlFor="name" id="label-name">
				Name
			</label>
			<input type="text"
				id="name"
				placeholder="Enter your name"/>
		</div>

		<div className="form-control">
			<label htmlFor="email" id="label-email">
				Email
			</label>

			<input type="email"
				id="email"
				placeholder="Enter your email" />
		</div>

		<div className="form-control">
			<label htmlFor="age" id="label-age">
				Which Position are you applying for?
			</label>

			<input type="text"
				id="age"
				placeholder="Enter position" />
		</div>

		<div className="form-control">
			<label htmlFor="role" id="label-role">
				What is your experience?
			</label>
			<select name="role" id="role">
				<option >0-2 years</option>
				<option >2-6 years</option>
				<option>
					above 6 years
				</option>
				<option >Other</option>
			</select>
		</div>

		<div className="form-control">
			<label>
				Which institute are you applying for?
			</label>
			
			<label htmlFor="recommed-1">
				<input type="radio"
					id="recommed-1"
					name="recommed">KMIT</input>
			</label>
			<label htmlFor="recommed-2">
				<input type="radio"
					id="recommed-2"
					name="recommed">NGIT</input>
			</label>
			<label htmlFor="recommed-3">
				<input type="radio"
					id="recommed-3"
					name="recommed">KMEC</input>
			</label>
		</div>

		<div className="form-control">
			<label htmlFor="comment">
				Upload resume
			</label>
            <input type="file" 
               id="file1" 
               name="upload"/>
		</div>
		<button type="submit" value="submit">
			Submit
		</button>
	</form>
    </div>
    </>
    );
}

export default Apply;