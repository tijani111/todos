import React from "react";
const Todo =({el,deleteHandler,doneHandler})=>{

const deleteTodo=()=>{
deleteHandler(el.id);
};
const doneTodo=()=>{
    doneHandler(el.id);
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