import * as React from "react";

// Style
import "./index.scss";
import { TodoPage } from "../pages/TodoPage/TodoPage";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 2
 */

const Task3: React.FunctionComponent = () => {
  return (
    <div id="task-3">
      <TodoPage />
    </div>
  );
};

export default Task3;
