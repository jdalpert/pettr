import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";
import { Button , Carousel} from 'react-bootstrap';
import Slider from 'react-slick';


//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			login: false,
			userId: "",
			email: "",
			firstName: "",
			lastName: "",
			city: "",
			state: "",
			pets: [],
			description: "",
			organization: ""
		};
	}
	componentWillMount(){
		console.log("check2");
		if(this.props.data && !Array.isArray(this.props.data)){
			console.log("These are the props data");
			console.log(this.props.data.userId);
			if(this.props.data.userId && !this.props.data.email){
				this.setState({userId: this.props.data.userId, login: true});
				this.props.getUserInfo(this.props.data.userId);
			}
			if(this.props.data.email){
				this.setState(
					{
						//userId: this.props.data._id,
						email: this.props.data.email,
						firstName: this.props.data.firstName,
						lastName: this.props.data.lastName,
						city: this.props.data.city,
						state: this.props.data.state,
						pets: this.props.data.pets,
						description: this.props.data.description,
						organization: this.props.data.organization
					});
			}
			console.log("was it empty?2");
		}else if (!this.state.login && !Array.isArray(this.props.data))
			this.context.router.push("/login");
		else{
			console.log("ASDDSSS");
			console.log(this.props);
			if (this.props.params)
				this.props.getUserInfo(this.props.params.id);
		}
		console.log("end");
	}

	componentWillReceiveProps(nextProps) {
		console.log("check");
		console.log(nextProps);
		if(nextProps.data && !Array.isArray(nextProps.data)){
			if(nextProps.data.userId && !nextProps.data.email){
				this.setState({userId: nextProps.data.userId, login: true});
				this.props.getUserInfo(nextProps.data.userId);
			}
			if(nextProps.data.email){
				this.setState(
					{
						//userId: nextProps.data._id,
						email: nextProps.data.email,
						firstName: nextProps.data.firstName,
						lastName: nextProps.data.lastName,
						city: nextProps.data.city,
						state: nextProps.data.state,
						pets: nextProps.data.pets,
						description: nextProps.data.description,
						organization: nextProps.data.organization,
						login: true
					});
			}
			console.log("was it empty?");
		}
	}

	static contextTypes = {
		router: PropTypes.object
	};

	_handleClick = (id) =>{
		this.props.getPetOwnerInfo(id);
		console.log(id);
		this.context.router.push("/viewdog");
	};

	_handleAdd = (id) =>{
		this.props.getUserInfo(id);
		this.context.router.push("/addpet");
	}

	render() {
    	let petsArry = (this.state.pets.length)?
    		this.state.pets.map((org) => {
    			let singlePet = (
    				<div>
	    				<div className="container petsList">
							<div><img src="https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/1/228543250.jpg"/></div>
							<h4 className="petName"><a onClick={() => this._handleClick(org.petId)}><b key={org.petId}>{org.petName}</b></a></h4>
						</div>
						<hr/>
					</div>
				);
				return singlePet;
    		}):
    		<div>
	    		<div className="container petsList">
					<h4 className="petName"><b>No Pets</b></h4>
				</div>
				<hr/>
			</div>;
		return(
			<div>
				<div className="container home main-content profile">
					<div className="row profile">
						<div className="col-sm-1"/>
						<div className="col-sm-5">
							<h2>{this.state.firstName} {this.state.lastName}</h2>


							<Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
									<Carousel.Item>
										 <img width={400} height={300} alt="400x300" src="http://www.setenterprises.com/var/setent/storage/images/about/personal/christopher-kristock/1185-4-eng-US/Christopher-Kristock_person.jpg"/>
										 <Carousel.Caption>
											 <h3>First slide label</h3>
											 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									 </Carousel.Caption>
									</Carousel.Item>

									<Carousel.Item>
										 <img width={400} height={300} alt="400x300" src="http://www.setenterprises.com/var/setent/storage/images/about/personal/christopher-kristock/1185-4-eng-US/Christopher-Kristock_person.jpg"/>
										 <Carousel.Caption>
											 <h3>Second slide label</h3>
											 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										 </Carousel.Caption>
								 </Carousel.Item>
							</Carousel>





						</div>
						<div className="col-sm-5">
							<h4>Description</h4>
							<p id="description">{this.state.description}</p>

							<h4>Info</h4>
							{(this.state.organization)?
								<text id="owner">Organization: {this.state.organization}<br/></text>:
								<text id="owner">Organization: N/A<br/></text>
							}
							<text id="pet-location">Location: {this.state.city}, {this.state.state}<br/></text>
						{/* Remember to remove button if just viewing a profile */}
							<h4>Pets  <Button onClick={() => this._handleAdd(this.state.userId)}>Add pet?</Button></h4>
							<div className="container allPets">
								{petsArry}
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
