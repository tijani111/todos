
import React from "react";
import { addHandler, filterdoneHandler, filterundoneHandler } from "./redux/action";
import { useDispatch } from "react-redux";
 
const Add =({input,setInput})=>{
    const dispatch = useDispatch()
    const inputHandler=(e)=>{
        setInput(e.target.value);
    }
 const filterTodo=()=>{
     dispatch(filterdoneHandler());
 }
 const filterunTodo=()=>{
    dispatch(filterundoneHandler());
}
    const addTodo=()=>{ 
        const newUser={text:input,id:Math.random(),isDone:false};
         dispatch(addHandler(newUser));
        setInput("");
    };
  
return(
    <div>
    <input value={input} type="text" placeholder="add your task here" onChange={inputHandler}/>
    <button className="Add-btn" onClick={addTodo}> + </button>
    <button className="Filter-btn" onClick={filterTodo}> Done Tasks </button>
    <button className="Filter-btn" onClick={filterunTodo}> unDone Tasks </button>
   
</div>)
}
export default Add;