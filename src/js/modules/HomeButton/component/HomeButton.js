import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Categories } from '../../../modules/';

export default class HomeButton extends React.Component {
	get title() {
		return this.props.category.homepage ? 'This is your home page' : 'Set as home page';
	}

	get className() {
		return this.props.category.homepage ? 'homepage homepage--selected' : 'homepage';
	}

	constructor() {
		super();
	}

	onClick() {
		this.props.dispatch(Categories.actions.setDefault(this.props.category));
	}

	render() {
		return (
			<div className={this.className} onClick={this.onClick.bind(this)} title={this.title}>
				<i className="homepage__icon fa fa-home"></i>
			</div>
		)
	}
}

HomeButton.propTypes = {
	category: PropTypes.object.isRequired
}
