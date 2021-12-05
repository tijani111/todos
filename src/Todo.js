import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import{Button} from "react-bootstrap";
import { editHandler,deleteHandler,doneHandler } from "./redux/action";
const Todo =({el})=>{
 const dispatch = useDispatch()
const deleteTodo=()=>{
dispatch(deleteHandler(el.id));
};
const [inputedit,setInputedit] = useState(el.text)
const [show,setShow] = useState(false)
const inputEdit=(e)=>{
  setInputedit(e.target.value);
  el.text=e.target.value
  };


  const toggleEdit=()=>{
    setShow(!show);

  
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
        <button onClick={toggleEdit} >{`Edit ` }</button>
        {show?<div> <input value={inputedit} type="text"  onChange={inputEdit}/>
       
            <Button variant="primary"onClick={toggleEdit}>Submit</Button ></div>:null}
       
        <button onClick={doneTodo}> {el.isDone ? "unDone" : "Done"} </button>
      </div>
    </div>
  );
        
        }
        export default Todo;