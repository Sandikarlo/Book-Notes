import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";

function App() {
// Create ability to add multiple notePads
  const [noteTitles, setNoteTitle] = useState("");

  function addTitle(bookTitle) {
    // setNoteTitle(prevTitles => {
    //   return [...prevTitles, bookTitle];
    // });
    setNoteTitle(bookTitle);
    console.log(noteTitles);
  }

  function loadBook(id) {
    let selectedBook = noteTitles[id];
    console.log(selectedBook);
  }


  return (
    <div>
      <Header 
        newPad={addTitle}
        noteTitles={noteTitles}
        loadBookTitle={loadBook}
      />
      {/* Conditionally render Title */}

      {/* {noteTitles.map((title, index) => {
        return <Body 
          bookTitle={title}
          key={index}
        />
      })} */}
      {noteTitles !== "" &&  <Body 
        bookTitle={noteTitles}
      />}
     
      
    </div>
    
  )
}

export default App;