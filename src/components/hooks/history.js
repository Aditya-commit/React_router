import React , { Fragment , useEffect } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	useParams,
	useHistory
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
	let history=useHistory();
	useEffect(()=>{
		console.log(history);
	});
	const handleClick=()=>{
		history.push('/about');
	}
	return(
		<>
			<h4>Home</h4>
			<button onClick={handleClick}>About</button>
		</>	
	);
}

const About=()=>{
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
