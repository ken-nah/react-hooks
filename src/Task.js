import React, { useState } from "react";
import uuid from "uuidv4";

const Task = () => {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const updateText = event => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { id: uuid(), taskText }]);
  };

  return (
    <div>
      <div className="form">
        <input type="text" onChange={updateText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map(task => {
          const { id, taskText } = task;
          return <div key={id}>{taskText}</div>;
        })}
      </div>
    </div>
  );
};

export default Task;
