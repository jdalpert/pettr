import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Button } from 'react-bootstrap';

//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class Signup extends Component {

	constructor(props) {
		super(props);
	}

	_handleClick = () => {
		this.context.router.push("/");
	};

	render() {
		return(
			<div>
				<div className="signup main-content">
					<div className="col-sm-7">
						<h1>Sign Up </h1>
						<form action="" className="signup-form"> 
							<label htmlFor="first-name">First Name:</label><br/>
							<input type="text" id="first-name"/><br/>
							<label htmlFor="last-name">Last Name:</label><br/>
							<input type="text" id="last-name"/><br/>
							<label htmlFor="email">Email:</label><br/>
							<input type="text" id="email"/><br/>
							
							<div class="form-group">
								<label for="state" class="col-sm-2 control-label">State</label>
								<div class="col-sm-10">
									<select class="form-control" id="state" name="state"><br/>
										<option value=""></option>
										<option value="AK">Alaska</option>
										<option value="AL">Alabama</option>
										<option value="AR">Arkansas</option>
										<option value="AZ">Arizona</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DC">District of Columbia</option>
										<option value="DE">Delaware</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="IA">Iowa</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="MA">Massachusetts</option>
										<option value="MD">Maryland</option>
										<option value="ME">Maine</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MO">Missouri</option>
										<option value="MS">Mississippi</option>
										<option value="MT">Montana</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="NE">Nebraska</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NV">Nevada</option>
										<option value="NY">New York</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="PR">Puerto Rico</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VA">Virginia</option>
										<option value="VT">Vermont</option>
										<option value="WA">Washington</option>
										<option value="WI">Wisconsin</option>
										<option value="WV">West Virginia</option>
										<option value="WY">Wyoming</option>
									</select>
								</div>
							</div>

							<label htmlFor="location">City or Zip Code:</label><br/>
							<input type="text" id="location"/><br/>
							<label htmlFor="about">About:</label><br/>
							<textarea placeholder="Tell us about you and anything that will help
							other users know what you're looking for! Are you looking for a specific pets?
							Are you creating pet profiles and why?" id="about"/>

							<b><p>Select all pets I'm interested in:</p></b>
							<div id="select-pets">
								<input type="checkbox" name ="pets" id="dogs" value="dogs"/>
								<label htmlFor="dogs"> Dogs </label>
								<input type="checkbox" id="cats" value="cats"/> 
								<label htmlFor="cats"> Cats </label>
								<input type="checkbox" id="other" value="other"/>
								<label htmlFor="other"> Other </label><br/>
							</div>

							<p> After you have created an account, you will be able to add pet profiles in your user profile.</p>

						</form>
						<button className="btn btn-primary btn-xs" id="signup-button">Signup</button>
					</div>

					<div className="col-sm-5">
						<div className="login">
							<div className="heading">
								<h3>Already have an account?<br/>Sign in</h3>
							    <form action="#">

							      <div className="input-group input-group-lg">
							        <span className="input-group-addon"><i className="fa fa-user"></i></span>
							        <input type="text" className="form-control" placeholder="Username or email"/>
							          </div>

							        <div className="input-group input-group-lg">
							          <span className="input-group-addon"><i className="fa fa-lock"></i></span>
							          <input type="password" className="form-control" placeholder="Password"/>
							        </div>

							        <button className="btn btn-primary btn-xs login-button">Login</button>
							    </form>
							</div>
						</div>
					</div>

				</div>
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.list.data
	};
}

export default connect(mapStateToProps, actions)(Signup);