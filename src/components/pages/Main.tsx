import React from 'react';
import useMovieService from '../../services/useMovieService';
import { Link } from 'react-router-dom';

const Main: React.FC<{}> = () => {
  const service = useMovieService();

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.results.map((item) => (
          <div key={item.id}>
            <Link to={`/movie/${encodeURIComponent(item.id)}`}>{item.title}</Link>
          </div>
        ))}
      {service.status === 'error' && <div>Error, the backend moved to the dark side</div>}
    </div>
  );
};

export default Main;
