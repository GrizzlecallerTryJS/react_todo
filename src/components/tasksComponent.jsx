import React from 'react';

const Task = ({ task, ...props }) => {
  const ActionBtn = () => {
    return (
      <div className='action-btn'>
        {!task.status ? <p onClick={props.doneTask}>✔️</p> : <p onClick={props.deleteTask}>❌</p>}
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
