import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TaskCreator from "./componentes/TaskCreator";
import TaskTable from "./componentes/TaskTable";
import VisibilityControl from "./componentes/VisibilityControl";
function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () =>{
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }
 
  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      // comprueba que no exista el nombre de la tarea  para añadir la nueva tarea al arreglo
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
      //En vez que mutar el arreglo a través de un método push se hace una copia del arreglo con "..."
    } else {
      alert(`ya existe ${taskName}`);
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="App">
      <h1>app tareas</h1>

      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
      <VisibilityControl
      isChecked ={showCompleted}
      setShowCompleted={(checked) => setShowCompleted(checked)}
      cleanTasks ={cleanTasks}
      />

      

      {showCompleted == true && (
        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={true}
        />
      )}
    </div>
  );
}

export default App;
