import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import {BookmarkButton} from '../../../modules';

export default class Article extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<article className="article">
				<time className="article__datetime">{Moment(this.props.attributes.datatime).format('MMMM Do YYYY, h:mma')}</time>
				<h1 className="article__title">{this.props.attributes.title}</h1>
				<div className="article__description">{this.props.attributes.description}</div>
				<div className="article__actions">
					<a className="article__actions__button" href={this.props.attributes.url} target="_blank" title={`Read article - ${this.props.attributes.title}`}>
						<i className="fa fa-share" aria-hidden="true"></i>
					</a>
					<BookmarkButton.component attributes={this.props.attributes} />
				</div>
			</article>
		)
	}
}

Article.propTypes = {
	attributes: PropTypes.object.isRequired
}
