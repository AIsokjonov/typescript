import MovieDetailService from '../MovieDetailsService';

const MovieDetails = (props: Response) => {
	const service = MovieDetailService(props);

	return (
		<div>
			{service.status === 'loading' && <span>Loading...</span>}
			{service.status === 'loaded' && <span>{service.payload.title}</span>}
			{service.status === 'error' && <span>Something went wrong</span>}
		</div>
	);
}

export default MovieDetails;