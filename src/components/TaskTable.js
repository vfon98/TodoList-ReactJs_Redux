import React from 'react';
import OneTask from './OneTask';
import { connect } from 'react-redux';
import { filterTask } from '../actions';

class TaskTable extends React.Component {
	handleChange = () => {
		var filter = {};
		filter.name = this.refs.txtTaskName.value;
		filter.status = this.refs.selTaskStatus.value;
		this.props.dispatch(filterTask(filter));
	}

	render() {
		var { tasksList, filter, sort } = this.props;
		// ===== FILTERING =====
		tasksList = tasksList.filter(task => {
			let isMatchName = task.name.toLowerCase().indexOf(filter.name.toLowerCase()) >= 0;
			if (filter.status !== "all") {
				return task.status === (filter.status === "active")
					&& isMatchName;
			}
			else {
				return isMatchName;
			}
		});
		// ====== SORTING =====
		if (sort.name !== "") {
			// Sort by Name
			if (sort.by === "name") {
			    tasksList = tasksList.sort((a, b) => {
			        if (a.name.toLowerCase() > b.name.toLowerCase()) return sort.order;
			        else return -sort.order;
			    });
			}
			// Sort by Status
			else {
			    tasksList = tasksList.sort((a, b) => {
			        if (a.status > b.status) return -sort.order;
			        else return sort.order;
			    });
			}
		}
		return (
			<div className="row mt-15">
				<div className="col-md-12">
					<table className="table table-striped table-hover table-bordered">
						<thead>
							<tr>
								<th>No</th>
								<th>Task Name</th>
								<th>Status</th>
								<th>Option</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td>
									<input 
										ref="txtTaskName"
										type="text" className="form-control"
										placeholder="Task name search ..."
										onChange={this.handleChange}
									/>
								</td>
								<td>
									<select 
										ref="selTaskStatus"
										className="form-control"
										onChange={this.handleChange}
									>
										<option value="all">All</option>
										<option value="active">Active</option>
										<option value="disabled">Disabled</option>
									</select>
								</td>
								<td></td>
							</tr>
						{
							tasksList.map((task, index) => {
								return (
									<OneTask 
										key={index} task={task} index={index}
									/>
								);
							})
						}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tasksList: state.tasks,
		filter: state.filter,
		sort: state.sort
	}
}

export default connect(mapStateToProps)(TaskTable);