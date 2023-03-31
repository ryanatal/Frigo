import React, { useState, useEffect } from 'react';
import "./ClickableDiv.scss";

const ClickableDiv = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    console.log(selectedItems);
    }, [selectedItems]);

  return (
    <div>
      {items.map((item, index) => (
        <a
          key={index}
          className="clickable-item"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleClick(item);
          }}
          style={{
            color: selectedItems.includes(item) ? 'blue' : 'black',
          }}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default ClickableDiv;