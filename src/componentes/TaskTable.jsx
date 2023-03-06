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
      <table>
        <thead>
          <tr>Tareas</tr>
        </thead>
        <tbody>{taskTableRows(showCompleted)}</tbody>
      </table>
    </div>
  );
};

export default TaskTable;
