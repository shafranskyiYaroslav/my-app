import * as React from "react";
import { ListGroup } from "reactstrap";
import { ITodoItem } from "../../store/types";
import TodoItem from "../TodoItem/TodoItem";
import "./CheckboxesList.css";
import IChecboxesList from "./CheckboxesListInterfase";

const ChecboxesList: React.FC<IChecboxesList> = (props) => {
  const { list, onChangeStatus, clearTask } = props;
  return (
    <div className="container">
      <ListGroup>
      {
        list.length > 0 && list.map((item: ITodoItem, index: number) =>
          <TodoItem key={index} item={item} onChangeStatus={onChangeStatus} clearTask={clearTask}/>,
        )
      }
      </ListGroup>
    </div>
  );
};

export default ChecboxesList;
