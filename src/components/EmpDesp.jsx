import React, { useState } from "react";

const Desp = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { text: `New item ${items.length + 1}`, counter: 0 }]);
  };

  const addToCounter = (value, index) => {
    setItems(items.map((item, i) => i === index ? { ...item, counter: item.counter + value } : item));
  };

  const handleEnterPress = (event, index) => {
    if (event.key === "Enter") {
      const value = parseInt(event.target.value, 10) || 0;
      addToCounter(value, index);
      event.target.value = "";
    }
  };

  return (
    <div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            <input type="text" defaultValue={item.text} className="form-control d-inline w-50" />
            <button className="btn btn-success mx-2" onClick={() => addToCounter(25, index)}>+25</button>
            <button className="btn btn-success mx-2" onClick={() => addToCounter(50, index)}>+50</button>
            <button className="btn btn-danger mx-2" onClick={() => addToCounter(-25, index)}>-25</button>
            <button className="btn btn-danger mx-2" onClick={() => addToCounter(-50, index)}>-50</button>
            <input type="number" className="form-control d-inline w-25" placeholder="0" onKeyDown={(e) => handleEnterPress(e, index)} />
            <span className="mx-2">Counter: {item.counter}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-2" onClick={addItem}>
        Add Item
      </button>
    </div>
  );
};

export default Desp;
