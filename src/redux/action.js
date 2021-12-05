import {FILTERUNDONE,FILTERDONE,DELETE,DONE,ADD} from"./action-types"
export const deleteHandler=(ID)=>{
    return {
        type:DELETE,
        payload:ID
    }
}
export const doneHandler=(ID)=>{
    return {
        type:DONE,
        payload:ID
    }
}
export const addHandler=(newTodo)=>{
    return {
        type:ADD,
        payload:newTodo
    }
}
export const filterdoneHandler=()=>{
    return {
        type:FILTERDONE  
    }
}
export const filterundoneHandler=()=>{
    return {
        type:FILTERUNDONE  
    }
}
//export const editHandler=(ID,newTodo)=>{
  //  return {
  //      type:EDIT,
  //      payloa:ID,
  //      payload:newTodo
   // }
//}//
