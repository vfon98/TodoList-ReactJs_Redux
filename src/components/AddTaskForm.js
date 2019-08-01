import React from 'react';
import { connect } from 'react-redux';
import { addTask, updateTask, toggleForm } from '../actions';

class AddTaskForm extends React.Component {

	handleSubmit = e => {
		e.preventDefault();
		if (this.refs.txtName.value !== "") {
			if (this.props.formMethod === "add") {
				let task = {};
				task.name = this.refs.txtName.value;
				task.status = this.refs.isActive.value === "true";
				this.props.dispatch(addTask(task));
				this.refs.txtName.value = "";
			}
			else {
				let newTask = {};
				let task = this.props.needUpdateTask;
				newTask.id = task.id;
				newTask.name = this.refs.txtName.value;
				newTask.status = this.refs.isActive.value === "true";
				this.props.dispatch(updateTask(task, newTask));
				// this.props.dispatch(changeTask(newTask));
				this.props.dispatch(toggleForm("add"));
			}
		}
		else {
			alert("Please enter the task's name !");
		}
	}

	componentDidUpdate() {
		let needUpdateTask = this.props.needUpdateTask;
		if (this.props.formMethod === "update") {
			this.refs.txtName.value = needUpdateTask.name;
			this.refs.isActive.value = needUpdateTask.status;
		}
		else {
			this.refs.txtName.value = "";
			this.refs.isActive.value = true;
		}
	}

	render() {
		let method = this.props.formMethod;
		return (
			<div className={ method === "add" ? "panel panel-success" : "panel panel-warning" }>
				<div className="panel-heading">
					<h3 className="panel-title">
						{ method === "add" ? "Add Task" : "Update Task" }
					</h3>
				</div>
				<div className="panel-body">
					<form onSubmit={ this.handleSubmit }>
						<div className="form-group">
							<label>Task Name:</label>
							<input ref="txtName" type="text" className="form-control" placeholder="Input field"/>
							<br/>
							<label>Status:</label>
							<select ref="isActive" id="input" className="form-control">
								<option value="true">Active</option>
								<option value="false">Canceled</option>
							</select>
						</div>
						<div className="text-center">
							<button type="submit" className="btn btn-warning"><i className="far fa-save"></i> Save</button> &nbsp;
							<button type="reset" className="btn btn-danger"><i className="fas fa-ban"></i> Cancel</button>
						</div>						
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	formMethod: state.formMethod,
	needUpdateTask: state.updateTask
});

export default connect(mapStateToProps)(AddTaskForm);