import Link from 'next/link';

export default function NoteList({ notes }) {
    return (
        <ul>
            {notes.map((note, index) => (
                <li key={index}>
                    <Link href={`/notes/${index}`}>
                        {note.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
