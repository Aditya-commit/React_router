import React , { Suspense } from 'react';

const Cards =React.lazy(()=>import('./imp_head'));

const Imp_Contain=()=>{
	return(
		<Suspense fallback={<div>Loading...</div>}>
			<Cards />
		</Suspense>
	);
}
export default Imp_Contain;