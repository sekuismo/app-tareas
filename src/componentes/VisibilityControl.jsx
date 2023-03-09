import React from "react";

function VisibilityControl({ isChecked, setShowCompleted, cleanTasks }) {
  const handleDelete = () => {
    if (window.confirm("¿Confirmas la eliminación de todas las tareas ya realizadas  ?")) {
      cleanTasks();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Mostrar tareas realizadas</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger">
        Eliminar
      </button>
    </div>
  );
}

export default VisibilityControl;
