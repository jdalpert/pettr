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
			userId: "",
			name: "",
			age: "",
			color: "",
			gender: "",
			size: "",
			type: "",
			city: "",
			state: "",
			description: "",
			//add css to make things you want to not to display not to display and use the owner property to get rid of them
			owner: false,
			pets: [],
			petIndex: 0,
		};
	}

	_handleClick = () => {
		this.context.router.push("/");
	};

	componentWillMount(){
		if(!this.state.owner)
			this.props.getAllPets();
	}

	componentWillReceiveProps(nextProps) {
		console.log("check");
		if(!Array.isArray(nextProps.data) && nextProps.data.owner){
			if(nextProps.data.userId)
				this.setState(nextProps.data);
			console.log(nextProps.data);
		}else if(Array.isArray(nextProps.data) && nextProps.data){
			console.log("what?");
			this.setState(nextProps.data[this.state.petIndex]);
			this.setState({pets: nextProps.data});
			console.log(nextProps.data);
		}
		console.log(nextProps);
		console.log("was it empty?");
	}

	// for the carousel changing 

	change0 = () =>{
		this.setState({index:0});
	}

	change1 = () =>{
		this.setState({index:1});
	}

	change2 = () =>{
		this.setState({index:2});
	}

	change3 = () =>{
		this.setState({index:3});
	}

	// for the carousel changing

	render() {
		return(
			<div>
				<div className="container home main-content">
					<div className="row">
						<div className="col-sm-1" id="left-arrow"><img id="left-arrow" src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/01_arrow_left-512.png"/></div>
						<div className="col-md-8 FIRST-HALF">
							<div className = "row carousel-thumbnails">
								<div className="col-sm-9 carousel-stuff">
									<h1 class="display-4"> My name is {this.state.name}! </h1>
			     					 <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
			       						<Carousel.Item> <img width={400} height={300} alt="400x300" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/e/e/7/228543241.jpg"/> </Carousel.Item>
			       						<Carousel.Item> <img width={400} height={300} alt="400x300" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/1/228543250.jpg"/> </Carousel.Item>
			       						<Carousel.Item> <img width={400} height={300} alt="400x300" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg"/> </Carousel.Item>
			       						<Carousel.Item> <img width={400} height={300} alt="400x300" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/4/1/5/228543262.jpg"/> </Carousel.Item>
			      					</Carousel>
								</div>

								<div className = "col-sm-3 thumbnails">
									<div className = "row">
										<button className="btn btn-primary btn-xs thumbnail-button" onClick={this.change0}><img className="nav-icon thumbnail" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/e/e/7/228543241.jpg" alt="Image"/></button>
									</div>

									<div className = "row">
										<button className="btn btn-primary btn-xs thumbnail-button" onClick={this.change1}><img className="nav-icon thumbnail" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/1/228543250.jpg" alt="Image"/></button>
									</div>

									<div className = "row">
										<button className="btn btn-primary btn-xs thumbnail-button" onClick={this.change2}><img className="nav-icon thumbnail" src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/0/a/b/228543256.jpg" alt="Image"/></button>
									</div>
									
									<div className = "row">
										<button className="btn btn-primary btn-xs thumbnail-button" onClick={this.change3}><img className="nav-icon thumbnail" width={64} height={64} src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/4/1/5/228543262.jpg" alt="Image"/></button>
									</div>
								</div>
							</div>
						</div>


						<div className="col-md-3 SECOND-HALF">
							<div className="pet-bio-info">
								<text id="facts"> About Me <br/></text>

								<div className="row nested">
									<div className="col-sm-6 about-1">
										<text id="pet-type">{"Type: "}</text><text>{(this.state.type)? this.state.type : "N/A"}</text><br/> 
										<text id="pet-age">{"Age: "}</text><text>{(this.state.age)? this.state.age : "N/A"}</text><br/> 
										<text id="pet-size">{"Size: "}</text><text>{(this.state.size)? this.state.size : "N/A"}</text><br/> 
									</div>

									<div className="col-sm-6 about-2">
										<text id="pet-gender">{"Color: "}</text><text>{(this.state.color)? this.state.color : "N/A"}</text><br/>
										<text id="pet-gender">{"Gender: "}</text><text>{(this.state.gender)? this.state.gender :"N/A"}</text><br/>								
									</div>
								</div>
							</div>

							<div className="petDescription">
								<p id="description">{this.state.description}</p>
							</div>

							<div className="locationInfo">
								<h4 id="locationText">Come find me here!</h4>
								<text id="pet-location">Location: {this.state.city}, {this.state.state}<br/></text>
								<a href="#">View Owner Profile</a>
							</div>
						</div>
					</div>


					<div className="row confirmButtons">
						<div className="col">
							<img className="nav-icon no" src="https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/abandonb.png?raw=true"/>
							<img className="nav-icon yes" src="https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/adoptb.png?raw=true"/>
						</div>
					</div>	


					<div className="col-sm-1" id="right-arrow"><img id="right-arrow" src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/01_arrow_right-512.png"/></div>

						
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
