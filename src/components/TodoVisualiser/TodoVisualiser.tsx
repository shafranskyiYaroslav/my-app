import * as React from "react";
import { connect } from "react-redux";
import { addNewTask, changeInputValue, changeList, changeTaskStatus, clearAllTasks, clearTask } from "../../store/actions";
import { buttons, TodoItemStatuses } from "../../store/constants";
import { ITodoItem } from "../../store/types";
import ButtonComponent from "../Button/ButtonComponent";
import TextInput from "../TextInput/TextInput";
import CheckboxesList from "../TodoList/CheckboxesList";
import ITodoVisualiser from "./TodoVisualiserInterface";

const { IN_PROGRESS } = TodoItemStatuses;

export const TodoVisualiser: React.FC<ITodoVisualiser> = ({
  changeInputValue,
  inputValue,
  addNewTask,
  todoList,
  changeTaskStatus,
  clearTask,
  clearAllTasks,
  changeList,
  actualList }) => {

  const newTaskId = todoList.length;

  const renderButtons = () =>
    buttons.map(({type, title}) => <ButtonComponent type={type} title={title} onClick={changeList} key={title}/>);

  const switchList = () => actualList === "ALL" ?
    todoList :
    todoList.filter((el: ITodoItem) => el.status === actualList);

  return (
    <div className="todo-visualiser">
      <TextInput
        inputValue={inputValue}
        onChangeValue={changeInputValue}
        onSubmitValue={(value: string) => {
          addNewTask({
            id: newTaskId,
            name: value,
            status: IN_PROGRESS,
          });
        }}/>
      <h3>Todo list</h3>
      <h5>{actualList}:</h5>
      <CheckboxesList
        list={switchList()}
        onChangeStatus={changeTaskStatus}
        clearTask={clearTask}
      />
      <div className="container">
      <div className="row justify-content-center">
        { renderButtons() }
        </div>
      </div>
      <br/>
      <button onClick={() => clearAllTasks(null)}>Clear All</button>
    </div>
  );
};

const mapStateToProps = ({ inputValue, todoList, actualList}: {
  inputValue: string,
  todoList: ITodoItem[],
  actualList: string,
  }) => ({ inputValue, todoList, actualList });

export default connect(mapStateToProps, {
  addNewTask,
  changeInputValue,
  changeList,
  changeTaskStatus,
  clearAllTasks,
  clearTask,
  })(TodoVisualiser);
