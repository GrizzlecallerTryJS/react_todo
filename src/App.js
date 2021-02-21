import React from 'react';
import Task from './components/tasksComponent';
import TasksInput from './components/tasksInput';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      tasks : [
        {
          id     : 0,
          title  : 'test tasks 0',
          status : false,
        },
        {
          id     : 1,
          title  : 'test tasks 1',
          status : true,
        },
        {
          id     : 2,
          title  : 'test tasks 2',
          status : false,
        },
      ],
    };
  }

  doneTask = (id) => {
    let stateCopy = { ...this.state };
    const index = stateCopy.tasks.map((t) => t.id).indexOf(id);
    this.setState(() => {
      let { tasks } = stateCopy;
      tasks[index].status = true;
      return tasks;
    });
  };

  deleteTask = (id) => {
    let stateCopy = { ...this.state };
    const index = stateCopy.tasks.map((t) => t.id).indexOf(id);
    this.setState(() => {
      let { tasks } = stateCopy;
      delete tasks[index];
      return tasks;
    });
  };

  addTask = (taskTitle) => {
    debugger;
    this.setState(() => {
      let { tasks } = this.state;
      debugger;
      tasks.push({
        id     : tasks.length ? tasks.length : 0,
        title  : taskTitle,
        status : false,
      });
      debugger;
    });
  };

  render () {
    const { tasks } = this.state;

    let activeTasks = tasks.filter((task) => !task.status);
    let doneTasks = tasks.filter((task) => task.status);

    return (
      <div className='App'>
        <h1 className='top'>Active Tasks: {activeTasks.length}</h1>
        {[
          ...activeTasks,
          ...doneTasks,
        ].map((t) => (
          <Task doneTask={() => this.doneTask(t.id)} deleteTask={() => this.deleteTask(t.id)} task={t} key={t.id} />
        ))}
        <TasksInput addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
