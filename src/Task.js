import React, { useState, useEffect } from "react";
import uuid from "uuidv4";

const TASK_ITEM_STORAGE = "TASK_ITEM_STORAGE";

const storeTasks = taskMap => {
  localStorage.setItem(TASK_ITEM_STORAGE, JSON.stringify(taskMap));
};

const readStoredTasks = () => {
  const storedTasks = JSON.parse(localStorage.getItem(TASK_ITEM_STORAGE));
  return storedTasks ? storedTasks : { tasks: [], completedTasks: [] };
};

function Task() {
  const [taskText, setTaskText] = useState("");
  const storedTasks = readStoredTasks();
  const [tasks, setTasks] = useState(storedTasks.tasks);
  const [completedTasks, setCompletedTasks] = useState(
    storedTasks.completedTasks
  );

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });

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
        <h1>Tasks</h1>
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
