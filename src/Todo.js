import React from "react";
import { useDispatch } from "react-redux";
import { deleteHandler,doneHandler } from "./redux/action";
const Todo =({el})=>{
 const dispatch = useDispatch()
const deleteTodo=()=>{
dispatch(deleteHandler(el.id));
};
const doneTodo=()=>{
    dispatch(doneHandler(el.id));
    };
    return(
<div className="todoContainer">
      <h3
        className={el.isDone ? "done" : "undone"}
        style={el.isDone ? { backgroundColor: "blue" } : {}}>
        {el.text}
      </h3>
      <div>
        <button onClick={deleteTodo} > delete </button>
        <button onClick={doneTodo}> {el.isDone ? "unDone" : "Done"} </button>
      </div>
    </div>
  );
        
        }
        export default Todo;