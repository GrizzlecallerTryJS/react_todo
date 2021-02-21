import React from 'react';

const Task = ({ task, ...props }) => {
  const ActionBtn = () => {
    return (
      <div className='action-btn'>
        {!task.status ? <p onClick={props.doneTasks}>✔️</p> : <p onClick={props.deleteTasks}>❌</p>}
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
