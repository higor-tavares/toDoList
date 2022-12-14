import { useState } from "react";
import React from "react";
const AddTask = ({ callBack }) => {
  const [name, setName] = useState("");
  const [dateToDo, setDateToDo] = useState("");

  return (
    <div>
      <form id="newTask">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="dateToDo">Date to Do</label>
        <input
          id="dateToDo"
          type="date"
          value={dateToDo}
          onChange={(e) => setDateToDo(e.target.value)}
        ></input>
        <button
          onClick={() => {
            setName("");
            setDateToDo("");
            callBack({
              name: name,
              done: false,
              dateToDo: dateToDo,
            });
          }}
          type="button"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};
export default AddTask;
