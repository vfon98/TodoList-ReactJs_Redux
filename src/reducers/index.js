import { combineReducers } from 'redux';
import tasks from './tasks';
import formMethod from './formMethod';
import updateTask from './updateTask';
import filter from './filter';
import sort from './sort';

var rootReducer = combineReducers({
	tasks,
	formMethod,
	updateTask,
	filter,
	sort
});

export default rootReducer;