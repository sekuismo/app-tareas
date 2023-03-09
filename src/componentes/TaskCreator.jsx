import React from "react";
import { useState } from "react";

function TaskCreator(props) {
  const [tarea, setTarea] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); //evita que se ejecute la acción por defecto de un Form.
    props.createNewTask(tarea);
    localStorage.setItem("task", tarea);
    setTarea("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
            type="text"
            placeholder="ingresa una nueva tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary btn-sm">
            guardar tarea
          </button> 
        </div>
      </form>
    </div>
  );
}

export default TaskCreator;
