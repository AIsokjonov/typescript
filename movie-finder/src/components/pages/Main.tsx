import React, { useState, useEffect } from 'react';
import { APIResponse, Service }  from '../../../types/Service';
import { Link } from 'react-router-dom';

interface Responses {
	results: APIResponse[];
}

const Main = () => {

	const [result, setResult] = useState<Service<Responses>>({ status: 'loading' });
	const [query, setQuery] = useState<string>('');
	
	async function FetchMovies() {
		useEffect(() => {
			fetch(`https://api.themoviedb.org/3/search/movie?api_key=a1279933de606b4374a2c93a1d0127a9&query=${query}`)
			.then(response => response.json())
			.then(response => setResult({ status: 'loaded', payload: response }))
			.catch(error => setResult({ status: 'error', error }));
		}, []);
	}

	function handleChange(e: any) {
		setQuery(e.target.value);
		console.log(`query: ${query}`);
	}

	async function handleSubmit(e: any) {
		FetchMovies();
	}

	return (
		<div>
			<div>
				<input type="text" value={query} onChange={handleChange} />
				<button onClick={handleSubmit}>Search</button>
			</div>
			{result.status === 'loading' && <div>Loading...</div>}
			{result.status === 'loaded' &&
				result.payload.results.map(item => (
					<div key={item.id}>
						<Link to={`/movie/${encodeURIComponent(item.id)}`}>{item.title} | {item.release_date}</Link>
					</div>
				))}
			{result.status === 'error' && (
				<div>Error, the backend moved to the dark side</div>
			)}
		</div>
	);
}

export default Main;