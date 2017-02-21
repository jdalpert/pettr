import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Button } from 'react-bootstrap';
import Slider from 'react-slick';


//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class Profile extends Component {

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
						<div className="col-sm-1"/>
						<div className="col-sm-5">
							<h2>Michael Williams</h2>
							<div className="slideShowPics">
			                	<Slider {...settings}>
			                		<div className="slideShowPics"><h3><img src="http://www.setenterprises.com/var/setent/storage/images/about/personal/christopher-kristock/1185-4-eng-US/Christopher-Kristock_person.jpg"/></h3></div>
									<div className="slideShowPics"><h3><img src="http://www.setenterprises.com/var/setent/storage/images/about/personal/christopher-kristock/1185-4-eng-US/Christopher-Kristock_person.jpg"/></h3></div>
			                	</Slider>
		                	</div>
						</div>
						<div className="col-sm-5">
							<h4>Description</h4>
							<p id="description">Hi I am getting along in years and I am looking for someone to take care of my pets. I need someone to get my animals as soon as possible as I am also relocating soon.</p>
							
							<h4>Info</h4>
							<text id="owner">Southern California Pomeranian Rescue<br/></text>
							<text id="pet-location">Location: Irvine, CA<br/></text>

							<h4>Pets</h4>
							<div className="container allPets">
								<div className="container petsList">
									<div><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/e/e/7/228543241.jpg"/></div>
									<h4 className="petName"><b><Link to="/#/">Lola Bear</Link></b></h4>
								</div>
								<hr/>
								<div className="container petsList">
									<div><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/1/228543250.jpg"/></div>
									<h4 className="petName"><b><Link to="/#/">Lola Bear</Link></b></h4>
								</div>
								<hr/>
							</div>
							<div className="col-sm-1"/>
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

export default connect(mapStateToProps, actions)(Profile);