"use client";

import { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

export default function Home() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    const addNote = (note) => {
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    return (
        <div>
            <h1 className="app-title">My Notes App</h1>
            <NoteForm onSave={addNote} />
            <NoteList notes={notes} />
        </div>
    );
}
