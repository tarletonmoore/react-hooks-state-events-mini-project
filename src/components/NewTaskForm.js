// import React, { useState } from "react";
// // import { v4 as uuid } from "uuid";


// function NewTaskForm({ onTaskFormSubmit, categories }) {

//   const [detailsChange, setDetailsChange] = useState("")
//   const [categoryChange, setCategoryChange] = useState("Code")

//   // function handleDetailsChange(event) {
//   //   setDetailsChange(event.target.value)
//   // }

//   // function handleCategoryChange(event) {
//   //   setCategoryChange(event.target.value)
//   // }

//   // const newTask = {
//   //   id: uuid(), // the `uuid` library can be used to generate a unique id
//   //   name: detailsChange,
//   //   category: categoryChange,
//   // };

//   function handleSubmit(event) {
//     event.preventDefault()
//     onTaskFormSubmit({ detailsChange, categoryChange })
//     setDetailsChange("")
//     setCategoryChange("Code")
//   }



//   return (
//     <form className="new-task-form" onSubmit={handleSubmit}>
//       <label>
//         Details
//         <input type="text" name="text" value={detailsChange} onChange={(e) => setDetailsChange(e.target.value)} />
//       </label>
//       <label>
//         Category
//         <select name="category" value={categoryChange} onChange={(e) => setCategoryChange(e.target.value)}>
//           {/* render <option> elements for each category here */}
//           {categories.map((cat) => (
//             <option key={cat}>{cat}</option>
//           ))}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;

import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;