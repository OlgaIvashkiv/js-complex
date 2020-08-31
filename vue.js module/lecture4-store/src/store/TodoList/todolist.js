import {state} from "./state";
import {actions} from "./actions";
import {getters} from "./getters";
import {mutations} from "./mutations";

const namespaced = true;

export const todoListModule = 'todolist';
export const todolist = {
    namespaced,
    state,
    actions,
    getters,
    mutations
}