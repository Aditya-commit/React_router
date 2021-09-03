import React , { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch
} from 'react-router-dom';

const Same_path=()=>{
	return(
		<Router>
			<div>
				<Link to='/same1'>Same1</Link>
				<br />
				<Link to='/same2'>Same2</Link>
			</div>
			<Switch>
				<Route path='/same1'>
					<Same1 />
				</Route>
				<Route path='/same1'>
					<Same_1 />
				</Route>
				<Route path='/same2'>
					<Same2 />
				</Route>
			</Switch>
		</Router>
	);
}
export default Same_path;

const Same1=()=>{
	return(
		<h4>Same1</h4>
	);
}

const Same_1 =()=>{
	return(
		<h4>Same_1</h4>
	);
}

const Same2 =()=>{
	return(
		<h4>Same2</h4>
	);
}