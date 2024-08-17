"use client";

import { useState, useEffect } from 'react';

export default function NotesPage() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
            setNotes(storedNotes);
        }
    }, []); // Пустой массив зависимостей - эффект выполняется только при монтировании компонента

    return (
        <div>
            <h1 className="app-title">All your notes</h1>
            {notes.length === 0 ? (
                <p>No notes available</p>
            ) : (
                <ul>
                    {notes.map((note, index) => (
                        <li key={index}>
                            <p>{note.title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
