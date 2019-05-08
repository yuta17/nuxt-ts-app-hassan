import { State } from './todoTypes';
import { RootState } from 'store';
import { GetterTree, ActionTree, ActionContext, MutationTree } from 'vuex';
import { Todo, TodoClass } from './todoTypes';

export const name = 'todos';
export const namespaced = true;

export const state = (): State => ({
  todos: []
});

export const getters: GetterTree<State, RootState> = {
  allTodos: state => {
    return state.todos;
  }
}

export const types = {
  ADDTODO: 'ADDTODO',
  REMOVETODO: 'REMOVETODO',
  EDITTODO: 'EDITTODO',
  UPDATETODO: 'UPDATETODO'
}

export interface Actions<S, R> extends ActionTree<S, R> {
  addTodo (context: ActionContext<S, R>, document): void
  removeTodo (context: ActionContext<S, R>, id: number): void
  editTodo (context: ActionContext<S, R>, id: number): void
  updateTodo (context: ActionContext<S, R>, document): void
}

export const actions: Actions<State, RootState> = {
  addTodo ({ commit }, document) {
    const target: HTMLInputElement = <HTMLInputElement>document.target;
    commit(types.ADDTODO, target.value)
    target.value = '';
  },

  removeTodo ({ commit }, id: number) {
    commit(types.REMOVETODO, id)
  },

  editTodo ({ commit }, id: number) {
    commit(types.EDITTODO, id)
  },

  updateTodo ({ commit }, document) {
    const target: HTMLInputElement = <HTMLInputElement>document.target;
    const todo: TodoClass = new TodoClass(Number(target.id), target.value, false)
    commit(types.UPDATETODO, todo);
    target.value = '';
  }
}

export const mutations: MutationTree<State> = {
  [types.ADDTODO] (state, content: string) {
    let id = 0;
    if (state.todos.length > 0) {
      id = state.todos[state.todos.length - 1].id + 1;
    }
    state.todos.push(new TodoClass(id, content, false));
  },

  [types.REMOVETODO] (state, id: number) {
    const todoIndex = state.todos.findIndex(todo => todo.id == id);
    state.todos.splice(todoIndex, 1);
  },

  [types.EDITTODO] (state, id: number) {
    const todoIndex = state.todos.findIndex(todo => todo.id == id);
    state.todos[todoIndex].isEditing = true;
  },

  [types.UPDATETODO] (state, todo: Todo) {
    const todoIndex = state.todos.findIndex(el => el.id == todo.id);
    state.todos.splice(todoIndex, 1);
    state.todos.splice(todoIndex, 0, todo);
  }
}
