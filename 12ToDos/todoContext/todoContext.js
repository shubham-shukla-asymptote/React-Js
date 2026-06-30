import React,{ createContext } from "react";
import { useContext } from "react";
export const toDoContext=createContext({
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
export const ToDoContextProvider=toDoContext.Provider
export default function useToDoProvider(){
    return useContext(toDoContext)
}