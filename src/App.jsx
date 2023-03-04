import { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import TaskCreator from './componentes/TaskCreator';
import TaskTable from './componentes/TaskTable';
function App() {

const [tasksItems,setTasksItems] = useState([])

useEffect(()=>{
  let data = localStorage.getItem('tasks')
  if (data){
    setTasksItems(JSON.parse(data))
   }
},[])

function createNewTask(taskName){
  if(!tasksItems.find(task => task.name === taskName)){   // comprueba que no exista el nombre de la tarea  para añadir la nueva tarea al arreglo
    setTasksItems([...tasksItems,{name:taskName,done:false}])
    //En vez que mutar el arreglo a través de un método push se hace una copia del arreglo con "..."
  }
  else{ 
    alert(`ya existe ${taskName}` )
  }
  
 
}

useEffect(()=>{
 localStorage.setItem('tasks',JSON.stringify(tasksItems))
  
},[ tasksItems])

  return (
    <div className="App">
      <h1>app tareas</h1>

      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks ={tasksItems} />
      
    </div>
  )
}

export default App
