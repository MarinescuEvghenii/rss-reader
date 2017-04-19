import React from 'react';
import {Provider} from 'react-redux'
import {render} from 'react-dom';
import {Layout} from './modules';

import store from './store';

class Application extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <Layout.component />
	}
}

render(
	<Provider store={store}>
		<Application/>
	</Provider>,
document.querySelector('#application'));
