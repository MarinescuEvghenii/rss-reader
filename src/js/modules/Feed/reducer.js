export const reducer = (state = {}, action) => {
	switch (action.type) {
		case 'feed/success':
			return Object.assign({}, state, action.attributes);

		case 'feed/error':
			return Object.assign({}, state, action.attributes);

		case 'feed/loading':
			return Object.assign({}, state, action.attributes);

		default:
			return state
 	}
}
