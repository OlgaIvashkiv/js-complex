import {ADD_TODO, GET_TODO, PUSH_TODOS, REMOVE_TODO, SET_TODO} from "./types";
import Vue from 'vue'

export const actions ={
    [ADD_TODO]: async ({commit}, todoObj)=>{
        try {
           const {body: {name}} =  await Vue.http.post('https://vue-js-module-http.firebaseio.com/toDoList.json', todoObj);
            const todoItem = {...todoObj, id: name};
            commit(SET_TODO, todoItem)

        } catch (e){
            console.log(e)
        }
    },
    [GET_TODO]: async ({commit})=>{
        try {
            const todos =[];
            const {body} = await Vue.http.get('https://vue-js-module-http.firebaseio.com/toDoList.json')
            for (const item in body) {
                // console.log(body[item],'bodyitem-text')
                // console.log(item,'item-id')
                // console.log({...body[item], id: item})
                todos.push({...body[item], id: item})
            }

            commit(PUSH_TODOS, todos)
        } catch(e){
            console.log(e)
        }
    },
    [REMOVE_TODO]: async ({commit}, id)=>{
        try {
            await Vue.http.delete(`https://vue-js-module-http.firebaseio.com/toDoList/${id}.json`);
           commit(REMOVE_TODO, id)
        } catch (e){
            console.log(e)
        }
    }
}