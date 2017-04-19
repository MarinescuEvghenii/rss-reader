import HomeButton from './component';
import { connect } from 'react-redux';

export default {
	component : connect((state) => {
		return { categories: state.categories }
	})(HomeButton)
};
