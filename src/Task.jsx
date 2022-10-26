import React from "react";
import PropTypes from 'prop-types';

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

Task.propTypes = {
  /**
   * Se a atividade foi ou não concluida
   */
  done: PropTypes.bool,
  /**
   * Nome da atividade
   */
  name: PropTypes.string,
  /**
   * Data para finalizar
   */
  dateToDo: PropTypes.string,
  /**
   * funcao de callback 
   */
  callBack: PropTypes.func,
}
