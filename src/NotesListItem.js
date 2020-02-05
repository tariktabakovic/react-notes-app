import React from 'react';


function NotesListItem ({
    title,
    id
}){
    return (
        <li
        onClick={()=>{
            console.log(`You clicked ${id}`)
        }}
        >{title}</li>
    );
}

export default NotesListItem;