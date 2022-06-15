import React,{useState} from "react";

const Addtodo = (props)=>{
    const [todo ,setTodo] = useState("")
    const todoChangeHandler = (event)=>{
        setTodo( event.target.value)
    }
    const submitFormHandler = (event)=>{
        event.preventDefault()

        const tododata ={
            id:Math.random().toString(),
            title:todo
        }
        // console.log(tododata)
        props.onSaveTodo(tododata)
        setTodo("")
    }
    return(
        <form  onSubmit={submitFormHandler}>
          <div className="inputField">  <input type="text" name="" id="" value={todo} onChange={todoChangeHandler}/>
              <button type="submit">Add</button></div>
        </form>
    )
}
export default Addtodo