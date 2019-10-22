import { ITodoItem } from "../../store/types";

export default interface IChecboxesList {
  list: ITodoItem[];
  onChangeStatus: (arg: object) => void;
  clearTask: (arg: object) => void;
}
