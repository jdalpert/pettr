import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Jumbotron, Button } from 'react-bootstrap';


//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class Messages extends Component {

	constructor(props) {
		super(props);
		this.state = {
			_id: "",
			firstName: "",
			lastName: "",
			matches: [],
			selectedIndex: 0,
			pressed: 0,
		};
	}

	static contextTypes = {
		router: PropTypes.object
	};

	_handleClick = () => {
		this.context.router.push("/");
	};

	componentWillMount(){
		if (this.props.params)
			this.props.getUserInfo(this.props.params.id);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.data){
			this.setState(nextProps.data);
			console.log("Check it out");
			console.log(nextProps.data);
		}
	}

	_handleSelect = (index, event) => {
		console.log(index);
		console.log("HAHA");
		this.setState({selectedIndex: index});
	}

	render() {
/*		let matchesAry = (this.state.matches.length)?
			this.state.matches.map((org, index) => {
				let singleMess = (
					<div key={index} value={index} onClick={() => this._handleSelect(index)}>
						<div className={"container messageList" + (this.state.selectedIndex === index)? " pressed" : ""}>
							<img className="match-pic" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/>
							<h4 className="messageName"><b><Link to={"/profile/" +  org.userIdB}>{org.userBFirstName + " " + org.userBLastName}</Link></b></h4>
							<h4 className="messageName">interested in <b><Link to={"/viewdog/" + org.petId}>{org.petName}</Link></b></h4>
							<div className="confirmButtonsMessage">
								<div>
									<Button bsStyle="primary" bsSize="small" className="messageButton">Connect</Button>
									<Button bsStyle="primary" bsSize="small" className="messageButton">Ditch</Button>
								</div>
							</div>
						</div>
						<hr/>
					</div>	
				);
				console.log(this.state.selectedIndex);
				console.log(index);
				return singleMess;
			}):
			<div>
				<div className="container pressed messageList">
					<h4 className="messageName"><b>No Matches Yet</b></h4>
					<div className="confirmButtonsMessage">
						<div>
						</div>
					</div>
				</div>
				<hr/>
			</div>;*/
		let singleMess = [];
			for(let i = 0; i < this.state.matches.length; i++){
				singleMess.push(
				(this.state.matches[i].requested !== this.props.params.id)?
				<div key={i} value={i} onClick={() => this._handleSelect(i)}>
					<div className={"container messageList" + " pressed"}>
						<img className="match-pic" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/>
						<h4 className="messageName"><b><Link to={"/profile/" +  this.state.matches[i].userIdB}>{this.state.matches[i].userBFirstName + " " + this.state.matches[i].userBLastName}</Link></b></h4>
						<h4 className="messageName">is interested in <b><Link to={"/viewdog/" + this.state.matches[i].petId}>{this.state.matches[i].petName}</Link></b></h4>
						<div className="confirmButtonsMessage">
							<div>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Connect</Button>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Ditch</Button>
							</div>
						</div>
					</div>
					<hr/>
				</div>
				:
				<div key={i} value={i} onClick={() => this._handleSelect(i)}>
					<div className={"container messageList" + " pressed"}>
						<img className="match-pic" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/>
						<h4 className="messageName"><b><Link to={"/profile/" +  this.state.matches[i].userIdB}>You </Link></b></h4>
						<h4 className="messageName">are interested in <b><Link to={"/viewdog/" + this.state.matches[i].petId}>{this.state.matches[i].petName}</Link></b></h4>
						<div className="confirmButtonsMessage">
							<div>
							</div>
						</div>
					</div>
					<hr/>
				</div>
				);		
			}
		if(!this.state.matches.length)
			singleMess.push(
			<div>
				<div className="container pressed messageList">
					<h4 className="messageName"><b>No Matches Yet</b></h4>
					<div className="confirmButtonsMessage">
						<div>
						</div>
					</div>
				</div>
				<hr/>
			</div>);

		let jumbo = (this.state.matches.length)?
				(this.state.matches[this.state.selectedIndex].requested !== this.props.params.id)?
				<Jumbotron>
				    <h1 id="matchedTitle">Matched!</h1>
				    <img className="match-pic" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/>
				    <p><text id="match-name">{this.state.matches[this.state.selectedIndex].userBFirstName + " " + this.state.matches[this.state.selectedIndex].userBLastName }</text> and <text id="pet-name">{this.state.matches[this.state.selectedIndex].petName}</text> matched <text id="match-time">5 days ago</text>! Connect with them at: <br/>
				    <b><text id="contact-info">{this.state.matches[this.state.selectedIndex].userBContact}</text></b>
				    </p>
				    <p><Link to={"/profile/" + this.state.matches[this.state.selectedIndex].userIdB}><Button bsStyle="primary" className="profileButton">View their Profile</Button></Link></p>
				</Jumbotron>:
				<Jumbotron>
				    <h1 id="matchedTitle">Matched!</h1>
				    <img className="match-pic" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/>
				    <p><text id="match-name">{"You"}</text> and <text id="pet-name">{this.state.matches[this.state.selectedIndex].petName}</text> matched <text id="match-time">5 days ago</text>! Connect with them at: <br/>
				    <b><text id="contact-info">{this.state.matches[this.state.selectedIndex].userBContact}</text></b>
				    </p>
				    <p><Link to={"/profile/" + this.state.matches[this.state.selectedIndex].userIdB}><Button bsStyle="primary" className="profileButton">View their Profile</Button></Link></p>
				</Jumbotron>:
			<Jumbotron>
			    <h1 id="matchedTitle">Try Exploring Pets</h1>
			    <p><Link to="/"><Button bsStyle="primary" className="profileButton">Check it out here</Button></Link></p>
			</Jumbotron>;
		return(
			<div className="container home main-content messageHolder">
				<div className="container messageNotifications">
				<h3 id="matchRequestTitle">Match Requests</h3>
				<text id="matchRequestInfo">View user's or pet's profile by clicking their name.</text>
					{singleMess}
				</div>
				{jumbo}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.list.data
	};
}

export default connect(mapStateToProps, actions)(Messages);