import React from 'react';
import PropTypes from 'prop-types';

import Article from './Feed.Article';

import {FavoriteButton, HomeButton} from '../../../modules';

export default class Feed extends React.Component {

	constructor() {
		super();
	}

	get site() {
		return this.props.feed.url ? this.props.feed.url.replace(/(http:)|(\/)/gi, '') : ''
	}

	componentDidUpdate() {
		document.title = this.props.feed.title;
	}

	render() {
		return (
			<section className={`feed feed--${this.props.feed.status || 'init'}`}>
				{this.props.feed.status === 'error' &&
					<div className="feed__error">
						<i className="feed__error__icon fa fa-exclamation-triangle"></i>
						<h2 className="feed__title">
							An error occurred, try again later!
						</h2>
					</div>
				}

				{this.props.feed.status !== 'error' &&
					<header className="feed__header">
						<div className="feed__header__left">
							<h1 className="feed__header__title">{this.props.feed.title}</h1>
							<a className="feed__header__link" href={this.props.feed.url} target="_blank">
								{this.site}
							</a>
						</div>
						<div className="feed__header__right">
							{
								this.props.feed.category && this.props.feed.category.id !=='bookmarks' &&
								<HomeButton.component category={this.props.feed.category} />
							}

							{
								this.props.feed.category && this.props.feed.category.id !== 'bookmarks' &&
								<FavoriteButton.component id={this.props.feed.category.id} />
							}
						</div>
					</header>
				}

				{this.props.feed.status !== 'error' &&
					<div className="feed__content">
						{this.props.feed.articles && this.props.feed.articles.length === 0 &&
							<div className="feed__empty">
								<i className="feed__empty__icon fa fa-newspaper-o"></i>
								<h2 className="feed__empty__title">No articles found</h2>
							</div>
						}
						{this.props.feed.articles && this.props.feed.articles.length > 0 &&
							this.props.feed.articles.map((article, index) => {
								return <Article key={index} attributes={article}/>
							})
						}
					</div>
				}
			</section>
		)
	}
}

Feed.propTypes = {
	feed: PropTypes.object.isRequired
}
