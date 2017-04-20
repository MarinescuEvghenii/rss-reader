const cache = JSON.parse(window.localStorage.getItem('favorites')) || {};

export const reducer = (state = cache, action) => {
	switch (action.type) {
		case 'favorite/toggle':

			const _state = Object.assign({}, state, {
				[action.id]: !state[action.id]
			});

			// Yes, I know that function should be pure!
			window.localStorage.setItem('favorites', JSON.stringify(_state));

			return _state;

		default:
			return state
 	}
}
