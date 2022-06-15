
import './App.css';
import Addtodo from "./Components/Addtodo";
import {useState} from "react";
import Listtodo from "./Components/Listtodo";

function App() {
  const [data , setData] = useState([
    {
      id:Math.random().toString(),
      title:"Todo List app "

    }
  ])

  const deleteTodoHandler = (id)=>{
    const deletetodo = data.filter((todo)=>todo.id !==id)
    setData(deletetodo)
  }
  const saveTodoHandler = (tododata)=>{
    setData((preTodolist)=>{
      return [ tododata,...preTodolist]
    })
  }

  return (
    <div className="wrapper">
    <h4>Todo App</h4>
      <Addtodo onSaveTodo = {saveTodoHandler} />
        <Listtodo data={data}  onDeleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;
