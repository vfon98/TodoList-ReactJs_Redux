import React, { Component } from 'react';
import AddTaskForm from './components/AddTaskForm';
import SearchAndSort from './components/SearchAndSort';
import TaskTable from './components/TaskTable';
import './App.css';
import { connect } from 'react-redux';
import { toggleForm } from './actions';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-header text-center">To Do List</h1>
        <div className="row">
          <div className="col-md-4">
            <AddTaskForm />
          </div>
          <div className="col-md-8">
            <button type="button" className="btn btn-primary"
                onClick={() => this.props.dispatch(toggleForm("add")) } >Add Task &nbsp;<i className="fas fa-plus-circle"></i></button>
            <SearchAndSort />
            <TaskTable />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
