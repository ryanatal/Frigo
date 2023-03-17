import React from 'react';
import './Shopping.css';

class Shopping extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h2>Shopping List</h2>
        <ul>
          <li key="1">Ingredient 1<button className="remove-btn">Remove</button></li>
          <li key="2">Ingredient 2<button className="remove-btn">Remove</button></li>
          <li key="3">Ingredient 3<button className="remove-btn">Remove</button></li>
        </ul>
        <form>
          <input id="addbar" type="text" placeholder="Add ingredient" />
          <button id="add" type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Shopping;
