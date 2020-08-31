import {REMOVE_TODO, SET_TODO} from "./types";

export const mutations ={
    [SET_TODO]: (state, todoObj)=>{
        state.todo.push(todoObj);
    },
    [SET_TODO]:(state, todos)=>{
        state.todo = todos
    },
    [REMOVE_TODO]:(state, id)=>{
        state.todo = state.todo.filter(e=>e.id !== id)
    }
}