import React from "react";
const Task = (props) => {
  return (
    <div className="task">
      <div>
        <input
          type="checkbox"
          checked={props.done}
          onChange={(e) => {
            props.callBack();
          }}
        ></input>
      </div>
      <div className="taskName">
        <div className="name">{props.name}</div>
        <div>{props.dateToDo}</div>
      </div>
    </div>
  );
};
export default Task;
