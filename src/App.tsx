import React from "react";
import "./App.css";
import Image from "./components/Image/Image";
import TodoVisualiser from "./components/TodoVisualiser/TodoVisualiser";

const App: React.FC = () => {

  return (
    <div className="App container-fluid">
      <Image />
      <TodoVisualiser />
    </div>
  );
};

export default App;
