import { ITodoItem } from "../../store/types";

export interface IItem {
  item: ITodoItem;
  onChangeStatus: (arg: object) => void;
  clearTask: (arg: object) => void;
}
