import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/pages/Main';
import MovieDetails from './components/pages/MovieDetails';

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
