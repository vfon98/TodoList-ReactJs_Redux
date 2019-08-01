import * as types from '../constants/ActionTypes';

var initialState = {
	name: "",
	status: 0
};

var reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SORT_TASK:
			console.log(action.sort);
			return action.sort;
		default:
			return state;
	}
};

export default reducer;