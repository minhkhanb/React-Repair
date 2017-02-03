import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return(
            <input onChange={ evt => console.log(evt.target.value)}/>
        );
    }

    onInputChange (evt) {
        console.log('change event : --------------', evt.target.value);
    }
}

export default SearchBar;