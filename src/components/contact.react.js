import React, { Component } from 'react';
//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
// this is a test pls ignore this
// NEVER MERGE W/ MASTER FIRST. I WILL NEVER MERGE. (JOSH WILL)
// ME, WORK ON MY BRANCH. GIT-PULL ORIGIN MASTER, THEN AFTER MERGED IN
// and then send your pull request
// michael pls never "Commit to master";
export default class Contact extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="contact">
				<strong>Name:</strong> {this.props.contact.userName} <br/>
				<strong>Address:</strong> {this.props.contact.userAddress} <br/>
				<strong>Fav Quote:</strong> {this.props.contact.userQuote} 
				<br/>
			</div>
		);
	}
}
