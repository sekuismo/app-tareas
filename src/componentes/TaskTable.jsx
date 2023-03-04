import React from 'react'

const TaskTable = ({tasks}) => {
  return (
    <div>

<table>
          <thead>
            <tr>
              Tareas
            </tr>
          </thead>
          <tbody>
          {
        tasks.map(task=>( //la función map permite recorrer el arreglo para renderizar los elementos en el DOM
          <tr key={task.name}>
            {task.name}
            <input type="checkbox"
                checked={task.done}  //si el valor es true aparecerá chequeado
                />
          </tr>
        ))
      }

          </tbody>
        </table>

    </div>
  )
}

export default TaskTable