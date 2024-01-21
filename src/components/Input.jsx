import React from "react";
import { useState } from "react";

function Input(props) {

    const [note, setNote] = useState("");
    

function handleChange(event) {
    let value = event.target.value;
    setNote(value);
}

function handleClick() {
    props.onAdd(note);
    setNote("");
}

    return (
        <div className="input-container">
           <input value={note} onChange={handleChange} placeholder="Add a note"></input>
           <button onClick={handleClick} className="add-button">Add</button>   
        </div>
    )
}

export default Input;