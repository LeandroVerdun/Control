import React, { useState } from "react";

const Peso = () => {
    const [items, setItems] = useState([]);

    const handleEnterPress = (event, index, num1, num2) => {
        if (event.key === "Enter") {
            const product = (parseInt(num1, 10) || 0) * (parseInt(num2, 10) || 0);
            setItems(items.map((item, i) => i === index ? { ...item, counter: item.counter + product } : item));
            event.target.value = "";
        }
    };

    const resetCounter = (index) => {
        setItems(items.map((item, i) => i === index ? { ...item, counter: 0 } : item));
    };

    const addItem = () => {
        setItems([...items, { text: `New item ${items.length + 1}`, counter: 0 }]);
    };

    return (
        <div>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item">
                        <input type="text" defaultValue={item.text} className="form-control d-inline w-25 mx-2" />
                        <input type="number" className="form-control d-inline w-15 mx-2" placeholder="0" id={`num1-${index}`} />
                        <input type="number" className="form-control d-inline w-15 mx-2" placeholder="0" id={`num2-${index}`} 
                            onKeyDown={(e) => handleEnterPress(e, index, document.getElementById(`num1-${index}`).value, e.target.value)} />
                        <span className="mx-2">Counter: {item.counter}</span>
                        <button className="btn btn-danger mx-2" onClick={() => resetCounter(index)}>Reset</button>
                    </li>
                ))}
            </ul>

            <div className="mt-3">
                <button className="btn btn-primary" onClick={addItem}>Add Item</button>
            </div>
        </div>
    );
};

export default Peso;
