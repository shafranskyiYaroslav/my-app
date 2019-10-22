import { ActionTypes } from "../../store/constants";
import { ITodoItem } from "../../store/types";

const {
  ADD_NEW_TASK,
  CHANGE_TASK_STATUS,
  CLEAR_TASK,
  CLEAR_ALL_TASKS,
} = ActionTypes;

export const todoListReducer = (state: ITodoItem[] = [], { payload, type }: any ): ITodoItem[] => {
  switch (type) {
    case ADD_NEW_TASK: {
      return [...state, payload];
    }
    case CHANGE_TASK_STATUS:
      return state.map((todo: ITodoItem) => todo.id === payload.id ? {...payload} : todo);
    case CLEAR_TASK:
      return state.filter((todo: ITodoItem) => todo.id !== payload.id);
    case CLEAR_ALL_TASKS:
      return [];

    default:
      return state;
  }
};
