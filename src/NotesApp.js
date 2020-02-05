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
            searchText: 'This is the search text',
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
                    notes={this.state.notes}/>
                <NoteEditor />
            </div>
        )
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
}


export default NotesApp;