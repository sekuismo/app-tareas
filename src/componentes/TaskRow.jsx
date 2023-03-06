export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr key={task.name}>
      {task.name}
      <input
        type="checkbox"
        checked={task.done} //si el valor es true aparecerá chequeado
        onChange={() => toggleTask(task)}
      />
    </tr>
  );
};
