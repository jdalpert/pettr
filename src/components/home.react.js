import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Button } from 'react-bootstrap';
import Slider from 'react-slick';


//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class Home extends Component {

	constructor(props) {
		super(props);
	}

	_handleClick = () => {
		this.context.router.push("/");
	};

	render() {
		let settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
    	};
		return(
			<div>
				<div className="container home main-content">
					<div className="row">
						<div className="col-sm-1" id="left-arrow">left-arrow</div>
						<div className="col-sm-5">
							<h2>Lola Bear</h2>
							<div className="slideShowPics">
			                	<Slider {...settings}>
			                		<div className="slideShowPics"><h3><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/e/e/7/228543241.jpg"/></h3></div>
									<div className="slideShowPics"><h3><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/1/228543250.jpg"/></h3></div>
		                            <div className="slideShowPics"><h3><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/></h3></div>
			                		<div className="slideShowPics"><h3><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/4/1/5/228543262.jpg"/></h3></div>
			                	</Slider>
		                	</div>
						</div>
						<div className="col-sm-5">
							<h4>Description</h4>
							<text id="pet-breed">Breed:</text><text> Pomeranian<br/></text>
						
							<p id="description">Hi I am a 5 year old golden/chestnut/white female pomeranian looking for a new home! I am a smal ldog
							that weighs 25 lbs or less. I am already spayed, purebred, a special needs pet, and up to date with shots. Unforunatelly, I have diabetes
							and will need insulin shots twice a day, but they are fairly inexpensive.
							I am respectful and get along well with both people and dogs. Please give me a new home!</p>
							
							<h4>Owner</h4>
							<text id="owner">Southern California Pomeranian Rescue<br/></text>
							<text id="pet-location">Location: Irvine, CA<br/></text>
							<a href="#">View Profile</a>
						</div>
						<div className="col-sm-1" id="right-arrow">right-arrow</div>
					</div>
					<div className="confirmButtons">
						<div className="col-sm-15 swipe-buttons">
							<Button bsStyle="primary" bsSize="large" className="defaultButton">Abandon</Button>
							<Button bsStyle="primary" bsSize="large" className="defaultButton"> Adopt</Button>
						</div>
					</div>

					<div className="row">
                	</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.list.data
	};
}

export default connect(mapStateToProps, actions)(Home);