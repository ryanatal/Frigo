import "./Pantry.scss";

import React from "react";
import { useSelector } from "react-redux";

const Pantry = () => {

    const pantry = useSelector((state) => state.pantry);

  return <div className="pantry-container">
    <h1>Pantry</h1>
    <ol>
        {pantry.map((item) => (
            <li>{item.ingredient}</li>
        ))}
    </ol>
  </div>;
};

export default Pantry;
