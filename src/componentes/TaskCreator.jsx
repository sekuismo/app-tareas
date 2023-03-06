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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingresa una nueva tarea"
          onChange={(e) => setTarea(e.target.value)}
          value={tarea}
        />
        <button>Guardar tarea </button>
      </form>
    </div>
  );
}

export default TaskCreator;
