import { useEffect, useState } from 'react';
import { Response, Service } from '../types/Service';

export interface Responses {
	results: Response[];
}

const useMovieService = () => {
	const [result, setResult] = useState<Service<Responses>>({ status: 'loading' });
	
	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=a1279933de606b4374a2c93a1d0127a9&query=avengers`)
			.then(response => response.json())
			.then(response => setResult({ status: 'loaded', payload: response }))
			.catch(error => setResult({ status: 'error', error }));
	}, []);

	return result;
};

export default useMovieService;
