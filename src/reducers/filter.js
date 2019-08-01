import * as types from '../constants/ActionTypes';

var initialState = {
	name: "",
	status: "all"
}

var reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FILTER_TASK:
			return action.filter;
		case types.SEARCH_TASK:
			return {
				...state,
				name: action.keyword
			};
		default: return state;
	}
}

export default reducer;