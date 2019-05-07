export interface Todo {
  id: number,
  content: string
}

export interface State {
  todos: Todo[]
}

export class TodoClass implements Todo {
  id: number;
  content: string;

  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
  }
}
