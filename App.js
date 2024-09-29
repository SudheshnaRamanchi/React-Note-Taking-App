// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import Search from './components/Search';
import { nanoid } from 'nanoid';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = ({ title, content }) => {
        const newNote = {
            id: nanoid(),
            title,
            content,
        };
        setNotes((prevNotes) => [...prevNotes, newNote]);
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
    };

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchText.toLowerCase()) || 
        note.content.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className={darkMode ? 'dark-mode' : ''}>
            <Header handleToggleDarkMode={setDarkMode} />
            <Search handleSearchNote={setSearchText} />
            <NotesList 
                notes={filteredNotes} 
                handleAddNote={addNote} 
                handleDeleteNote={deleteNote} 
            />
        </div>
    );
};

export default App;

