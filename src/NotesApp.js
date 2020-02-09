import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            currentNoteId: '',
            searchText: '',
            notes: [
                {
                    id: 'a1',
                    title: 'first note',
                    copy: 'la la la'
                },
                {
                    id: 'b2',
                    title: 'second note',
                    copy: 'ba ba ba'
                },
                {
                    id: 'c3',
                    title: 'third note',
                    copy: 'ha ha ha'
                }
            ]
        };
    }
    render(){
        return (
            <div>
                <h1>React Notes App</h1>
                <NewNote />
                <SearchBar 
                    handleChange= {this._setSearchText}
                    text={this.state.searchText}/>
                <NotesList 
                    notes={this._getFilteredNotes()}
                    handleClick= {this._selectNote}
                />
                <NoteEditor 
                    note={this._getNoteById()}
                    handleChange={this._updateNote}
                />
            </div>
        )
    }

    _getNoteById = () => this.state.notes.find( note => note.id === this.state.currentNoteId || {})
    

    _getFilteredNotes=()=>{
        const filteredArray = this.state.notes.filter(note =>{
            const titleDoesMatch = note.title.toLowerCase().includes(this.state.searchText.toLowerCase());
            const copyDoesMatch = note.copy.toLowerCase().includes(this.state.searchText.toLowerCase());
            return titleDoesMatch || copyDoesMatch;
        });
        return filteredArray;
    }

    _setSearchText= (searchText)=> {
        this.setState({
            searchText
        }, ()=>{
            console.log('update search text')
        });
    }

    _selectNote = (currentNoteId)=>{
        this.setState({
            currentNoteId
        }, ()=>{
            console.log('Updated current id')
        });
    }

    _updateNote = (changedNote) =>{
        console.table(changedNote);
        const updatedNotesArray = this.state.notes.map (note => {
            if (note.id !== this.state.currentNoteId){
                return note;
            } else {
                return changedNote;
            }
        });
        this.setState({
            notes: updatedNotesArray
        }, () => {
            console.log(`Updated note with id ${changedNote.id}`)
        })
    }
}


export default NotesApp;