import React, { useEffect, useState } from "react";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import "./App.css";

const retrieveData = () => {
  const list = localStorage.getItem("noteLists");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const App = () => {
  const [notes, setNotes] = useState(retrieveData());
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "New Note",
      content: "",
      created_at: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setSelectedNote(null);
  };

  const selectNote = (note) => {
    setSelectedNote(note);
  };

  const updateNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };
  useEffect(() => {
    localStorage.setItem("noteLists", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="app-container">
      <div className="sidebar">
        <NoteList
          notes={notes}
          onAddNote={addNote}
          onSelectNote={selectNote}
          selectedNote={selectedNote}
        />
      </div>
      <div className="main-content">
        {selectedNote ? (
          <NoteEditor
            note={selectedNote}
            onDeleteNote={deleteNote}
            onUpdateNote={updateNote}
          />
        ) : (
          <div className="no-note-selected">
            Select a note to edit or create a new one!
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
