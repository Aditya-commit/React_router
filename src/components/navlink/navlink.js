import React , { Fragment } from 'react';

import {
	BrowserRouter as Router,
	Link, 
	NavLink,
	Switch,
	Route
} from 'react-router-dom';
import styles from './navlink.module.css';

const Navlinks=()=>{
	return(
		<Router>
			<div>
				<ul>
					<NavLink to='/about' activeClassName={styles.active}>About</NavLink>
					<br />
					<Link to='/contact'>Contact</Link>
				</ul>
				<Switch>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default Navlinks;

const About=()=>{
	return(
		<h4>Activated Link About</h4>
	);
}

const Contact=()=>{
	return(
		<h4>Contact Us</h4>
	);
}