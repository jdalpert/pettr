import React, { Component } from 'react';
//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
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
