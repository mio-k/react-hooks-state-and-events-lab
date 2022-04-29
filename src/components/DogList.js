import React, {useState} from "react";
import DogItem from "./DogItem";

function DogList({ dogItems }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredList = dogItems.filter((dogItems)=> {
      if(selectedCategory === "All") {
        return true
      } else { return dogItems.category === selectedCategory}
    })
    function handleSelect(e){
      setSelectedCategory(e.target.value);
    }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="dogItems">
        {filteredList.map((item) => (
          <dogItem key={dogItem.id} name={dogItem.name} category={dogItem.category} />
        ))}
      </ul>
    </div>
  );
}

export default DogList;
