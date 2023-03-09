import React from "react";
import { TaskRow } from "./TaskRow";

const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map(
        (
          task //la función map permite recorrer el arreglo para renderizar los elementos en el DOM
        ) => <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      );
  };
  return (
    <div>
      <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className="table-primary">
            <th>Tareas</th>
          </tr>
          
        </thead>
        <tbody>{taskTableRows(showCompleted)}</tbody>
      </table>
    </div>
  );
};

export default TaskTable;
