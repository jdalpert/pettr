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
			<div className="container home main-content">
				<Jumbotron>
				    <h1>Our Mission</h1>
				    <p>This is a simple test, a simple jumbotron-style component for calling should also include description, picture of team and how to use the site</p>
				    <p><Button bsStyle="primary">Learn more</Button></p>
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