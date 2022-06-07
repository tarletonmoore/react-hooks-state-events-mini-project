// import React from "react";
// import Task from "./Task";

// function TaskList({ tasksToDisplay, onDeleteTask }) {

//   const taskList = tasksToDisplay.map((task) => (
//     <Task
//       category={task.category}
//       text={task.text}
//       key={task.text}
//       onDeleteTask={onDeleteTask} />));

//   return (

//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//       {taskList}
//     </div>
//   );
// }

// export default TaskList;

import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;