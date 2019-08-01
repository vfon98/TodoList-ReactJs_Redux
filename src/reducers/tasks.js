import * as types from '../constants/ActionTypes';

var initialState = [
        {id: 0, name: "Programming", status: true},
        {id: 1, name: "Playing game", status: false}
      ];
if (localStorage.getItem('taskList') !== null && localStorage.getItem('taskList') !== '[]') {
	initialState = JSON.parse(localStorage.getItem('taskList'));
}

var reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_TASK:
			return [
				...state,
				{
					id: state[state.length - 1].id + 1,
					name: action.task.name,
					status: action.task.status
				}
			];

		case types.UPDATE_TASK:
			return state.map(task => task.id === action.task.id ? {id: task.id, ...action.newTask} : task);

		case types.DELETE_TASK:
			return state.filter(task => task !== action.task);

		case types.CHANGE_STATUS:
			return state.map(task => task === action.task ? {...task, status: !task.status} : task);
		default:
			return state;
	}
}

export default reducer;