// Note.js
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, title, content, handleDeleteNote }) => {
    return (
        <div className="note">
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={() => handleDeleteNote(id)}>
                <MdDeleteForever size="1.3em" />
            </button>
        </div>
    );
};

export default Note;

