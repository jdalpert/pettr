import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Button, Carousel } from 'react-bootstrap';
import Slider from 'react-slick';


//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: "",
			location: ""
		};
	}

	_handleClick = () => {
		this.context.router.push("/");
	};

	componentWillReceiveProps(nextProps) {
		console.log("check");
		this.setState({id: nextProps.data});
		console.log(nextProps.data);
		console.log("was it empty?");
	}

	render() {
		// let settings = {
	 //      dots: true,
	 //      infinite: true,
	 //      speed: 500,
	 //      slidesToShow: 1,
	 //      slidesToScroll: 1
  //   	};
		return(
			<div>
				<div className="container home main-content">
					<div className="row">
						<div className="col-sm-1" id="left-arrow"><img id="left-arrow" src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/01_arrow_left-512.png"/></div>
						<div className="col-sm-6">
							<h1 class="display-4"> My name is Lola Bear! </h1>

     					 <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
       						 <Carousel.Item>
          						<img width={400} height={300} alt="400x300" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/e/e/7/228543241.jpg"/>
          						<Carousel.Caption>
           							<h3>First slide label</h3>
           							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         						</Carousel.Caption>
       						 </Carousel.Item>

       						 <Carousel.Item>
          						<img width={400} height={300} alt="400x300" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/1/228543250.jpg"/>
          						<Carousel.Caption>
           							<h3>Second slide label</h3>
           		 					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          						</Carousel.Caption>
        					</Carousel.Item>

        					<Carousel.Item>
          						<img width={400} height={300} alt="400x300" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/>
          						<Carousel.Caption>
            						<h3>Third slide label</h3>
            						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          						</Carousel.Caption>
       						</Carousel.Item>

        					<Carousel.Item>
          						<img width={400} height={300} alt="400x300" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/4/1/5/228543262.jpg"/>
          						<Carousel.Caption>
            						<h3>Fourth</h3>
            						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          						</Carousel.Caption>
       						</Carousel.Item>


      					</Carousel>
							{/*<div className="slideShowPics">
			                	<Slider {...settings}>
			                		<div className="slideShowPics"><h3><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/e/e/7/228543241.jpg"/></h3></div>
									<div className="slideShowPics"><h3><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/1/228543250.jpg"/></h3></div>
		                            <div className="slideShowPics"><h3><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/></h3></div>
			                		<div className="slideShowPics"><h3><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/4/1/5/228543262.jpg"/></h3></div>
			                	</Slider>
		                	</div>
		                */}
						</div>
						<div className="col-md-6">
							<br/>

							<text id= "facts"> Facts about me! <br/> </text>
							<text id="pet-breed">	Breed: 	</text> 	<text> Pomeranian<br/> 		</text>
							<text id="pet-color">	Color: 	</text> 	<text> White-Brown<br/> 	</text>
							<text id="pet-age">		Age: 	</text> 	<text> 10 <br/> 			</text>
							<text id="pet-gender">	Gender: </text> 	<text> Female <br/>	</text>




							<br/>
							<p id="description">Hi I am a 5 year old golden/chestnut/white female pomeranian looking for a new home! I am a small dog
							that weighs 25 lbs or less. I am already spayed, purebred, a special needs pet, and up to date with shots. Unfortunately, I have diabetes
							and will need insulin shots twice a day, but they are fairly inexpensive.
							I am respectful and get along well with both people and dogs. Please give me a new home!</p>
							<br/>

							<h4 class = "display-4">Come find me here!</h4>
							<text id="owner">Southern California Pomeranian Rescue<br/></text>
							<text id="pet-location">Location: Irvine, CA<br/></text>
							<a href="#">View Profile</a>
						</div>
						<div className="col-sm-1" id="right-arrow"><img id="right-arrow" src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/01_arrow_right-512.png"/></div>
					</div>

					<div className="row confirmButtons">
						<div className="col">
								<img className="nav-icon no" src="https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/abandonb.png?raw=true"/>
								<img className="nav-icon yes" src="https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/adoptb.png?raw=true"/>
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

export default connect(mapStateToProps, actions)(Home);
