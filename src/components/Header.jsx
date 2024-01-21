import React, { useState } from "react";
// import Link from "./Link";

function Header(props) {

    const [bookTitle, setTitle] = useState("");

    function handleChange(event) {
        let title = event.target.value;
        setTitle(title);
    }

    function handleClick() {
        props.newPad(bookTitle);
        setTitle("");
    }

    // function loadOne(id) {
    //     props.loadBookTitle(id);   
    // }

    return (
        <div className="header">
            <h1>Book Notes</h1>
            <p>Take and save your notes while reading</p>
            <h3>New Book <span>
            <input className="title-input" value={bookTitle} onChange={handleChange} placeholder="book title"></input>
            <button className="title-button" onClick={handleClick}>+</button>
            </span></h3>
            <div className="book-titles">
            {/* {props.noteTitles.map((title, index) => {
                return <Link 
                noteHeading={title}
                key={index}
                id={index}
                loadBook={loadOne}
                />
            
        })} */}
            </div>
        </div>
    )
}

export default Header; 