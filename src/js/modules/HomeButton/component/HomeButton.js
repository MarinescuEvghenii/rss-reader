import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Categories } from '../../../modules/';

export default class HomeButton extends React.Component {
	get homePage() {
		return this.props.categories.find((category) => {
			return category.homepage;
		})
	}

	get title() {
		return this.props.category.id === this.homePage.id ? 'This is your home page' : 'Set as home page';
	}

	get className() {
		return this.props.category.id === this.homePage.id ? 'homepage homepage--selected' : 'homepage';
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
