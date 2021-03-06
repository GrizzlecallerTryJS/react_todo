import React from 'react';

class TasksInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      input : '',
    };
  }

  taskTitle = () => {
    let stateCopy = { ...this.state };
    const { input } = stateCopy;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: '' });
    }
  };

  newTaskElement = React.createRef();

  inputChange = () => {
    let text = this.newTaskElement.current.value;
    this.setState({ input: text });
  };

  handleEnter = (event) => {
    if (event.key === 'Enter') {
      this.taskTitle();
    }
  };

  render () {
    const { input } = this.state;

    return (
      <div className='task-input'>
        <input onKeyPress={this.handleEnter} ref={this.newTaskElement} onChange={this.inputChange} value={input} />
        <button onClick={this.taskTitle}>Add</button>
      </div>
    );
  }
}

export default TasksInput;
