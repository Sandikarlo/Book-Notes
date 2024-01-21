import React from "react";
import Input from "./Input";
import Note from "./Note";
import { useState } from "react";

function Body(props) {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
         setNotes(prevNotes => {
            return [...prevNotes, newNote];
         });
         console.log(notes);
         
    }

    function deleteOne(id) {
         setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
         });
    }

    return (
    <div className="body-container">
    
        <h1>{props.bookTitle}</h1>

        <Input onAdd={addNote}/>
        {notes.map((note, index) => {
        return (
            <Note 
            id={index}
            content={note} 
            key={index} 
            deleteNote={deleteOne}
            />
        )
    })}
    </div>
    )
    
}

export default Body;