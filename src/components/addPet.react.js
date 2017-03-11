import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Button } from 'react-bootstrap';

//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class AddPet extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userId: "",
			name:"",
			type:"dog",
			city:"",
			state:"",
			description:""
		};		
	}

	static contextTypes = {
		router: PropTypes.object
	};

	componentWillReceiveProps(nextProps) {
		console.log("hey there");
		this.setState({userId: nextProps.data.userId});
	};

	componentDidMount(){
		console.log("Ah ha!")
	}

	_handleChange = (event) => {
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj)
	};

	_handleClick = () => {
		this.props.grab_data2(this.state);
		this.context.router.push("/profile");
	};

	render() {
		return(
			<div>
				<div className="container signup main-content">
					<div className="col-sm-7">
						<h1>Add Pet</h1>
						<form action="" className="signup-form"> 
							<label htmlFor="name">Name:</label><br/>
							<input type="text" name="name" onChange={this._handleChange} value={this.state.name} id="name"/><br/>
							<b><p>Select type of pet your animal is:</p></b>
							<div id="select-pets">
								<input type="radio" onChange={this._handleChange} checked={(this.state.type === "dog")} value={"dog"} name ="type" id="dog"/>
								<label htmlFor="dogs"> Dog </label>
								<input type="radio" onChange={this._handleChange} checked={(this.state.type === "cat")} value={"cat"} name ="type" id="cat"/> 
								<label htmlFor="cats"> Cat </label>
								<input type="radio" onChange={this._handleChange} checked={(this.state.type === "other")} value={"other"} name ="type" id="other"/>
								<label htmlFor="other"> Other </label><br/>
							</div>
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
							<label htmlFor="description">Description:</label><br/>
							<textarea placeholder="Tell us about you pet! Breed or anything that you feel like you other people should know!" name="description" onChange={this._handleChange} value={this.state.description} id="description"/>
						</form>
						<Button className="btn btn-primary btn-xs" onClick={this._handleClick} id="signup-button">Submit</Button>
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

export default connect(mapStateToProps, actions)(AddPet);