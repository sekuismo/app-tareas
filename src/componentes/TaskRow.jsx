export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
    <td key={task.name} className="d-flex justify-content-between">
      {task.name}
      <input
        type="checkbox"
        checked={task.done} //si el valor es true aparecerá chequeado
        onChange={() => toggleTask(task)}
      />
    </td>
    </tr>
  );
};
