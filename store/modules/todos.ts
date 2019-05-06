import { State } from './todoTypes';
import { RootState } from 'store';

export const name = 'todos';
export const namespaced = true;

export const state = (): State => ({
  todos: []
});
