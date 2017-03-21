import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Jumbotron, Button } from 'react-bootstrap';


//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class Mission extends Component {

	constructor(props) {
		super(props);
	}

	_handleClick = () => {
		this.context.router.push("/");
	};

	render() {
		return(
			<div className="container mission main-content">
				<Jumbotron>
				<h2 id="mission_heads">Pettr is better.</h2>
				<p id="mission_text">Welcome to our Mission Statement! You will find information about
 					the purpose of the website and instructions on how to use it.</p>

 				<h2 id ="mission_heads">Who We Are</h2>
 				<p id="mission_text">We are a group of students from UCI who are currently taking a project
 				class in Informatics. Our project is to develop a web application for the adoption of pets. Our team is
 				enthusiastic about animals and bringing an end to pet homelessness. The team members are as follows:
 				Josh Alpert, Michael Min, Kathy Pang, Kirstie Delos Reyes.</p>

 				<h2 id ="mission_heads">Purpose</h2>
 				<p id="mission_text">The purpose of our project not only includes a demonstration of our skills and
 				what we can accomplish as a team, but also to help connect as many people with animals
 				as possible. Our goal is to help homeless pet find new homes and make finding the pet you want to adopt
 				easier with the services on our app. While other services exist for helping match pets, Pettr is unique
 				in offering all animals a chance for adoption by featuring each with a thorough profile allowing you to
 				review different pets before picking the one for you!</p>

				<p><h2 id ="how-to">How To Get Started</h2></p>

 				<h2 id ="steps_heads">1. Sign Up</h2>
 				<p id="mission_text">Don't have an account? Begin by going to "Sign up" to set up your profile and
 				join Pettr in order to start looking for pets to match with!</p>

 				<h2 id ="steps_heads">2. Start Matching</h2>
 				<p id="mission_text">Go to our "Home" page and start looking for pets you want to match with. 
 				You have the option to either adopt a pet or put your pet up for adoption by adding individual
 				pet profiles in your user profile. You can filter between searching for dogs, cats, or other types of pets.
 				You can click "Adopt" on as many pets you are interested in and the owner will be notified of your intestest.
 				If the owner approves you, you will receive a match! Note that all shelter or rescue pets will be automtically
 				matched if you click "Adopt".</p>

 				<h2 id ="steps_heads">3. Review Your Matches & Connect</h2>
 				<p id="mission_text">For users looking to adopt a pet, if the pet owner approves your interest in adopting their pet,
 				you will see the sucessfull match under "Match". When pets and users are matched on both sides, both parties'
 				contact information will display so that you can get in contact right away!

 				For users putting up their pet for adoption, you can approve(connect) or deny all requests in "Match".</p>
				</Jumbotron>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.list.data
	};
}

export default connect(mapStateToProps, actions)(Mission);
