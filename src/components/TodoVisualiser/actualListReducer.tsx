import { ActionTypes } from "../../store/constants";

const { CHANGE_ACTUAL_LIST } = ActionTypes;

export const actualListReducer = (state: string = "ALL", { payload, type }: any ): string => {
  switch (type) {
    case CHANGE_ACTUAL_LIST:
      return payload.type;
  }
  return state;
};
