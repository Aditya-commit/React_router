import React , { useEffect , Fragment } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	useParams,
	useLocation
} from 'react-router-dom';

const Params=()=>{
	return(
		<Router>
			<div>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/user/aditya/'>User</Link>
					</li>
				</ul>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/user/:name/:id'>
						<User />
					</Route>
					<Route path='/user/:name' component={User}/>
				</Switch>
			</div>
		</Router>
	);
}

export default Params;

const Home=()=>{
	return(
		<h4>Home</h4>
	);
}

const About=()=>{
	let location = useLocation();
	useEffect(()=>{
		console.log(location.pathname);
	},[location]);
	return(
		<h4>About</h4>
	);
}

const User=()=>{
	const {name , id}=useParams();
	return(
		<>
			<h4>User : {name}</h4>
			<h4>Id : {id}</h4>
		</>
	);
}
