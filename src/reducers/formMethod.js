import * as types from '../constants/ActionTypes';

var initialState = "add";

var reducer = (state = initialState, action) => {
	if (action.type === types.TOGGLE_FORM) {
		return action.method;
	}
	return state;
};

export default reducer;