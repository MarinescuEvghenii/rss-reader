import Const from '../../const';

// Get saved home page
const homepage = window.localStorage.getItem('homepage') || Const.categories[0].id;

// Load home page
homepage && Const.categories.map(category => {
	if(category.id === homepage) {
		return category.homepage = true;
	}
	else {
		return category.homepage = false;
	}
});

export const reducer = (state = Const.categories, action) => {
	let _state = [...state];

	switch (action.type) {
		case 'category/load':
			return action.categories;

		case 'category/add':
			return [action.category, ...state];

		case 'category/remove':
			return state.filter(category => {
				return category.id !== action.category.id;
			})

		case 'category/default':
			_state.map(category => {
				if(category.id === action.category.id) {
					window.localStorage.setItem('homepage', category.id);
					return category.homepage = true;
				}
				else {
					return category.homepage = false;
				}
			});

			return _state;


		case 'category/current':
			_state.map(category => {
				if(category.id === action.category.id) {
					return category.selected = true;
				}
				else {
					return category.selected = false;
				}
			});

			return _state;

		default:
			return state
 	}
}
