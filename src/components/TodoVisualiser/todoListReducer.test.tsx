import deepFreeze from "deep-freeze";
import { ActionTypes, TodoItemStatuses } from "../../store/constants";
import { ITodoItem } from "../../store/types";
import { todoListReducer } from "./todoListReducer";

const { ADD_NEW_TASK, CHANGE_TASK_STATUS, CLEAR_TASK, CLEAR_ALL_TASKS } = ActionTypes;
const { COMPLETED, IN_PROGRESS } = TodoItemStatuses;

describe("todoListReducer", () => {
    it("ADD_NEW_TASK adds new task", () => {
      const state: ITodoItem[] = [];
      const action = {
        payload: {
            id: 0,
            name: "123",
            status: IN_PROGRESS,
        },
        type: ADD_NEW_TASK,
      };
      deepFreeze(state);
      deepFreeze(action);
      expect(todoListReducer(state, action))
        .toEqual([{
            id: 0,
            name: "123",
            status: IN_PROGRESS,
        }]);
    });

    it("CHANGE_TASK_STATUS works", () => {
      const state: ITodoItem[] = [{
        id: 0,
        name: "123",
        status: COMPLETED,
      }];
      const action = {
        payload: {
          id: 0,
          name: "123",
          status: IN_PROGRESS,
        },
        type: CHANGE_TASK_STATUS,
      };
      deepFreeze(state);
      deepFreeze(action);
      expect(todoListReducer(state, action))
        .toEqual([{
            id: 0,
            name: "123",
            status: IN_PROGRESS,
        }]);
    });

    it("CLEAR_TASK works", () => {
      const state: ITodoItem[] = [
        { id: 0,
        name: "123",
        status: COMPLETED },
        { id: 1,
          name: "12345",
          status: COMPLETED },
      ];
      const action = {
        payload: {
          id: 0,
          name: "123",
          status: IN_PROGRESS,
        },
        type: CLEAR_TASK,
      };
      deepFreeze(state);
      deepFreeze(action);
      expect(todoListReducer(state, action))
        .toEqual([
          { id: 1,
          name: "12345",
          status: COMPLETED },
        ]);
    });

    it("CLEAR_ALL_TASKS works", () => {
      const state: ITodoItem[] = [
        { id: 0,
        name: "123",
        status: COMPLETED },
        { id: 1,
          name: "12345",
          status: COMPLETED },
      ];
      const action = {
        payload: {
          id: 0,
          name: "123",
          status: IN_PROGRESS,
        },
        type: CLEAR_ALL_TASKS,
      };
      deepFreeze(state);
      deepFreeze(action);
      expect(todoListReducer(state, action))
        .toEqual([]);
    });
});
