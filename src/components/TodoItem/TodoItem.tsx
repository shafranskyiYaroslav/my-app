import * as React from "react";
import { ListGroupItem } from "reactstrap";
import { TodoItemStatuses } from "../../store/constants";
import { IItem } from "./ItemInterface";

const { COMPLETED, IN_PROGRESS } = TodoItemStatuses;

const TodoItem: React.FC<IItem> = (props) => {
  const { item, onChangeStatus, clearTask } = props;
  const { id, name, status } = item;
  const isDone = status === COMPLETED;
  return (
    <ListGroupItem className="justify-content-between py-0" color={isDone ? "success" : "warning"} >
      <label className="todoItem">
        <input type="checkbox"
          checked={isDone}
          onChange={ () => onChangeStatus({
            id,
            name,
            status: isDone ? IN_PROGRESS : COMPLETED,
          })}
      />
        {name}
        <button onClick={ () => clearTask({ id }) }>X</button>
        <br />
      </label>
    </ListGroupItem>
  );
};

export default TodoItem;
