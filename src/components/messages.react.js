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
	}

	_handleClick = () => {
		this.context.router.push("/");
	};

	render() {
		return(
			<div className="container home main-content messageHolder">
				<div className="container messageNotifications">
				<h3 id="matchRequestTitle">Match Requests</h3>
					<div className="container pressed messageList">
						<img className="match-pic" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/>
						<h4 className="messageName"><b><Link to="/profile">Bob Stanley</Link></b></h4>
						<h4 className="messageName">interested in <b><Link to="/">Lola Bear</Link></b></h4>
						<div className="confirmButtonsMessage">
							<div>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Connect</Button>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Ditch</Button>
							</div>
						</div>
					</div>
					<hr/>
					<div className="container messageList">
						<img className="match-pic" src="http://petadoption.ocpetinfo.com/Adopt/RetrieveImage.asp?ID=A1508530"/>
						<h4 className="messageName"><b><Link to="/profile">Janelle Parker</Link></b></h4>
						<h4 className="messageName">interested in <b><Link to="/">Belle</Link></b></h4>
						<div className="confirmButtonsMessage">
							<div>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Connect</Button>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Ditch</Button>
							</div>
						</div>
					</div>
					<hr/>
					<div className="container messageList">
						<img className="match-pic" src="http://petadoption.ocpetinfo.com/Adopt/RetrieveImage.asp?ID=A1508922"/>
						<h4 className="messageName"><b><Link to="/profile">Nicole Evans</Link></b></h4>
						<h4 className="messageName">interested in <b><Link to="/">Tasha</Link></b></h4>
						<div className="confirmButtonsMessage">
							<div>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Connect</Button>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Ditch</Button>
							</div>
						</div>
					</div>
					<hr/>
					<div className="container messageList">
						<img className="match-pic" src="http://petadoption.ocpetinfo.com/Adopt/RetrieveImage.asp?ID=A0821356"/>
						<h4 className="messageName"><b><Link to="/profile">Michael Williams</Link></b></h4>
						<h4 className="messageName">interested in <b><Link to="/">Dude</Link></b></h4>
						<div className="confirmButtonsMessage">
							<div>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Connect</Button>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Ditch</Button>
							</div>
						</div>
					</div>
					<hr/>
				</div>

				<Jumbotron>
				    <h1>Matched!</h1>
				    <img className="match-pic" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/>
				    <p><text id="match-name"> Bob Stanley</text> and <text id="pet-name">Lola Bear</text> matched <text id="match-time">5 days ago</text>! Connect with them at: <br/>
				    <b><text id="contact-info">555-555-5555</text></b>
				    </p>
				    <p><Button bsStyle="primary" className="profileButton"><Link to="/profile/">View their Profile</Link></Button></p>
				</Jumbotron>
			</div>
		);s
	}
}

function mapStateToProps(state) {
	return {
		data: state.list.data
	};
}

export default connect(mapStateToProps, actions)(Messages);