import * as types from '../constants/ActionTypes';

export const addTask = task => ({
	type: types.ADD_TASK,
	task
});
export const changeTask = task => ({
	type: types.CHANGE_UPDATE_TASK,
	task
});
export const updateTask = (task, newTask ) => ({
	type: types.UPDATE_TASK,
	task,
	newTask
});
export const deleteTask = task => ({
	type: types.DELETE_TASK,
	task
});
export const toggleForm = method => ({
	type: types.TOGGLE_FORM,
	method
});
export const changeStatus = task => ({
	type: types.CHANGE_STATUS,
	task
});
export const filterTask = filter => ({
	type: types.FILTER_TASK,
	filter
});
export const searchTask = keyword => ({
	type: types.SEARCH_TASK,
	keyword
});
export const sortTask = sort => ({
	type: types.SORT_TASK,
	sort
});