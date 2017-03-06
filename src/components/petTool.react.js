import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import homeIcon from './assets/iconhome.png';
//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class PetTool extends Component {

	render() {
		return(
			<div>
				<Navbar className="icon-bar">
					<Navbar.Header>
						<NavItem href="/#/"><img className="main-logo" src="https://github.com/jdalpert/pettr/blob/layout/src/components/assets/title.png?raw=true"/></NavItem> 
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem href="/#/"><img className="nav-icon" src="https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconhome.png?raw=true"/></NavItem>
							<NavItem href="/#/messages"><img className="nav-icon" src="https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconmatch.png?raw=true"/></NavItem> 
							<NavItem href="/#/profile"><img className="nav-icon" src="https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconprofile.png?raw=true"/></NavItem> 
							<NavItem href="/#/mission"><img className="nav-icon" src="https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/missionstatement.png?raw=true"/></NavItem>
							<NavItem href="/#/signup"><img className="nav-icon" src="https://github.com/jdalpert/pettr/blob/layout/src/components/assets/iconlogin.png?raw=true"/></NavItem>
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
