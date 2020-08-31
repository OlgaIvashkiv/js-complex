import Vue from 'vue';
import Vuex from 'vuex';
import {todolist, todoListModule} from "./TodoList/todolist";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        [todoListModule]: todolist
    }
})