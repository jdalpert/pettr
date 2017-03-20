import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Button } from 'react-bootstrap';

//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class Settings extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName:"",
			lastName:"",
			email:""
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

	_handleBack = () => {
		this.context.router.push("/profile" );
	};

	// _handleClick = () => {
	// 	this.props.grab_data(this.state);
	// 	this.state.firstName = "";
	// 	this.state.lastName = "";
	// 	this.state.email = "";
	// 	console.log("here");
	// 	this.context.router.push("/");
	// };

	render() {
		return(
			<div>
				<div className="container signup main-content">
					<div className="col-sm-3 settings">
						<h2>Settings </h2>
						<form action="" className="signup-form settings"> 

							<b><p>Pet Preferences</p></b>
							<div id="select-pets">
								<input type="checkbox" name ="pets" id="dogs" value="dogs"/>
								<label htmlFor="dogs"> Dogs </label><br/>
								<input type="checkbox" id="cats" value="cats"/> 
								<label htmlFor="cats"> Cats </label><br/>
								<p><input type="checkbox" id="other" value="other"/>
								<label htmlFor="other"> Other </label><br/></p>
								<label htmlFor="current-organization">Current Organization</label><br/>
								<label htmlFor="new-organization">New Organization</label><br/>
								<input type="text" id="new-organization"/><br/>
								<label htmlFor="new-description">Bio Description</label><br/>
								<textarea placeholder="Tell us about yourself and anything that will help
								other users know what you're looking for! Are you looking for a specific pets?
								Are you creating pet profiles and why?"/>
							</div>



						</form>

					</div>

					<div className="col-sm-5 settings">
						<div className="signup-form settings">
							<div className="heading">
								<h2>User Info</h2>
							<label htmlFor="new-password">New Password</label><br/>
							<input type="text" id="passowrd"/><br/>
							<label htmlFor="current-email">Current Email</label><br/>
							<label htmlFor="new-email">New Email</label><br/>
							<input type="text" id="email"/><br/>			
							<label htmlFor="current-phonenum">Current Phone Number</label><br/>
							<label htmlFor="new-phonenum">New Phone Number</label><br/>
							<input type="text" id="phonenum"/><br/>	
							<label htmlFor="current-location">Current Location</label><br/>
							<label htmlFor="new-location">New Location</label><br/>
							<input type="text" id="location"/><br/>
							</div>
						</div>
					</div>
						<div className="btn-group setting-buttons col-sm-12">
							<Button  onClick={this._handleBack} id="back-button">Back</Button>
							<Button /*onClick={this._handleClick}*/ id="save-button">Save</Button>
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

export default connect(mapStateToProps, actions)(Settings);