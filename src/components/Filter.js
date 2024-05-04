// import React from "react";

// function Filter({ onCategoryChange }) {
//   return (
//     <div className="Filter">
//       <input type="text" name="search" placeholder="Search..." />
//       <select name="filter" onChange={onCategoryChange}>
//         <option value="All">Filter by category</option>
//         <option value="Produce">Produce</option>
//         <option value="Dairy">Dairy</option>
//         <option value="Dessert">Dessert</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;



// import React, { useState } from "react";

// function Filter({ onCategoryChange, onSearchChange }) {
//   const [searchText, setSearchText] = useState("");

//   function handleSearchChange(event) {
//     const text = event.target.value;
//     setSearchText(text);
//     onSearchChange(text); // Pass the search text to the parent component
//   }

//   return (
//     <div className="Filter">
//       <input 
//         type="text" 
//         name="search" 
//         placeholder="Search..." 
//         value={searchText} // Connect the input field to state
//         onChange={handleSearchChange} // Handle input change
//       />
//       <select name="filter" onChange={onCategoryChange}>
//         <option value="All">Filter by category</option>
//         <option value="Produce">Produce</option>
//         <option value="Dairy">Dairy</option>
//         <option value="Dessert">Dessert</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;



import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  return (
    <div className="Filter">
      <input
        value={search}
        onChange={onSearchChange}
        type="text"
        name="search"
        placeholder="Search..."
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;