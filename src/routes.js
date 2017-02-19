import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import App from './components/app.react';
import Child from './components/child.react';
import Display from './components/display.react';
import Test from './components/test.react';
import MissionStatement from './components/mission_statement.react';

//import Greeting from './components/greeting.react';

/*function Greeting1() {
	return <div>HIiiiiiiiii!</div>;
}*/

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Child}/>
		<Route path="/display" component={Display} />
		<Route path="/child" component={Child}/>
		<Route path="/test" component={Test}/>
		<Route path="/mission_statement" component={MissionStatement}/>
	</Route>
);
