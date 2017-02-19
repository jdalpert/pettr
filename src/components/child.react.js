import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router'; 
import Display from './display.react';
import * as actions from "../actions/add_person.action";
//import Axios from 'axios';

class Child extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userName:"",
			userAddress:"",
			userQuote:""
		};
	}

	static contextTypes = {
		// you should only use context when you are doing something with react-router and routing
		router: PropTypes.object
	};

	_handleChange = (event) => {
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj)
	};

	/*_handleClick = () => {
		let obj = this.state;
		Axios.post(sample, obj)
			.then((axiosReponse) => {
				this.props.callback(axiosReponse.data.response);
				this.setState({userName:"", userAddress:"", userQuote:""});
		})
	};*/

	_handleClick = () => {
		//this.context.router.push("/display");
		this.props.grab_data(this.state);
		this.state.userName = "";
		this.state.userAddress = "";
		this.state.userQuote = "";
		this.context.router.push("/display");
		//this.context.router.push("/display");
	}
// <<<<<<< HEAD
// 	//PUT ALL OF YOUR HTML CODE HERE
// =======

	_handleClickTest = () => {
		//this.context.router.push("/display");
		this.context.router.push("/test");
		//this.context.router.push("/display");
	}
	_handleClickMS = () => {
		//this.context.router.push("/display");
		this.context.router.push("/mission_statement");
		//this.context.router.push("/display");
	}

// >>>>>>> 0f826fd3aa6e82da9556be5aee07f4be5f5fedee
	render() {
		return (
			<div className="child">
				<h1>Pettr</h1><br/>
				<input 
					type="text" 
					name="userName" 
					placeholder="  Name" 
					value={this.state.userName} 
					onChange={this._handleChange}
				/> 
				<br/>
				<br/>
				<input 
					type="text" 
					name="userAddress" 
					placeholder="  Address" 
					value={this.state.userAddress} 
					onChange={this._handleChange}
					/> 
					<br/>
					<br/>

				<textarea
					type="text"
					className="form-control"
					rows="6"
					name="userQuote" 
					placeholder="Favorite Quote" 
					value={this.state.userQuote}
					onChange={this._handleChange}
					/> 
					<br/>
					<br/>
					<br/>
			
				<button 
					className="btn btn-primary btn-sm" 
					onClick={this._handleClick}>Submit
				</button>
				<button 
					className="btn btn-primary btn-sm" 
					onClick={this._handleClickTest}>Test
				</button>
				<button 
					className="btn btn-primary btn-sm" 
					onClick={this._handleClickMS}>Mission Statement
				</button>
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

export default connect(mapStateToProps, actions)(Child);
