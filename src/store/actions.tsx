import { ActionTypes } from "./constants";
import { IAction } from "./types";

const {
  ADD_IMAGE,
  CHANGE_INPUT_VALUE,
  ADD_NEW_TASK,
  CHANGE_TASK_STATUS,
  CLEAR_TASK,
  CLEAR_ALL_TASKS,
  CHANGE_ACTUAL_LIST,
} = ActionTypes;

export function actionFactory<T, P>(type: T): (payload: P) => IAction<T, P> {
  return (payload: P) => ({
    payload,
    type,
  });
}

export const addNewTask = actionFactory<string, object>(ADD_NEW_TASK);
export const changeTaskStatus = actionFactory<string, object>(CHANGE_TASK_STATUS);
export const clearTask = actionFactory<string, object>(CLEAR_TASK);
export const changeList = actionFactory<string, object>(CHANGE_ACTUAL_LIST);
export const showImages = actionFactory<string, string>(ADD_IMAGE);
export const changeInputValue = actionFactory<string, string>(CHANGE_INPUT_VALUE);
export const clearAllTasks = actionFactory<string, null>(CLEAR_ALL_TASKS);
