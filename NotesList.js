// NotesList.js
import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note 
                    key={note.id} 
                    id={note.id} 
                    title={note.title} 
                    content={note.content} 
                    handleDeleteNote={handleDeleteNote} 
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;

