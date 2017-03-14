import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import App from './components/app.react';
import Child from './components/child.react';
import Display from './components/display.react';
import Test from './components/test.react';
import Signup from './components/signup.react';
import Home from './components/home.react';
import Profile from './components/profile.react';
import Mission from './components/mission.react';
import Messages from './components/messages.react';
import Settings from './components/settings.react';
import AddPet from './components/addPet.react';
import Login from './components/login.react';
import ViewDog from './components/viewDog.react';


//import Greeting from './components/greeting.react';

/*function Greeting1() {
	return <div>HIiiiiiiiii!</div>;
}*/

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/display" component={Display} />
		<Route path="/child" component={Child}/>
		<Route path="/test" component={Test}/>
		<Route path="/settings" component={Settings}/>
		<Route path="/signup" component={Signup}/>
		<Route path="/home" component={Home}/>
		<Route path="/profile" component={Profile}/>
		<Route path="/profile/:id" component={Profile}/>
		<Route path="/mission" component={Mission}/>
		<Route path="/messages" component={Messages}/>
		<Route path="/messages/:id" component={Messages}/>
		<Route path="/addpet" component={AddPet}/>
		<Route path="/login" component={Login}/>
		<Route path="/viewdog" component={ViewDog}/>
	</Route>
);
