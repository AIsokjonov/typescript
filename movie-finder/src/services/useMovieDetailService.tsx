import { useEffect, useState } from 'react';
import { APIResponse, Service } from '../../types/Service';

const useMovieService = (options: APIResponse) => {
	const [movie, setMovie] = useState<Service<APIResponse>>({ status: 'loading' });

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${options.match.params.movie_id}?api_key=a1279933de606b4374a2c93a1d0127a9&language=en-US`)
		.then((response) => response.json())
		.then((response) => setMovie({ status: 'loaded', payload: response }))
		.catch((error) => setMovie({ status: 'error', error }))
	},[options.match.params.movie_id])
	
	return movie;
}

export default useMovieService;