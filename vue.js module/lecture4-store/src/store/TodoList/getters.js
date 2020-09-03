import {TODO_LENGTH, TODOS} from "./types";

export const getters ={
    [TODOS]: state =>{
        return state.todo
    },
    [TODO_LENGTH]: state =>{
        return state.todo.length
    }
}