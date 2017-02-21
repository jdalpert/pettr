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
					<div className="container pressed messageList">
						<h4 className="messageName"><b><Link to="/profile">Michael Williams</Link></b></h4>
						<h4>For</h4>
						<h4 className="messageName"><b><Link to="/">Lola Bear</Link></b></h4>
						<div className="confirmButtonsMessage">
							<div>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Connect</Button>
								<Button bsStyle="primary" bsSize="small" className="messageButton">Ditch</Button>
							</div>
						</div>
					</div>
					<hr/>
					<div className="container messageList">
						<h4 className="messageName"><b><Link to="/profile">Michael Williams</Link></b></h4>
						<h4>For</h4>
						<h4 className="messageName"><b><Link to="/">Lola Bear</Link></b></h4>
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
				    <h1>Congrats!</h1>
				    <p>You approved Michael Williams! Connect with him with this contact info!<br/>
				    <b>555-555-5555</b>
				    </p>
				    <p><Button bsStyle="primary">Learn more</Button></p>
				</Jumbotron>
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