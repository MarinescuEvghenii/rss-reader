import React from 'react';
import PropTypes from 'prop-types';
import { toggle } from '../actions';

export default class FavoriteButton extends React.Component {

	get icon() {
		return this.props.favorites[this.props.id] ? 'fa fa-star' : 'fa fa-star-o';
	}

	get title() {
		return this.props.favorites[this.props.id] ? 'Remove from favorites' : 'Add to favorites';
	}

	constructor() {
		super();
	}

	onClick() {
		this.props.dispatch(toggle(this.props.id));
	}

	render() {
		return (
			<div className="favorite" onClick={this.onClick.bind(this)} title={this.title}>
				<i className={`favorite__icon ${this.icon}`}></i>
			</div>
		)
	}
}

FavoriteButton.propTypes = {
	favorites: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired
}
