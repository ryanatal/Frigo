import React from 'react';
import "./ClickableDiv.scss";

export const ClickableDiv2 = ({ items, selectedItems, setSelectedItems }) => {

  const handleClick = (item) => {
    // Use the find method to check if an object with the same diet already exists in selectedItems
    const itemExists = selectedItems.find((i) => i.diet === item.diet);
  
    if (itemExists) {
      // If the object already exists, remove it from selectedItems
      setSelectedItems(selectedItems.filter((i) => i.diet !== item.diet));
    } else {
      // If the object doesn't exist, add it to selectedItems
      setSelectedItems([...selectedItems, item]);
    }
  };
  
  return (
    <div className='items-wrapper'>
      {items && items.map((item, index) => (
        <button
          key={index}
          className={`clickable-item ${selectedItems.some((i) => i.diet === item.diet) ? 'selected' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(item);
          }}
        >
          {item.diet}
        </button>
      ))}
    </div>
  );
};

export default ClickableDiv2;