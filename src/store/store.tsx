import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";
import { IStoreState } from "./types";

export const store = createStore<IStoreState, any, any, any>(reducer, composeWithDevTools(
  applyMiddleware(),
));
