import React , { Fragment , useEffect } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import styles from './cards.module.css';

const Cards =()=>{
	
	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/comments')
		.then((response)=>{
			let id=[];
			let name=[];
			let email=[];
			let comment=[];
			
			let data=response.data;
			const element=data.map(value=>{
				return(
					<article className={styles.items}>
						<h3>{value.id}</h3>
						<h5>{value.name}</h5>
						<p>{value.body}</p>
					</article>
				);
			});
			ReactDOM.render(<>{element}</>,document.getElementById('cards'));
		})
		.catch((errors)=>{
			ReactDOM.render(<h3>Oops! Something went wrong</h3>,document.getElementById('cards'));
		});	
	});
	
	return(
		<div className={styles.container}>
			<div className={styles.containers} id='cards'></div>
		</div>
	);
}
export default Cards;