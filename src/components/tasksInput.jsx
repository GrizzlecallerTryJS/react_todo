import React from 'react';

class TasksInput extends React.Component {
  constructor (props) {
    super(props);

    this.initState = {
      input : '',
    };
  }

  taskTitle = () => {
    const { input } = this.initState;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: '' });
    }
  };

  inputChange = (event) => {
    let stateCopy = { ...this.initState };
    this.setState({ input: event.target.value });
    debugger;
  };

  render () {
    const { input } = this.initState;

    return (
      <div className='task-input'>
        <input onChange={this.inputChange} value={input} />
        <button>Add</button>
      </div>
    );
  }
}

export default TasksInput;
