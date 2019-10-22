import * as React from "react";
import { ENTER_KEY_CODE } from "../../store/constants";
import ITextInput from "./TextInputInterface";

const TextInput: React.FC<ITextInput> = (props) => {
  const { inputValue, onChangeValue, onSubmitValue } = props;
  return (
    <input
      className="input"
      type="text"
      value={inputValue}
      placeholder="Type new task"
      onChange={(event) => onChangeValue(event.target.value)}
      onKeyUp={(event) => {
        const trimmedValue = inputValue.trim();
        if (event.keyCode === ENTER_KEY_CODE && trimmedValue.length > 0) {
          onSubmitValue(trimmedValue);
          onChangeValue("");
        }}}
      />
    );
};

export default TextInput;
