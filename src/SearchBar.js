import React from 'react';

// destructoring text instead of using props.text 
function SearchBar({
    text, 
    handleChange
})
    {
    return(
        <input 
        onChange={(event)=>{
            handleChange(event.target.value)
        }}
        value= {text}/>
    );
}

export default SearchBar;