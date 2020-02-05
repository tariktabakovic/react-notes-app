import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            searchText: 'This is the search text'
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
                <NotesList />
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
}


export default NotesApp;