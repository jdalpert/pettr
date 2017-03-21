import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Button, Carousel } from 'react-bootstrap';
import Slider from 'react-slick';


//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class ViewDog extends Component {

	constructor(props) {
		super(props);
		this.state = {
			ownerId: "",
			_id: "",
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
			images: [],
			//add css to make things you want to not to display not to display and use the owner property to get rid of them
			owner: true,
			pets: [],
			petIndex: 0,
			adoptIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/buttonlikes.png?raw=true",
			abandonIc:"https://github.com/jdalpert/pettr/blob/master/src/components/assets/buttonnolikes.png?raw=true",
			leftArrowIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/leftarrow.png?raw=true",
			rightArrowIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/rightarrow.png?raw=true"
		};
	}

	_handleClick = () => {
		this.context.router.push("/");
	};

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

	_handleLeft = () =>{
		let decPet = this.state.petIndex;
		decPet--;
		if (decPet < 0)
			decPet = this.state.pets.length - 1;
		this.setState({petIndex: decPet});
		this.setState(this.state.pets[decPet]);
	}

	_handleRight = () =>{
		let incPet = this.state.petIndex;
		incPet++;
		if (incPet > this.state.pets.length - 1)
			incPet = 0;
		this.setState({petIndex: incPet});
		this.setState(this.state.pets[incPet]);
	}

	_handleAbandon = () =>{
		this._handleRight();

	}

	_handleAdopt = () =>{
		let pet = this.state;
		pet.pets = [];
		this.props.addMatch(pet);
		this._handleRight();
	}

	adoptHover = () =>{
		this.setState({adoptIc:"https://github.com/jdalpert/pettr/blob/9d915538eef3ecc87edc0834f6a850c40a336e47/src/components/assets/buttonlikeslight.png?raw=true"});
	}
	adoptUnhover = () =>{
		this.setState({adoptIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/buttonlikes.png?raw=true"});
	}

	abandonHover = () =>{
		this.setState({abandonIc:"https://github.com/jdalpert/pettr/blob/9d915538eef3ecc87edc0834f6a850c40a336e47/src/components/assets/buttonnolikeslight.png?raw=true"});
	}
	abandonUnhover = () =>{
		this.setState({abandonIc:"https://github.com/jdalpert/pettr/blob/master/src/components/assets/buttonnolikes.png?raw=true"});
	}

	rightHover = () =>{
		this.setState({rightArrowIc:"https://github.com/jdalpert/pettr/blob/698f8f0ed367f20bccf0f94856014a2bb5cb4d61/src/components/assets/rightarrowlight.png?raw=true"});
	}
	rightUnhover = () =>{
		this.setState({rightArrowIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/rightarrow.png?raw=true"});
	}
	leftHover = () =>{
		this.setState({leftArrowIc:"https://github.com/jdalpert/pettr/blob/698f8f0ed367f20bccf0f94856014a2bb5cb4d61/src/components/assets/leftarrowlight.png?raw=true"});
	}
	leftUnhover = () =>{
		this.setState({leftArrowIc:"https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/leftarrow.png?raw=true"});
	}


	// for the carousel changing

	render() {
		let imagePlaceholder = "";
		if(this.state.type == "Dog" || this.state.type == "dog")
			imagePlaceholder = "https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/dogasset.png?raw=true"
		if(this.state.type === "Cat" || this.state.type === "cat") 
			imagePlaceholder = "https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/catasset.png?raw=true"
		if(this.state.type === "Other" || this.state.type === "other") 
			imagePlaceholder = "https://github.com/jdalpert/pettr/blob/PotatoBranch/src/components/assets/otherasset.png?raw=true"
		return(
			<div>
				<div className="container home main-content">
					<div className="row">
						<div className="col-md-6 FIRST-HALF">
							<div className = "row carousel-thumbnails">
								<div className="col-sm-9 carousel-stuff">
									<div className = "row">
										<h2 className="display-4"> My name is {this.state.name}! </h2>
									</div>
									{(this.state.images.length !== 0 && (this.state.images[0].pic || this.state.images[1].pic  || this.state.images[2].pic || this.state.images[3].pic))?
			     					 <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} interval={500000000}>
			       						{(this.state.images[0].pic)?<Carousel.Item> <img width={400} height={300} alt="400x300" src={(this.state.images[0].pic)}/> </Carousel.Item>:<span></span>}
			       						{(this.state.images[1].pic)?<Carousel.Item> <img width={400} height={300} alt="400x300" src={(this.state.images[1].pic)}/> </Carousel.Item>:<span></span>}
			       						{(this.state.images[2].pic)?<Carousel.Item> <img width={400} height={300} alt="400x300" src={(this.state.images[2].pic)}/> </Carousel.Item>:<span></span>}
			       						{(this.state.images[3].pic)?<Carousel.Item> <img width={400} height={300} alt="400x300" src={(this.state.images[3].pic)}/> </Carousel.Item>:<span></span>}
			      					 </Carousel>:
			      					<img  width={400} height={300} alt="400x300" id="user-pic" src={imagePlaceholder}/>
			      					}
								</div>
								{(this.state.images.length !== 0 && (this.state.images[0].pic || this.state.images[1].pic  || this.state.images[2].pic || this.state.images[3].pic))?
									<div className = "col-sm-3 thumbnails">
											{(this.state.images[0].pic)?<button className="btn btn-primary btn-xs thumbnail-button" onClick={this.change0}><img className="nav-icon thumbnail" src={this.state.images[0].pic} alt="Image"/></button>:<span></span>}
											{(this.state.images[1].pic)?<button className="btn btn-primary btn-xs thumbnail-button" onClick={this.change1}><img className="nav-icon thumbnail" src={this.state.images[1].pic} alt="Image"/></button>:<span></span>}
											{(this.state.images[2].pic)?<button className="btn btn-primary btn-xs thumbnail-button" onClick={this.change2}><img className="nav-icon thumbnail" src={this.state.images[2].pic} alt="Image"/></button>:<span></span>}
											{(this.state.images[3].pic)?<button className="btn btn-primary btn-xs thumbnail-button" onClick={this.change0}><img className="nav-icon thumbnail" src={this.state.images[3].pic} alt="Image"/></button>:<span></span>}
									</div>:
									<div className = "col-sm-3 thumbnails"></div>
								}
							</div>
						</div>


						<div className="col-md-5 SECOND-HALF">
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
{/*								<a href={"/#/profile/" + this.state.userId}>View Owner Profile</a>
*/}							</div>
						</div>
					</div>


					<div className="row confirmButtons">
						{(!this.state.owner)?<img className="nav-icon no" onClick={this._handleAbandon} src={this.state.abandonIc} onMouseOver={this.abandonHover} onMouseOut={this.abandonUnhover}/>:<span></span>}
						{(!this.state.owner)?<img className="nav-icon yes" onClick={this._handleAdopt} src={this.state.adoptIc} onMouseOver={this.adoptHover} onMouseOut={this.adoptUnhover}/>:<span></span>}
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

export default connect(mapStateToProps, actions)(ViewDog);
