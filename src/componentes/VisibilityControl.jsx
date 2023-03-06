import React from "react";

function VisibilityControl({isChecked,setShowCompleted,cleanTasks}) {
    const handleDelete =()=>{
        if(window.confirm('Confirmas eliminar la tarea?')){
            cleanTasks()
        }
    }
  return (
    
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Mostrar tareas hechas</label>
        <button onClick={handleDelete }>
            limpiar
        </button>
      </div>
    
  );
}

export default VisibilityControl;
