import {createStore, combineReducers} from 'redux';

import {
	FavoriteButton,
	BookmarkButton,
	Categories,
	Feed,
} from './modules';

export default createStore(combineReducers({
	favorites  : FavoriteButton.reducer,
	bookmarks  : BookmarkButton.reducer,
	categories : Categories.reducer,
	feed       : Feed.reducer,
}));
