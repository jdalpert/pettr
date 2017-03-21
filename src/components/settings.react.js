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
			userId: "",
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			city: "",
			state: "",
			dog: true,
			cat: false,
			other: false,
			pets: [],
			contactInfo: "",
			description: "",
			organization: "",
			profilePic: "",
		};		
	}

	componentWillMount(){
		console.log("check2");
		if(this.props.data.secure_url)
			this.setState({userId: this.props.data.secure_url});
		if(this.props.data && !Array.isArray(this.props.data)){
			console.log("These are the props data");
			console.log(this.props.data.userId);
			if(this.props.data.userId && !this.props.data.email){
				this.setState({userId: this.props.data.userId});
				this.props.getUserInfo(this.props.data.userId);
			}
			if(this.props.data.email){
				this.setState(
					{
						userId: this.props.data._id,
						profilePic: this.props.data.profilePic,
						email: this.props.data.email,
						password: this.props.data.password,
						firstName: this.props.data.firstName,
						lastName: this.props.data.lastName,
						city: this.props.data.city,
						state: this.props.data.state,
						dog: this.props.data.dog,
						cat: this.props.data.cat,
						other: this.props.data.other,
						pets: this.props.data.pets,
						contactInfo: this.props.data.contactInfo,
						description: this.props.data.description,
						organization: this.props.data.organization
					});
			}
			console.log("was it empty?2");
		}else if (!this.state.login && !Array.isArray(this.props.data))
			this.context.router.push("/login");
		else{
			console.log("ASDDSSS");
			console.log(this.props);
			if (this.props.params)
				this.props.getUserInfo(this.props.params.id);
		}
		console.log("end");
	}

	componentWillReceiveProps(nextProps) {
		console.log("check");
		console.log(nextProps);
		if(nextProps.data && !Array.isArray(nextProps.data)){
			if(nextProps.data.userId && !nextProps.data.email){
				this.setState({userId: nextProps.data.userId, login: true});
				this.props.getUserInfo(nextProps.data.userId);
			}
			if(nextProps.data.email){
				this.setState(
					{
						userId: nextProps.data._id,
						profilePic: nextProps.data.profilePic,
						email: nextProps.data.email,
						password: nextProps.data.password,
						firstName: nextProps.data.firstName,
						lastName: nextProps.data.lastName,
						city: nextProps.data.city,
						state: nextProps.data.state,
						dog: nextProps.data.dog,
						cat: nextProps.data.cat,
						other: nextProps.data.other,
						pets: nextProps.data.pets,
						contactInfo: nextProps.data.contactInfo,
						description: nextProps.data.description,
						organization: nextProps.data.organization,
						login: true
					});
			}
			console.log("was it empty?");
		}
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
		this.context.router.push("/profile/" + this.state.userId);
	};

	_handleCheck = (event) => {
		let obj = {};
		obj[event.target.name] = !this.state[event.target.name];
		this.setState(obj)
	};


	 _handleClick = () => {
	 	console.log("DAH FUCK");
	 	console.log(this.state);
	 	this.props.update_data(this.state);
		this.context.router.push("/profile");
	 };

	render() {
		return(
			<div>
				<div className="container signup main-content">
					<div className="col-sm-3 settings">
						<h2>Settings </h2>
						<form action="" className="signup-form settings"> 

							<b><p>Pet Preferences</p></b>
							<div id="select-pets">
								<input type="checkbox" onChange={this._handleCheck} checked={this.state.dog} value={this.state.dog} name ="dog" id="dog"/>
								<label htmlFor="dogs"> Dogs </label><br/>
								<input type="checkbox" onChange={this._handleCheck} checked={this.state.cat} value={this.state.cat} name ="cat" id="cat"/> 
								<label htmlFor="cats"> Cats </label><br/>
								<p><input type="checkbox" onChange={this._handleCheck} checked={this.state.other} value={this.state.other} name ="other" id="other"/>
								<label htmlFor="other"> Other </label><br/></p>
								<label htmlFor="Organization">Organization(Optional):</label><br/>
								<input type="text" name="organization" onChange={this._handleChange} value={this.state.organization} id="organization"/><br/>
								<label htmlFor="description">Description(Optional):</label><br/>
								<textarea placeholder="Tell us about yourself and anything that will help
								other users know what you're looking for! Are you looking for a specific pets?
								Are you creating pet profiles and why?" name="description" onChange={this._handleChange} value={this.state.description} id="description"/>
							</div>
						</form>
					</div>

					<div className="col-sm-5 settings">
						<div className="signup-form settings">
							<div className="heading">
								<h2>User Info</h2>
							<label htmlFor="first-name">First Name:</label><br/>
							<input type="text" name="firstName" onChange={this._handleChange} value={this.state.firstName} id="first-name"/><br/>
							<label htmlFor="last-name">Last Name:</label><br/>
							<input type="text" name="lastName" onChange={this._handleChange} value={this.state.lastName} id="last-name"/><br/>
							<label htmlFor="email">Email:</label><br/>
							<input type="text" name="email" onChange={this._handleChange} value={this.state.email} id="email"/><br/>
							<label htmlFor="password">Password:</label><br/>
							<input type="text" name="password" onChange={this._handleChange} value={this.state.password} id="password"/><br/>	
							<label htmlFor="contactInfo">Preferred Contact:</label><br/>
							<input type="text" placeholder="Sent to matches" name="contactInfo" onChange={this._handleChange} value={this.state.contactInfo} id="contactInfo"/><br/>
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
							<p>Unfortunately due to the nature of Heroku, we cannot provide image hosting so please post a link to your photo from a popular image hosting site! (We reccomend imgBB and using the direct links option, or Image Url option)</p> 
							<label htmlFor="profilePic">Profile Pic URL:</label><br/>
							<input type="text" name="profilePic" onChange={this._handleChange} value={this.state.profilePic} id="profilePic"/><br/>
							</div>
						</div>
					</div>
						<div className="btn-group setting-buttons col-sm-12">
							<Button  onClick={this._handleBack} id="back-button">Back</Button>
							<Button onClick={this._handleClick} id="save-button">Save</Button>
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