import React from "react";

function Link(props) {

    function handleClick(event) {
        props.loadBook(props.id);
        
    }

    return (
        <div className="book-titles">
            <p onClick={handleClick}>{props.noteHeading}</p>
        </div>
    )
}

export default Link;