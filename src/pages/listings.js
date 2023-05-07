import React, { useEffect, useState } from "react";
import { items } from "./assets/items";

export default function SingleFilter() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Mumbai", "New Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilter === selectedCategory) {
      setSelectedFilter("");
    } else {
      setSelectedFilter(selectedCategory);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilter]);

  const filterItems = () => {
    if (selectedFilter) {
      let tempItems = items.filter((item) => item.location === selectedFilter);
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap -mx-2 mb-4">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`font-semibold py-2 px-4 border border-gray-400 rounded-full mx-2 my-2 shadow ${
              selectedFilter === category ? "bg-[#CB3737] text-white" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-4">
              <p className={item.status === "1"? "text-[#CB3737] font-medium text-lg mb-2" : "text-gray-500 font-medium text-lg mb-2"}>{item.status === "1"? "Live": "Solved"}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <br/>
              <p className="font-bold text-sm">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
