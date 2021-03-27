import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"


// function createNote(note, index){
// console.log("this is note", note)
// return (
//   <Note 
//   key={index}
//   id={index}
//   title={note.title}
//   noteBody={note.content}
//   />
// );
// }

function App() {
  return (
    <div>
      <Header />
      {/* <Note 
      title={notes[0].title}
      noteBody={notes[0].content}
      /> */}
      {notes.map(createNote => (
          <Note 
          key={createNote.key}
          id={createNote.key}
          title={createNote.title}
          noteBody={createNote.content}
          />
      ))}
      <Footer />
    </div>
  );
}

export default App;
