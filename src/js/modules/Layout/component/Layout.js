import React from 'react';
import {Feed, Categories} from '../../../modules';

export default class Layout extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div className="layout layout--base">
				<div className="layout__sidebar">
					<Categories.component />
				</div>
				<div className="layout__content">
					<Feed.component />
				</div>
			</div>
		)
	}
}
