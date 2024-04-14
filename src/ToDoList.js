import React, {useState} from "react";
import Task from "./Task";
import './ToDoList.css';

function ToDoList() {
const [newTaskValue, setNewTaskValue] = useState('');
const [tasks, setTasks] = useState([]);

function handleInputChange(event){
    setNewTaskValue(event.target.value);
}

function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
}


return(
    <div className="todo-list">
        <ul className="list-none">{tasks.map((task, index) => (
          <Task key={index} description={task} onRemove={() => setTasks(tasks.filter((_, i) => i !== index))} />
        ))}</ul>
        <input type="text" placeholder="Enter task here" value={newTaskValue} onChange={handleInputChange}/>
        <button onClick={() => handleAddTask(newTaskValue)}>Add Task</button>
    </div>
);
}

export default ToDoList;