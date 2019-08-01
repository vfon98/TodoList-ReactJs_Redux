import * as types from '../constants/ActionTypes';

var initialState = {
	needUpdateTask: {}
};

var reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CHANGE_UPDATE_TASK:
			return action.task;
		default:
			return state;
	}
}

export default reducer;