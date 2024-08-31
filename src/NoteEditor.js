import React, { useState } from "react";

const NoteEditor = ({ note, onDeleteNote, onUpdateNote }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleUpdate = () => {
    onUpdateNote({
      ...note,
      title,
      content,
      updated_at: new Date().toISOString(),
    });
  };

  return (
    <div className="note-editor">
      <input
        className="note-title-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className="note-content-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <div className="editor-actions">
        <button
          className="delete-note-btn"
          onClick={() => onDeleteNote(note.id)}
        >
          Delete
        </button>
        <button className="save-note-btn" onClick={handleUpdate}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NoteEditor;
