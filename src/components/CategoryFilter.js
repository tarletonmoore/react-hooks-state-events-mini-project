// import React from "react";

// function CategoryFilter({ categories, selectedcategory, setCategory }) {



//   const categoriesToDisplay = categories.map((category) => {
//     const className = selectedcategory === category ? "selected" : null

//     return (
//       <button
//         className={className}
//         key={category}
//         onClick={() => setCategory(category)}>
//         {category}
//       </button>
//     )
//   })


//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//       {categoriesToDisplay}
//     </div>
//   );
// }

// export default CategoryFilter;

import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;