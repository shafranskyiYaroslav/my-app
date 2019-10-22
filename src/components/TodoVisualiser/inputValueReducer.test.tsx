import deepFreeze from "deep-freeze";
import { ActionTypes } from "../../store/constants";
import { inputValueReducer } from "./inputValueReducer";

const { CHANGE_INPUT_VALUE } = ActionTypes;

describe("inputValueReducer", () => {
  it("CHANGE_INPUT_VALUE sucess", () => {
    const state = "";
    const action = {
      payload: "",
      type: CHANGE_INPUT_VALUE,
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(inputValueReducer(state, action))
      .toEqual("");
  });
});
