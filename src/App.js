

import './App.css';
import Add from './Add';
import TodoList from "./TodoList";
import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() { 
const [input,setInput] = useState("");



 // const addHandler=(newTodo)=>{
   // input&&  setTodos(
    //  [...Todos,newTodo]
   //);
 // };

  
  return (
    <div className="App">
      <h1>TodoList</h1>
      <Add input={input} setInput={setInput} />
      <TodoList/>
        
    </div>
      

  );
}

export default App;
