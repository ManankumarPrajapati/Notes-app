import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onAddNote, onSelectNote, selectedNote }) => {
  return (
    <div className="note-list">
      <button className="add-note-btn" onClick={onAddNote}>
        + New Note
      </button>
      <div className="notes-container">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            isSelected={selectedNote && note.id === selectedNote.id}
            onClick={() => onSelectNote(note)}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
