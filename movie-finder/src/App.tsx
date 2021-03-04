import React from 'react';

import useMovieService  from './useMovieService';

const App: React.FC<{}> = () => {
	const service = useMovieService();

	return (
		<div>
			{service.status === 'loading' && <div>Loading...</div>}
			{service.status === 'loaded' &&
				service.payload.results.map(item => (
					<div key={item.id}>{item.title}</div>
				))}
			{service.status === 'error' && (
				<div>Error, the backend moved to the dark side</div>
			)}
		</div>
	);
}

export default App;
