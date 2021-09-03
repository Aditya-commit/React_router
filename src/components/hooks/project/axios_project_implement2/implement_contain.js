import React , { Suspense } from 'react';

//IMPORTING FILES 
import Implement1 from './implement1';

const Display = React.lazy(()=>import('./fetch_comment2'));

const Implement_Contain =()=>{
	return(
		<>
			<Implement1 />
			<Suspense fallback={<h3>Loading...</h3>}>
				<Display />
			</Suspense>
		</>
	);
}
export default Implement_Contain;