import React, { Component } from 'react';
import Axios from 'axios';
import Child from './child.react';
import Display from './display.react';
import PetTool from './petTool.react'

let backFlag = 0;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personList: ""
		};
	}

	/*componentDidMount() {
		Axios.get("/api/v0/sample")
			.then((obj) => {
				this.setState({
					personList: obj.data.response
				});
			});
	}*/

	_setBackFlag = () => {
		if (backFlag === 0){
			backFlag = 1;
		}

		else {
			backFlag = 0;
		}
	};

	_callback = (obj) => {
		this.setState({
			personList: obj
		});
	};

	render() {
		return (
			<div className="app">
				<PetTool />
				{/*{this.state.response}
				<Child callback = {this._callback}/>*/}
				{this.props.children}
				{/*if (backFlag === 1) {
					<Display personList = {this.state.personList}/>
				}*/}
			</div>
		);
	}
}
