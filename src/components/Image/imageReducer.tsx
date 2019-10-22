import { ActionTypes } from "../../store/constants";

const { ADD_IMAGE } = ActionTypes;

export const imageReducer = (state: string = "", { payload, type }: any ): string => {
  switch (type) {
    case ADD_IMAGE:
      return payload;
  }
  return state;
};
