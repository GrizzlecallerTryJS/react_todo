import React from 'react';

const Task = ({ task, ...props }) => {
  const ActionBtn = () => {
    return (
      <div className='action-btn'>
        {!task.status ? <p onClick={this.props.doneTasks}>✔️</p> : <p onClick={this.props.deleteTasks}>❌</p>}
      </div>
    );
  };

  const qqq = 'task ' + (task.status ? 'task-done' : '');

  return (
    <div className={qqq}>
      <p>{task.title}</p>
      <ActionBtn />
    </div>
  );
};

export default Task;
