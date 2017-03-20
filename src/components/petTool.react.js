import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react';
import * as actions from "../actions/add_person.action";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import homeIcon from './assets/iconhome.png';
//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class PetTool extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userId: "",
			email: "",
			pettrTitle:"https://github.com/jdalpert/pettr/blob/master/src/components/assets/pettr%20logo.png?raw=true",
			homeIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconhome.png?raw=true",
			matchIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconmatch.png?raw=true",
			profileIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconprofile.png?raw=true",
			missionIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/missionstatement.png?raw=true",
			signupIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconlogin2.png?raw=true"
		};
	}

	static contextTypes = {
		router: PropTypes.object
	};

	componentWillReceiveProps(nextProps) {
		console.log("check");
		console.log(nextProps);
		if(nextProps.data && !Array.isArray(nextProps.data)){
			if(nextProps.data.userId && !nextProps.data.email){
				this.setState({userId: nextProps.data.userId});
				this.props.getUserInfo(nextProps.data.userId);
			}
			if(nextProps.data.email)
				this.setState({email: nextProps.data.email});
			console.log("was it empty?");
		}
	}

	pettrTitleHover = () =>{
		this.setState({pettrTitle:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/pettr%20logolight.png?raw=true"});
	}
	pettrTitleUnhover = () =>{
		this.setState({pettrTitle:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/pettr%20logo.png?raw=true"});
	}

	homeHover = () =>{
		this.setState({homeIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconhomelight.png?raw=true"});
	}
	homeUnhover = () =>{
		this.setState({homeIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconhome.png?raw=true"});
	}

	matchHover = () =>{
		this.setState({matchIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconmatchlight.png?raw=true"});
	}
	matchUnhover = () =>{
		this.setState({matchIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconmatch.png?raw=true"});
	}

	profileHover = () =>{
		this.setState({profileIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconprofilelight.png?raw=true"});
	}
	profileUnhover = () =>{
		this.setState({profileIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconprofile.png?raw=true"});
	}

	missionHover = () =>{
		this.setState({missionIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/missionstatementlight.png?raw=true"});
	}
	missionUnhover = () =>{
		this.setState({missionIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/missionstatement.png?raw=true"});
	}

	signupHover = () =>{
		this.setState({signupIc:"https://github.com/jdalpert/pettr/blob/layout/src/components/assets/iconloginlight.png?raw=true"});
	}
	signupUnhover = () =>{
		this.setState({signupIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/iconlogin2.png?raw=true"});
	}

	_handleHome = () =>{
		if(!this.state.userId){
			this.props.getAllPets();
			this.context.router.push("/home/");
		}else{
			this.props.getPets(this.state.userId);
			this.context.router.push("/home/" + this.state.userId);
		}
	}

	_handleProfile = () =>{
		console.log("THISSS");
		console.log(this.state.userId);
		if(!this.state.userId)
			this.context.router.push("/login");
		else{
			this.props.getUserInfo(this.state.userId);
			this.context.router.push("/profile/" + this.state.userId);
		}
	}

	_handleMatches = () =>{
		console.log("THISSS");
		console.log(this.state.userId);
		if(!this.state.userId)
			this.context.router.push("/login");
		else{
			this.props.getUserInfo(this.state.userId);
			this.context.router.push("/messages/" + this.state.userId);
		}
	}

	render() {
		return(
			<div>
				<Navbar className="icon-bar">
					<Navbar.Header>
						<NavItem href="/#/"><img className="main-logo" src={this.state.pettrTitle} onMouseOver={this.pettrTitleHover} onMouseOut={this.pettrTitleUnhover}/></NavItem>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem onClick={this._handleHome}><img className="nav-icon" src={this.state.homeIc} onMouseOver={this.homeHover} onMouseOut={this.homeUnhover}/></NavItem>
							<NavItem onClick={this._handleMatches}><img className="nav-icon" src={this.state.matchIc} onMouseOver={this.matchHover} onMouseOut={this.matchUnhover}/></NavItem>
							<NavItem onClick={this._handleProfile}><img className="nav-icon" src={this.state.profileIc} onMouseOver={this.profileHover} onMouseOut={this.profileUnhover}/></NavItem>
							<NavItem href="/#/mission"><img className="nav-icon" src={this.state.missionIc} onMouseOver={this.missionHover} onMouseOut={this.missionUnhover}/></NavItem>
							<NavItem href="/#/signup"><img className="nav-icon" src={this.state.signupIc} onMouseOver={this.signupHover} onMouseOut={this.signupUnhover}/></NavItem>

						</Nav>
					</Navbar.Collapse>
					<Navbar.Text>
						{
							(this.state.email)?
							<span>Welcome: <b>{this.state.email}</b></span>:
							<span>Welcome: Guest <b>-</b></span>
						}
						<span><a href="/#/login" id="login-page"> LOGIN</a></span>

				    </Navbar.Text>
				</Navbar>
			</div>
		);
	}
}


function mapStateToProps(state) {
	console.log(state.list.data);
	return {
		data: state.list.data
	};
}

export default connect(mapStateToProps, actions)(PetTool);
