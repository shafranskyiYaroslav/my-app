import * as React from "react";
import { Button } from "reactstrap";
import { IButton } from "./InterfaceButton";

const ButtonComponent: React.FC<IButton> = (props) => {
  const { type, title, onClick } = props;
  return (
    <div className="col-xs-4">
      <Button block color="secondary" size="sm" toggle onClick={() => {
        onClick({type});
      }}>{title}</Button>{" "}
    </div>
  );
};

export default ButtonComponent;
