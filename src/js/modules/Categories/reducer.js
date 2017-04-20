import Const from '../../const';

// Get saved home page
const homePageID = window.localStorage.getItem('homepage') || Const.categories[0].id;

// Load home page
const categories = Const.categories.map(category => {
	if(category.id === homePageID) {
		return Object.assign({}, category, {
			homepage: true
		});
	}
	else {
		return Object.assign({}, category, {
			homepage: false
		});
	}
});

export const reducer = (state = categories, action) => {

	switch (action.type) {
		case 'category/add':
			return [action.category, ...state];

		case 'category/remove':
			return state.filter(category => {
				return category.id !== action.category.id;
			})

		case 'category/default':
			return state.map(category => {
				if(category.id === action.category.id) {

					// Yes, I know that function should be pure!
					window.localStorage.setItem('homepage', category.id);

					return Object.assign({}, category, {
						homepage: true
					});
				}
				else {
					return Object.assign({}, category, {
						homepage: false
					});
				}
			});

		case 'category/current':
			return state.map(category => {
				if(category.id === action.category.id) {
					return Object.assign({}, category, {
						selected: true
					});
				}
				else {
					return Object.assign({}, category, {
						selected: false
					});
				}
			});

		default:
			return state
 	}
}
