import React from "react";
import Todo from "./Todo";
const Todolist =({todoList,deleteHandler,doneHandler})=>{
   
return(
<div className="todoListContainer">
      {todoList.map((el) => (
        <Todo  el={el} deleteHandler={deleteHandler}  doneHandler={doneHandler} />
      ))}
    </div>
  )
}
export default Todolist;