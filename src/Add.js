
import React from "react";
const Add =({addHandler,input,setInput})=>{
   
    const inputHandler=(e)=>{
        setInput(e.target.value);
    }
 
    const addTodo=()=>{ 
        const newUser={text:input,id:Math.random(),isDone:false};
         addHandler(newUser);
        setInput("");
    };
  
return(
    <div>
    <input value={input} type="text" placeholder="add your task here" onChange={inputHandler}/>
    <button className="Add-btn" onClick={addTodo}> + </button>
</div>)
}
export default Add;