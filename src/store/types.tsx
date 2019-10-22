export interface IStoreState {
  imageURL: string;
  inputValue: string;
  todoList: ITodoItem[];
  actualList: string;
}

export interface ITodoItem {
  id: number;
  name: string;
  status: string;
}

export interface IAction<T, P> {
  type: T;
  payload: P;
}
