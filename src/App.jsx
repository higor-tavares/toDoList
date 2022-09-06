import { createRoot } from "react-dom/client";
import Task from "./Task";
import tasks from '../data/tasks.json';
const App = () => {

  return (
    <div>
        <h1>To Do List</h1>
      {tasks.map((task) => (
        <Task
          key={task.id}
          name={task.name}
          done={task.done}
          dateToDo={task.dateToDo}
        />
      ))}
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
