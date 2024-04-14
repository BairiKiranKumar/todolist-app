import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import Task from './Task';

function App() {
  return (
    <div className="container">
      <h1 className='nav-bar'>To-Do List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
