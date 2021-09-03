import React , { useEffect , useState , Fragment } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styles from './implement2.module.css';

const Display =()=>{	
	
	useEffect(()=>{
	// PERFORMING THE GET REQUEST 
		axios.get('https://jsonplaceholder.typicode.com/comments')
		.then((response)=>{
			const data=response.data;
			
			const listid=data.map(value=><li key={value.id} className={styles.data}>{value.id}</li>);
			const listname=data.map(value=><li key={value.id} className={styles.data}>{value.name}</li>);
			const listemail=data.map(value=><li key={value.id} className={styles.data}>{value.email}</li>);
			const listcomment=data.map(value=><li key={value.id} className={styles.data}>{value.body}</li>);
			
			ReactDOM.render(<>{listid}</> , document.getElementById('id'));
			ReactDOM.render(<>{listname}</>,document.getElementById('name'));
			ReactDOM.render(<>{listemail}</> , document.getElementById('email'));
			ReactDOM.render(<>{listcomment}</>,document.getElementById('comment'));
		})
		.catch((error)=>{
			ReactDOM.render(<h4>Oops!Something went wrong</h4>,document.getElementById('data'));	
		});	
	},[]);
	
	return(
		<div className={styles.contain} id='data'>
			<ol id='id'></ol>
			<ol id='name'></ol>
			<ol id='email'></ol>
			<ol id='comment'></ol>
		</div>
	);
}
export default Display