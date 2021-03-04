import { useEffect, useState } from 'react';
import { Response, Service } from '../types/Service';

const MovieDetailService = (props: any) => {
	const [movie, setMovie] = useState<Service<Response>>({ status: 'loading' });

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${props.match.params.movie_id}?api_key=a1279933de606b4374a2c93a1d0127a9&language=en-US`)
		.then((response) => response.json())
		.then((response) => setMovie({ status: 'loaded', payload: response }))
		.catch((error) => setMovie({ status: 'error', error }))
	})
	
	return movie;
}

export default MovieDetailService;