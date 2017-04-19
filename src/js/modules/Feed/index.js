import Feed from './component';
import { connect } from 'react-redux';
import { reducer } from './reducer';
import * as actions from './actions';

export default {
	reducer,
	actions,
	component : connect((state) => {
		return { feed: state.feed }
	})(Feed)
};
