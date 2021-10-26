

import './App.css';
import Add from './Add';
import TodoList from "./TodoList";
import {useState} from "react"

function App() { 
   const [input,setInput] = useState("");
  const [Todos,setTodos] = useState([{text:"Read a book",id:5,isDone:false},{text:"Play Football",id:6,isDone:false},{text:"Shopping",id:7,isDone:false}]);

  const deleteHandler= (id)=>{

    setTodos(Todos.filter((e)=>(e.id!==id)));
    
  };
  const addHandler=(newTodo)=>{
    input&&  setTodos(
      [...Todos,newTodo]
    );
  };
 
  const doneHandler =(ID)=>{
   
        setTodos(Todos.map(e=>e.id===ID?{...e,isDone :!e.isDone}:e))
       
      };
  return (
    <div className="App">
      <h1>TodoList</h1>
      <Add addHandler={addHandler} input={input} setInput={setInput} />
      <TodoList
        todoList={Todos}
        deleteHandler={deleteHandler}
        doneHandler={doneHandler}/>
    </div>
      
 
  );
}

export default App;
