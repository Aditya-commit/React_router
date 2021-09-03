// PASSING OBJECTS TO NAVLINK activeClassName prop
import React , { Fragment } from 'react';

import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch
} from 'react-router-dom';

const Navlink_obj =()=>{
	return(
		<Router>
			<div>
				<ul>
					<NavLink to='/home' activeStyle={{
						fontWeight:'bold',
						color:'pink'
					}}>Home</NavLink>
				</ul>
				<Switch>
					<Route path='/home'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

const Home=()=>{
	return(
		<h4>Home</h4>
	);
}

export default Navlink_obj;