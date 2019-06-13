import React, { useState } from "react";
import uuid from "uuidv4";

function Task() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const updateText = event => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { id: uuid(), taskText }]);
  };

  const completeTask = completedTask => () => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter(task => task.id !== completedTask.id));
  };

  const deleteTask = task => () => {
    setCompletedTasks(completedTasks.filter(t => t.id !== task.id));
  };

  console.log("tasks", tasks);
  console.log("completedTasks", completedTasks);

  return (
    <div>
      <div className="form">
        <input type="text" onChange={updateText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map(task => {
          const { id, taskText } = task;
          return (
            <div key={id} onClick={completeTask(task)}>
              {taskText}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {completedTasks.map(task => {
          const { id, taskText } = task;
          return (
            <div key={id}>
              {taskText}{" "}
              <span className="delete-task" onClick={deleteTask(task)}>
                {" "}
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Task;
