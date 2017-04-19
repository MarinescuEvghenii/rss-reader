import React from 'react';
import PropTypes from 'prop-types';

import {FavoriteButton} from '../../../modules';

export default class MenuItem extends React.Component {

	get icon() {
		return {
			'arts'         : 'paint-brush',
			'business'     : 'line-chart',
			'company-news' : 'building',
			'entertainment': 'smile-o',
			'environment'  : 'recycle',
			'health-news'  : 'medkit',
			'lifestyle'    : 'male',
			'money'        : 'money',
			'most-read'    : 'fire',
			'people'       : 'users',
			'politics'     : 'black-tie',
			'science'      : 'flask',
			'sports'       : 'futbol-o',
			'technology'   : 'cogs',
			'world'        : 'globe',
			'bookmarks'    : 'bookmark'
		}
	}

	constructor() {
		super();
	}

	render() {
		return (
			<div
				className={this.props.category.selected ? 'menu__navigation__item is-selected' : 'menu__navigation__item'}>

				<div
					className="menu__navigation__item__button"
					onClick={this.props.onClick}>

					<i className={`icon fa fa-${this.icon[this.props.category.id]}`}></i>
					{
						this.props.badgeText > 0 &&
						<div className="badge">{this.props.badgeText}</div>
					}

					<div className="text">{this.props.category.name}</div>
				</div>

				{
					this.props.hasFavoriteButton && this.props.category &&
					<FavoriteButton.component id={this.props.category.id} />
				}
			</div>
		)
	}
}


MenuItem.propTypes = {
	badgeText: PropTypes.number,
	hasFavoriteButton: PropTypes.bool,
	category: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
}
