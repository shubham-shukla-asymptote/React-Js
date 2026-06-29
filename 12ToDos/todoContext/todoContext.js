import React,{ createContext } from "react";
import { useContext } from "react";
export const toDoContext=useContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false

        }
    ],
    addTodo:(todo)=>{},
    removeTodo:(id)=>{},
    editTodo:(id,todo)=>{},
    toggleComplete:(id)=>{},
   
})
export const toDoContextProvider=toDoContext.Provider
export default function useToDoProvider(){
    return useContext(toDoContext)
}