import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";

//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class MissionStatement extends Component {

	constructor(props) {
		super(props);
	}

	_handleClick = () => {
		this.context.router.push("/");
	};

	render() {
		return(
			<div>

				<p className="welcome">Welcome to the Mission Statement page! You will find information about
					the purpose of the website as well as instructions about how to use it.</p>

				<h2>Who We Are</h2>
				<p>We are just a bunch of nerds that like animals kay?</p>

				<h2>Our Purpose</h2>
				<p>The purpose of our project not only includes a demonstration of what we can do
				as a group, but as a way to reach out towards people who generally wants to spend
				time with animals. Whether it be adopting, fostering, and looking for play time with
				a pet, it is within our goal to make it easier to provide those services to you with our
				app.</p>

				<h1>How To Get Started FOOL</h1>

				<h2>Sign Up</h2>
				<p>Don't have an account? Make sure you sign up and 
				join the website to set up and start looking for pets to match with!</p>

				<h2 id="help">Start Matching</h2>
				<p>Go to our home page and start looking for pets to match. You have the option to either adopt
				or hang out with a pet by toggling the slider on the top right corner of the site. You can filter
				between dogs, cats, or other types of pets. You can choose whichever pet you want to like and the
				notification will be sent towards the owner. If the owner approves you, you will receive a match!</p>

				<h2>Review Your Matches</h2>
				<p>Review matches you have with a pet if their owner aproves or likes you back. You will be able to
				scroll down a set of matches and be able to view the pet owner's contact information.</p>

				</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.list.data
	};
}

export default connect(mapStateToProps, actions)(MissionStatement);