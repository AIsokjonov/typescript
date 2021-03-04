import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import MovieDetails from './pages/MovieDetails';

const Routes: React.FC<{}> = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Main} exact />
				<Route path="/movie/:movie_id" component={MovieDetails} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
