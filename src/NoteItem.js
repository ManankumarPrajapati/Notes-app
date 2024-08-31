import React from "react";

const NoteItem = ({ note, onClick, isSelected }) => {
  return (
    <div
      className={`note-item ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h3>{note.title}</h3>
      <p>{note.content.substring(0, 50)}...</p>
      <small>{new Date(note.created_at).toLocaleString()}</small>
    </div>
  );
};

export default NoteItem;
