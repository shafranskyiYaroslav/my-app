import { ITodoItem } from "../../store/types";

export interface IButton {
  type: string;
  title: string;
  onClick: (arg: object) => void;
}
