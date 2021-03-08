import useMovieService from '../../services/useMovieDetailService';
import { APIResponse } from '../../../types/Service';

const MovieDetails = (props: APIResponse) => {
  const service = useMovieService(props);

  return (
    <div>
      {service.status === 'loading' && <span>Loading...</span>}
      {service.status === 'loaded' && <span>{service.payload.title}</span>}
      {service.status === 'error' && <span>Something went wrong</span>}
    </div>
  );
};

export default MovieDetails;
