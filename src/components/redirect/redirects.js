import React , { Component , Fragment } from 'react';
import {
	BrowserRouter as Router,
	Link,
	Redirect ,
	Route,
	Switch
} from 'react-router-dom';

const Redirects =()=>{
	return(
		<Router>
			<div>
				<ul>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
				<Switch>
					<Route path='/about'>
						<Redirect to='/contact' />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default Redirects;

const Contact=()=>{
	return(
		<div>
			<h4>Phone number : <h3>7394807455</h3></h4>
			<h4>Email : <h3>adityatomar@gmail.com</h3></h4>
		</div>
	);
}