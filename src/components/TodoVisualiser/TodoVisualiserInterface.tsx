import { ITodoItem } from "../../store/types";

export default interface ITodoVisualiser {
  inputValue: string;
  changeInputValue: (arg: string) => void;
  addNewTask: (arg: object) => void;
  todoList: ITodoItem[];
  changeTaskStatus: (arg: object) => void;
  clearTask: (arg: object) => void;
  clearAllTasks: (arg: null) => void;
  changeList: (arg: object) => void;
  actualList: string;
}
