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
		this.state = {
			firstName:"",
			lastName:"",
			email:"",
			password: "",
			city: "",
			state: "",
			dog: true,
			cat: false,
			other: false,
			contactInfo: "",
			description: "",
			organization: "",
			loginEmail: "",
			loginPassword: "",
		};		
	}


	static contextTypes = {
		router: PropTypes.object
	};

	_handleChange = (event) => {
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj)
	};

	_handleClick = () => {
		this.props.grab_data(this.state);
		this.context.router.push("/profile" );
	};

	_handleLogin = () => {
		this.props.loginUser(this.state);
		this.context.router.push("/profile");
	};

	render() {
		return(
			<div>
				<div className="container signup main-content">
					<div className="col-sm-7">
						<h1>Sign Up </h1>
						<form action="" className="signup-form"> 
							<label htmlFor="first-name">First Name:</label><br/>
							<input type="text" name="firstName" onChange={this._handleChange} value={this.state.firstName} id="first-name"/><br/>
							<label htmlFor="last-name">Last Name:</label><br/>
							<input type="text" name="lastName" onChange={this._handleChange} value={this.state.lastName} id="last-name"/><br/>
							<label htmlFor="email">Email:</label><br/>
							<input type="text" name="email" onChange={this._handleChange} value={this.state.email} id="email"/><br/>
							<label htmlFor="password">Password:</label><br/>
							<input type="password" name="password" onChange={this._handleChange} value={this.state.password} id="password"/><br/>
							<div class="form-group">
								<label for="state" class="col-sm-2 control-label">State:</label>
								<div class="col-sm-10">
									<select class="form-control" id="state" onChange={this._handleChange} value={this.state.state} name="state"><br/>
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
							<label htmlFor="location">City:</label><br/>
							<input type="text" name="city" onChange={this._handleChange} value={this.state.city} id="city"/><br/>
							<label htmlFor="contactInfo">Contact Info:</label><br/>
							<input type="text" placeholder="This will be sent to potentional matches" name="contactInfo" onChange={this._handleChange} value={this.state.contactInfo} id="contactInfo"/><br/>
							<label htmlFor="Organization">Organization(Optional):</label><br/>
							<input type="text" name="organization" onChange={this._handleChange} value={this.state.organization} id="organization"/><br/>

							<label htmlFor="description">Description(Optional):</label><br/>
							<textarea placeholder="Tell us about yourself and anything that will help
							other users know what you're looking for! Are you looking for a specific pets?
							Are you creating pet profiles and why?" name="description" onChange={this._handleChange} value={this.state.description} id="description"/>

							<b><p>Select all pets I'm interested in:</p></b>
							<div id="select-pets">
								<input type="checkbox" onChange={this._handleChange} checked={this.state.dog} value={this.state.dog} name ="dog" id="dog"/>
								<label htmlFor="dogs"> Dogs </label>
								<input type="checkbox" onChange={this._handleChange} checked={this.state.cat} value={this.state.cat} name ="cat" id="cat"/> 
								<label htmlFor="cats"> Cats </label>
								<input type="checkbox" onChange={this._handleChange} checked={this.state.other} value={this.state.other} name ="other" id="other"/>
								<label htmlFor="other"> Other </label><br/>
							</div>
							<p> After you have created an account, you will be able to add pet profiles in your user profile.</p>
						</form>
						<Button className="btn btn-primary btn-xs" onClick={this._handleClick} id="signup-button">Signup</Button>
					</div>

					<div className="col-sm-5">
						<div className="login">
							<img className="asset" src="https://github.com/jdalpert/pettr/blob/layout/src/components/assets/asset.png?raw=true"/>
							<div className="heading">
								<h3>Already have an account?<br/>Sign in</h3>
							    <form action="">
							      <div className="input-group input-group-lg">
							        <span className="input-group-addon"><i className="fa fa-user"></i></span>
							        <input type="text" className="form-control" placeholder="Email" name="loginEmail" onChange={this._handleChange} value={this.state.loginEmail}/>
							      </div>
							      <div className="input-group input-group-lg">
							        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
							        <input type="password" className="form-control" placeholder="Password" name="loginPassword" onChange={this._handleChange} value={this.state.loginPassword}/>
							      </div>
							        <button className="btn btn-primary btn-xs login-button" onClick={this._handleLogin} >Login</button>
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