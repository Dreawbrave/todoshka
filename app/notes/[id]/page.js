"use client";

import { useState, useEffect } from 'react';

export default function NoteDetail({ params }) {
    const { id } = params;
    const [note, setNote] = useState(null);

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        const foundNote = notes[id];

        if (foundNote) {
            setNote(foundNote);
        }
    }, [id]);

    if (!note) {
        return <div>Note not found</div>;
    }

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </div>
    );
}
