import React from 'react';
import PropTypes from 'prop-types';
import {toggle} from '../actions';

export default class BookmarkButton extends React.Component {

	get inBookmarks() {
		return this.props.bookmarks.find(bookmark => {
			return bookmark.url === this.props.attributes.url;
		});
	}

	get icon() {
		return this.inBookmarks ? 'fa fa-bookmark' : 'fa fa-bookmark-o';
	}

	get title() {
		return this.inBookmarks ? 'Remove from bookmarks' : 'Add to bookmarks';
	}

	constructor() {
		super();
	}

	onClick() {
		this.props.dispatch(toggle(this.props.attributes));
	}

	render() {
		return (
			<div className="bookmark" onClick={this.onClick.bind(this)} title={this.title}>
				<i className={`bookmark__icon ${this.icon}`}></i>
			</div>
		)
	}
}

BookmarkButton.propTypes = {
	bookmarks: PropTypes.array.isRequired,
	attributes: PropTypes.object.isRequired
}
