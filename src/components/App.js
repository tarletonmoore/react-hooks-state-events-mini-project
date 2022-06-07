// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   const [tasks, setTasks] = useState(TASKS)
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   function addNewTask(newTask) {
//     setTasks([...tasks, newTask])
//   }

//   function removeTask(taskToRemove) {
//     const newTaskList = tasks.filter((task) => task.text !== taskToRemove)
//     setTasks(newTaskList)
//   }

//   const tasksToDisplay = tasks.filter((task) => {
//     // if (selectedCategory === "All") return true;
//     // return task.category === selectedCategory
//     selectedCategory === "All" || task.category === selectedCategory
//   })

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={CATEGORIES} selectedcategory={selectedCategory} setCategory={setSelectedCategory} />
//       <NewTaskForm onTaskFormSubmit={addNewTask} categories={CATEGORIES.filter((cat) => cat !== "All")} />
//       <TaskList tasks={tasks} onDeleteTask={removeTask} tasksToDisplay={tasksToDisplay} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm
          categories={CATEGORIES.filter((cat) => cat !== "All")}
          onTaskFormSubmit={handleAddTask}
        />
        <TaskList onDeleteTask={handleDeleteTask} tasks={visibleTasks} />
      </div>
    </div>
  );
}

export default App;