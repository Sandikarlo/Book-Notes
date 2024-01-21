import React from "react";

function Note(props) {

    function handleClick() {
        props.deleteNote(props.id);
    }

    return (
        <div className="note-container">
            <button onClick={handleClick}>x</button>
            <p>{props.content}</p>
        </div>
    )
}

export default Note;