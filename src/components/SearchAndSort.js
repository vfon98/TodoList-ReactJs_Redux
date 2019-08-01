import React from 'react';
import { connect } from 'react-redux';
import { searchTask, sortTask } from '../actions';

class SearchAndSort extends React.Component {

	handleSearch = (e) => {
		e.preventDefault();
		var keyword = this.refs.txtKeyWord.value;
		this.props.dispatch(searchTask(keyword));
	}

	handleClick = (sortBy, order) => {
		let sort = {by: sortBy, order: order};
		this.props.dispatch(sortTask(sort));
	}

	render() {
		return (
			<div className="row mt-15">
				<div className="col-md-6">
					<form>
					  <div className="input-group">
					    <input 
						    ref="txtKeyWord"
						    type="text" className="form-control" 
						    placeholder="Search"
						    onChange={this.handleSearch}
					    />
					    <div className="input-group-btn">
					      <button className="btn btn-primary" type="submit">
					        <i className="glyphicon glyphicon-search"></i>
					      </button>
					    </div>
					  </div>
					</form>
				</div>
				<div className="col-md-6">
					<div className="dropdown">
					  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort &nbsp;
					  <span className="fas fa-sort"></span></button>
					  <ul className="dropdown-menu">
					  	<li className="dropdown-header">By name</li>
					    <li onClick={ () => this.handleClick('name', 1) }><a href="#!"><i className="fas fa-sort-alpha-down fa-fw"></i> Ascending</a></li>
					    <li onClick={ () => this.handleClick('name', -1) }><a href="#!"><i className="fas fa-sort-alpha-up fa-fw"></i> Descending</a></li>

					    <li className="divider"></li>
					  	<li className="dropdown-header">By status</li>
					    <li onClick={ () => this.handleClick('status', 1) }><a href="#!"><i className="fas fa-check fa-fw"></i> Active</a></li>
					    <li onClick={ () => this.handleClick('status', -1) }><a href="#!"><i className="fas fa-times fa-fw"></i> Disabled</a></li>
					  </ul>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(SearchAndSort);