const cache = JSON.parse(window.localStorage.getItem('bookmarks')) || [];

export const reducer = (state = cache, action) => {
	switch (action.type) {

		case 'bookmark/toggle':
			let removed = false;

			let _state = state.filter(bookmark => {
				if(bookmark.url !== action.bookmark.url) {
					return true;
				}
				else {
					removed = true;
					return !removed;
				}
			});

			if(!removed) {
				_state = [action.bookmark, ...state];
			}

			// Yes, I know that function should be pure!
			window.localStorage.setItem('bookmarks', JSON.stringify(_state));
			return _state;

		default:
			return state
 	}
}
