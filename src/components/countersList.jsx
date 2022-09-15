import React, { useState } from "react";
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
        {id:0, value: 0, name: "Ненужная вещь", price: "200"},
        {id:1, value: 4, name: "Ложка"},
        {id:2, value: 0, name: "Вилка"},
        {id:3, value: 0, name: "Тарелка"},
        {id:4, value: 0, name: "Набор минималиста"},
    ];
    
    const [counters, setCounters] = useState (initialState);
    const handleDelete = (id) => {
    const newCounters = counters.filter(c => c.id!==id);
    setCounters(newCounters);
    };
    const handleDecrement = (id) => {
        const newDecrement = counters.map((c ) => c.id === id ? {...c, value: c.value -= 1} : c);
        setCounters(newDecrement);
    };
    const handleIncrement = (id) => {
        const newDecrement = counters.map((c ) => c.id === id ? {...c, value: c.value += 1} : c);
        setCounters(newDecrement);
    };

    const handleReset = () => {
        setCounters(initialState);
        console.log("handle Reset")
    };

return (
    <>
    {counters.map((count) => (
         <Counter 
         key = {count.id} 
         id = {count.id}
         {...count}
         onDelete={handleDelete}
         onDecrement={handleDecrement}
         onIncrement={handleIncrement}
         />
        ))}
        <button className="btn btn-primary btn-sm m-2" 
        onClick={handleReset}
        >
            Сброс
        </button>
      
        </>
    );
};
export default CountersList;