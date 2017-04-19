import React from 'react';
import PropTypes from 'prop-types';

import Const from '../../../const';
import ServiceFeed from '../../../services/feed';
import CategoriesItem from './Categories.Item';

import { Feed } from '../../../modules';
import { add, setCurrent, setDefault } from '../actions';

export default class Categories extends React.Component {

	get categoryBookmark() {
		return {
			id   : 'bookmarks',
			name : 'Bookmarks'
		}
	}

	constructor() {
		super();
	}

	componentDidMount() {
		// Add custom bookmark category;
		this.props.dispatch(add(this.categoryBookmark));

		// Load home page
		this.props.categories.map(category => {
			category.homepage && this.getContent(category);
		});
	}

	getContent(category) {
		// Get saved bookmarks from localStorage
		if(category.id === this.categoryBookmark.id) {
			this.getBookmarks(category);
		}
		// Fetch feed from server
		else {
			this.getFeed(category);
		}
	}

	getBookmarks(category) {
		// Set bookmarks as selected category
		this.props.dispatch(setCurrent(category));

		this.props.dispatch(Feed.actions.success({
			status   : 'success',
			title    : category.name,
			category : category,
			articles : this.props.bookmarks
		}));
	}

	getFeed(category) {
		// Set current selected category
		this.props.dispatch(setCurrent(category));

		// Fetch data from server
		ServiceFeed.fetch({
			url     : `${Const.api}?rss_url=${category.url}&api_key=${Const.key}`,
			success : response => {
				response = Object.assign({}, response, {
					category: category
				});
				this.props.dispatch(Feed.actions.success(response));
			},
			error   : error => {
				this.props.dispatch(Feed.actions.error(error))
			}
		});
	}

	buildItem(props) {
		switch (props.category.id) {
			case 'bookmarks':

				// Customize props
				props = Object.assign({}, props, {
					hasFavoriteButton : false,
					badgeText         : this.props.bookmarks.length
				})

				// Return component for bookmarks
				return <CategoriesItem
							key={props.index}
							category={props.category}
							badgeText={props.badgeText}
							hasFavoriteButton={props.hasFavoriteButton}
							onClick={props.onClick} />

				break;
			default:
				// Return default component
				return <CategoriesItem
							key={props.index}
							category={props.category}
							badgeText={props.badgeText}
							hasFavoriteButton={props.hasFavoriteButton}
							onClick={props.onClick} />
		}
	}

	render() {
		return (
			<section className="menu">

				<header className="menu__header">
					<h1 className="menu__header__title">Feed Reader<small>beta</small></h1>
				</header>

				<nav className="menu__navigation">
					{
						this.props.categories.map((category, index) => {
							return this.buildItem({
								index,
								category,
								hasFavoriteButton : true,
								onClick : () => {
									this.getContent(category);
								}
							})
						})
					}
				</nav>
			</section>
		)
	}
}

Categories.propTypes = {
	bookmarks: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
}
