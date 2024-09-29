// Header.js
import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Note-Taking App</h1>
            <button onClick={() => handleToggleDarkMode(prev => !prev)} className="toggle-mode">
                Toggle Dark Mode
            </button>
        </div>
    );
};

export default Header;

