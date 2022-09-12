import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const  handleTaskCheck = (index) => {
    tasks[index].done = !tasks[index].done
    setTasks((tasks) => [...tasks]);
  }
  return (
    <div>
      <h1>To Do List</h1>
      <AddTask
        callBack={(task) => {
          setTasks((tasks) => [...tasks, task]);
        }}
      />
      {tasks.map((task, index) => (
        <Task
          key={index}
          name={task.name}
          done={task.done}
          dateToDo={task.dateToDo}
          callBack={() => handleTaskCheck(index)}
        />
      ))}
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
