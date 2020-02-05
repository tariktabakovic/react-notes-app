import React from 'react';
import NotesListItem from './NotesListItem';

// notes is the prop
function NotesList({
    notes
}){
    return (
        <ul>
            {
                notes.map(note => (
                <NotesListItem 
                title={note.title} 
                id={note.id}
                key={note.id}
                />))
            }
        </ul>
    );
}

export default NotesList;