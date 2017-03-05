import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Button, Pager } from 'react-bootstrap';
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
 		  infinite: true,
	      dots: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      arrows: false,
	      draggable: true,
	      swipeToSlide: true,
	      arrows: true,

    	};





		return(
			<div>
				<div className="container-fluid main-content">
					<div className="row" >
					<div className="col-md-1" id="left-arrow"> <img id="left-arrow" src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/01_arrow_left-512.png"/></div>


						<div className="col-md-6">

							<h1> Fart head </h1>


							<div className="slideShowPics">
			                	<Slider {...settings}>
			                		<div id = "hey"><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/e/e/7/228543241.jpg"/></div>
									<div className="slideShowPics"><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/1/228543250.jpg"/></div>
		                           	<div className="slideShowPics"><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/></div>
			                		<div className="slideShowPics"><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/4/1/5/228543262.jpg"/></div>
			                		
			                	</Slider>
		                	</div>
		                }
	
		                hey its me ur brother and this is some filler text for blah blah blah blah blah editting purposes

						</div>
							
	
						<div className = "col-md-6">
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
						<div className="col-md-1" id="right-arrow"><img id="right-arrow" src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/01_arrow_right-512.png"/></div>

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

export default connect(mapStateToProps, actions)(Home);