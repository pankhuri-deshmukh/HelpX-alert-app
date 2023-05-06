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
            className={`bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
              selectedFilter === category ? "bg-blue-500 text-white" : ""
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
              <p className="text-gray-900 font-medium text-lg mb-2">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}