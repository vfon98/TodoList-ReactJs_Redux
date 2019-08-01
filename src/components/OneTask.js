import React from 'react';
import { connect } from 'react-redux';
import { toggleForm, changeTask, deleteTask, changeStatus } from '../actions';

class OneTask extends React.Component {
	handleUpdateTask = () => {
		var { task } = this.props;
		this.props.dispatch(toggleForm("update"));
		this.props.dispatch(changeTask(task));
	}

	handleDeleteTask = () => {
		var { task } = this.props;
		this.props.dispatch(deleteTask(task));
	}

	handleChangeStatus = () => {
		var { task } = this.props;
		this.props.dispatch(changeStatus(task));
	}

	render() {
		let { task } = this.props;
		return (
			<tr>
				<td>{ this.props.index + 1 }</td>
				<td>{ task.name }</td>
				<td>
					<span className={ task.status ? "label label-success" : "label label-danger" }
						onClick={this.handleChangeStatus}
					>{ task.status ? "Active" : "Disabled" }</span>
				</td>
				<td className="text-center">
					<button 
						type="button" className="btn btn-warning"
						onClick={this.handleUpdateTask}
					><i className="far fa-edit"></i> Update</button> &nbsp;

					<button 
						type="button" className="btn btn-danger"
						onClick={this.handleDeleteTask}
					><i className="far fa-trash-alt"></i> Delete</button>
				</td>
			</tr>
		);
	}
}

export default connect()(OneTask);