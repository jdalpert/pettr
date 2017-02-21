import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class PetTool extends Component {

	render() {
		return(
			<div>
				<Navbar className="icon-bar">
					<Navbar.Header>
						<NavItem href="#"><span>Pettr</span></NavItem> 
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem href="/#/"><i to="/" className="active fa fa-home"></i></NavItem>
							<NavItem href="/#/messages"><i className="fa fa-heart"></i></NavItem> 
							<NavItem href="/#/profile"><i className="fa fa-user"></i></NavItem> 
							<NavItem href="/#/mission"><i className="fa fa-rocket"></i></NavItem>
							<NavItem href="/#/signup"><i className="fa fa-lock"></i></NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state.list.data);
	return {
		data: state.list.data.response
	};
}

export default connect(mapStateToProps)(PetTool);
