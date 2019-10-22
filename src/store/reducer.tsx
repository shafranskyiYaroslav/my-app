import { imageReducer } from "../components/Image/imageReducer";
import { actualListReducer } from "../components/TodoVisualiser/actualListReducer";
import { inputValueReducer } from "../components/TodoVisualiser/inputValueReducer";
import { todoListReducer } from "../components/TodoVisualiser/todoListReducer";
import { IStoreState } from "./types";

const initialState = {
  actualList: "ALL",
  imageURL: "",
  inputValue: "",
  todoList: [],
};

export const reducer = (state: IStoreState = initialState, action: object ): any => {
  return {
    actualList: actualListReducer(state.actualList, action),
    imageURL: imageReducer(state.imageURL, action),
    inputValue: inputValueReducer(state.inputValue, action),
    todoList: todoListReducer(state.todoList, action),
  };
};
