import React from 'react';
import "./ClickableDiv.scss";

export const ClickableDiv = ({ items, selectedItems, setSelectedItems }) => {

  const handleClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  return (
    <div className='items-wrapper'>
      {items && items.map((item, index) => (
        <button
          key={index}
          className={`clickable-item ${selectedItems.includes(item) ? 'selected' : ''}`}
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