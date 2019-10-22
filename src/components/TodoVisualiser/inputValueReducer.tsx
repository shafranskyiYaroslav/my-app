import { ActionTypes } from "../../store/constants";

const { CHANGE_INPUT_VALUE } = ActionTypes;

export const inputValueReducer = (state: string = "", { payload, type }: any ): string => {
  switch (type) {
    case CHANGE_INPUT_VALUE:
      return payload;
  }
  return state;
};
