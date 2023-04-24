import React from 'react';
import "./ClickableDiv.scss";

export const ClickableDiv = ({ items, selectedItems, setSelectedItems }) => {

  const handleClick = (item) => {
    // Use the find method to check if an object with the same id already exists in selectedItems
    const itemExists = selectedItems.find((i) => i.id === item.id);
  
    if (itemExists) {
      // If the object already exists, remove it from selectedItems
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
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
          className={`clickable-item ${selectedItems.some((i) => i.id === item.id) ? 'selected' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(item);
          }}
        >
          {item.ingredient}
        </button>
      ))}
    </div>
  );
  
};

export default ClickableDiv;