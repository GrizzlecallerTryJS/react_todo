import React from 'react';
import Task from './components/tasksComponent';

class App extends React.Component {
  constructor () {
    super();

    let initState = {
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

  changeTaskStatus = () => {
    let stateCopy = { ...this.initState };
    let status = stateCopy.tasks.status;

    status ? (status = false) : (status = true);

    return stateCopy;
  };

  render () {
    let { tasks } = this.state;

    let activeTasks = tasks.filter((task) => !task.status);
    let doneTasks = tasks.filter((task) => task.status);

    return (
      <div className='App'>
        <h1 className='top'>Active Tasks: {activeTasks.length}</h1>
        {[
          ...activeTasks,
          ...doneTasks,
        ].map((t) => <Task task={t} key={t.id} />)}
      </div>
    );
  }
}

export default App;
