import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
export default function Todolist(){


const todolist =useSelector(state=>state.todos)
   
return(
<div className="todoListContainer">
    
      {todolist.map((el) => (
        <Todo  el={el}  />
         ))}

    </div>
  )
}
