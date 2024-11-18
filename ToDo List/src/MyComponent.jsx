import React, { useState } from "react";

function MyComponent() {
  const [task, setTask] = useState(["Take a shower", "Eat Breakfast"]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const deleteTask = task.filter((_, i) => i !== index);
    setTask(deleteTask);
  }

  function TaskUp(index) {
    if (index > 0) {
      const upTask = [...task];
      [upTask[index], upTask[index - 1]] = [upTask[index - 1], upTask[index]];
      setTask(upTask);
    }
  }

  function TaskDown(index) {
    if (index < task.length - 1) {
      const upTask = [...task];
      [upTask[index], upTask[index + 1]] = [upTask[index + 1], upTask[index]];
      setTask(upTask);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={handleInput}
        />
        <button className="addBtn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="up-btn" onClick={() => TaskUp(index)}>
              Up
            </button>
            <button className="down-btn" onClick={() => TaskDown(index)}>
              Down
            </button>
          </li>
        ))}{" "}
      </ol>
    </div>
  );
}

export default MyComponent;
