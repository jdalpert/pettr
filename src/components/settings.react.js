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
				<div className="signup main-content">
					<div className="col-sm-7">
						<h1>Settings </h1>
						<form action="" className="signup-form"> 

							<b><p>Pet Preferences</p></b>
							<div id="select-pets">
								<input type="checkbox" name ="pets" id="dogs" value="dogs"/>
								<label htmlFor="dogs"> Dogs </label><br/>
								<input type="checkbox" id="cats" value="cats"/> 
								<label htmlFor="cats"> Cats </label><br/>
								<p><input type="checkbox" id="other" value="other"/>
								<label htmlFor="other"> Other </label><br/></p>
							</div>

							<label htmlFor="current location">Current Location</label><br/>
							<p>LOCATION PLACEHOLDER</p>
							<label htmlFor="new location">New Location</label><br/>
							<input type="text" id="location"/><br/>

						</form>
						<Button className="btn btn-primary btn-xs" /*onClick={this._handleClick}*/ id="save-button">Save</Button>
					</div>

					<div className="col-sm-5">
						<div className="login">
							<div className="heading">
								<h2>Contact Information</h2>
							<label htmlFor="current location">Current Email</label><br/>
							<p>EMAIL PLACEHOLDER</p>
							<label htmlFor="new location">New Email</label><br/>
							<input type="text" id="location"/><br/>			
							<label htmlFor="current location">Current Phone Number</label><br/>
							<p>PHONE NUM PLACEHOLDER</p>
							<label htmlFor="new location">New Phone Number</label><br/>
							<input type="text" id="location"/><br/>						
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

export default connect(mapStateToProps, actions)(Settings);