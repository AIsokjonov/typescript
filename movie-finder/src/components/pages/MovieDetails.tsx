import React, { useState, useEffect } from 'react';
import { APIResponse, Service } from '../../../types/Service';

const MovieDetails = (options: APIResponse) => {
	const [movie, setMovie] = useState<Service<APIResponse>>({ status: 'loading' });

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${options.match.params.movie_id}?api_key=a1279933de606b4374a2c93a1d0127a9&language=en-US`)
		.then((response) => response.json())
		.then((response) => setMovie({ status: 'loaded', payload: response }))
		.catch((error) => setMovie({ status: 'error', error }))
	},[options.match.params.movie_id])

	return (
		<div>
			{movie.status === 'loading' && <span>Loading...</span>}
			{movie.status === 'loaded' && 
				<div>
					<img 
						src={movie.payload.poster_path
							? `https://image.tmdb.org/t/p/w500/${movie.payload.poster_path}`
							: 'https://media.gettyimages.com/photos/old-film-perforated-celluloid-picture-id155278297?s=2048x2048'
						} 
						alt={movie.payload.title} 
					/>
					<p>{movie.payload.title}</p>
					{movie.payload.release_date.length < 1
						? <p>No release date</p>
						: <p>{movie.payload.release_date}</p>
					}
				</div>
			}
			{movie.status === 'error' && <span>Something went wrong</span>}
		</div>
	);
}

export default MovieDetails;