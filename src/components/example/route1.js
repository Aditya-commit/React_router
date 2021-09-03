import React , { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch
} from 'react-router-dom';

const Routing=()=>{
	return(
		<Router>
			<div id='routes'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
				<hr />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default Routing;

const Home=()=>{
	return(
		<h4>Home</h4>
	);
}

const About=()=>{
	return(
		<h4>About</h4>
	);
}

const Contact=()=>{
	return(
		<h4>Contact Us</h4>
	);
}