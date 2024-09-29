// AddNote.js
import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const characterLimit = 200;

    const handleSubmit = () => {
        if (title && content) {
            handleAddNote({ title, content });
            setTitle('');
            setContent('');
        }
    };

    return (
        <div className="add-note">
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Title" 
            />
            <textarea 
                rows="4" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Content"
            />
            <div className="note-footer">
                <small>{characterLimit - content.length} Remaining</small>
                <button onClick={handleSubmit}>Add Note</button>
            </div>
        </div>
    );
};

export default AddNote;

