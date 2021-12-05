import {FILTERDONE,DELETE,DONE,ADD, FILTERUNDONE} from"./action-types"
const initialState={
    todos:[{text:"Read a book",id:5,isDone:false},{text:"Play Football",id:6,isDone:false},{text:"Shopping",id:7,isDone:false}]

}
export const todosReducer=(state=initialState,action)=>{
    switch (action.type) {
        case DELETE:return{
            ...state,todos:state.todos.filter((e)=>(e.id!==action.payload))
        }
           case DONE:return {
               ...state,todos:state.todos.map(e=>e.id===action.payload?{...e,isDone :!e.isDone}:e)
           }
           case ADD:return {
            ...state,todos:[...state.todos,action.payload]
        }
      //  case EDIT:return{
       //     ...state,todos:state.todos
       // }//
       
        case FILTERDONE:return{
            ...state,todos:state.todos.filter((e)=>(e.isDone))
        }
        case FILTERUNDONE:return{
            ...state,todos:state.todos.filter((e)=>(!e.isDone))
        }
     
     
        default:
         return state 
    }

}