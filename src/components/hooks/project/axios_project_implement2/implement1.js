import React , { useState , useEffect , Fragment } from 'react';
import styles from './implement.module.css';

const Implement1=()=>{
	return(
		<div id='heading'>
			<ul id='ulist'>
				<li className={styles.lists} id='idhead'>Id</li>
				<li className={styles.lists} id='namehead'>Name</li>
				<li className={styles.lists} id='emailhead'>Email</li>
				<li className={styles.lists} id='commenthead'>Comment</li>
			</ul>
		</div>
	);
}
export default Implement1;