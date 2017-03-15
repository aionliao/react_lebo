/*eslint-disable no-unused-vars*/
import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';

import App from './app.jsx';
import Index from './view/index/index.jsx';

render((
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Index} />
		</Route>
	</Router>
), document.getElementById('app'));
