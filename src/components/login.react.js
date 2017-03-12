import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Button } from 'react-bootstrap';


//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			login: false,
			loginEmail: "",
			loginPassword: ""
		};	
	}

	static contextTypes = {
		router: PropTypes.object
	};


	componentWillReceiveProps(nextProps) {
		if(nextProps.data._id)
			this.context.router.push("/profile");
	}

	_handleChange = (event) => {
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj)
	};

	_handleLogin = () => {
		console.log("CHECK");
		this.props.loginUser(this.state);
		this.setState({login: true});
		this.context.router.push("/profile");
	};

	render() {
		return(
			<div>
				<div className="container home main-content">
					<div className="login">
						<img className="asset" src="https://github.com/jdalpert/pettr/blob/layout/src/components/assets/asset.png?raw=true"/>
						<div className="heading">
							<h3>Sorry you are not signed in <br/>Sign in?</h3>
						    <form action="">
						      <div className="input-group input-group-lg">
						        <span className="input-group-addon"><i className="fa fa-user"></i></span>
						        <input type="text" className="form-control" placeholder="Email" name="loginEmail" onChange={this._handleChange} value={this.state.loginEmail}/>
						      </div>
						      <div className="input-group input-group-lg">
						        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
						        <input type="password" className="form-control" placeholder="Password" name="loginPassword" onChange={this._handleChange} value={this.state.loginPassword}/>
						      </div>
						        <button className="btn btn-primary btn-xs login-button" onClick={this._handleLogin} >Login</button>
						    </form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state.list.data);
	console.log("here?");
	return {
		data: state.list.data
	};
}

export default connect(mapStateToProps, actions)(Login);