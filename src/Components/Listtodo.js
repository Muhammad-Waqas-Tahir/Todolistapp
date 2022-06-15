import {RiCloseCircleFill} from "react-icons/ri"
import {BsFillCheckCircleFill} from "react-icons/bs"
import {useState} from "react";

const Listtodo = (props)=>{
    const [click,setClick] = useState(false)



    const  handleClick=()=>{

            setClick(true)


        // console.log(i)

    }

    return(
        <div>

            {
                props.data.map((todo)=>{
                    return(



                        <div key={todo.id}   className=" todoList" >
                            <h4   className={click ? "linethrough" :""}>{todo.title}</h4>
                            <div className="todoList__icon">
                                <RiCloseCircleFill className="todoList__crossicon" onClick={()=>{props.onDeleteTodo(todo.id)}}/>
                                <BsFillCheckCircleFill className="todoList__completeicon" onClick={handleClick} />
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Listtodo