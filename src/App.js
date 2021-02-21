import React from 'react';
import Task from './components/tasksComponent';
import TasksInput from './components/tasksInput';

class App extends React.Component {
  constructor () {
    super();

    this.initState = {
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
    let stateCopy = { ...this.initState };
    const index = stateCopy.tasks.map((t) => t.id).indexOf(id);
    this.setState(() => {
      let { tasks } = stateCopy;
      tasks[index].status = true;
      return tasks;
    });
  };

  deleteTask = (id) => {
    let stateCopy = { ...this.initState };
    const index = stateCopy.tasks.map((t) => t.id).indexOf(id);
    this.setState(() => {
      let { tasks } = stateCopy;
      delete tasks[index];
      return tasks;
    });
  };

  addTask = (taskTitle) => {
    let stateCopy = { ...this.initState };
    this.setState(() => {
      let { task } = stateCopy;
      task.push({
        id     : task.length ? task.length : 0,
        title  : taskTitle,
        status : false,
      });
    });
  };

  render () {
    const { tasks } = this.initState;

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
