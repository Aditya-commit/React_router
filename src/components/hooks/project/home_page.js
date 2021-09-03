import React , { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	useHistory
} from 'react-router-dom';

//IMPORTING MODULES
import Implement_Contain from './axios_project_implement2/implement_contain';
import Imp_Contain from './axios_project_implement3/axios_implement_contain';

const Project=()=>{
	return(
		<Router getUserConfirmation={(message,callback)=>{
			//THIS IS THE DEFAULT BEHAVIOUR
			const allowTransition=window.confirm('Are you sure you want to see this project');
			callback(allowTransition);
		}}>
			<div>
				<ul>
					<li>
						<Link to='/project1'>Project 1</Link>
					</li>
					<li>
						<Link to='/project2'>Project 2</Link>
					</li>
				</ul>
				<Switch>
					<Route path='/project1'>
						<Project1 />
					</Route>
					<Route path='/project2'>
						<Project2 />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default Project;

const Project1=()=>{
	let history=useHistory();
	
	const handleClick=()=>{
		//history.goBack();
		history.push('/');
	}
	return(
		<>
			<button onClick={handleClick}>Go Back</button>
			<Imp_Contain />
		</>
	);
}

const Project2 =()=>{
	let history=useHistory();

	const handleClick=()=>{
		//history.goBack();
		history.push('/');
	}
	return(
		<>
			<button onClick={handleClick}>Go Back</button>
			<Implement_Contain />
		</>
	);
}