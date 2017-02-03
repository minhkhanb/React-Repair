import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    render() {
        return(
            <div className="search-bar">
                <input value={this.state.term} onChange={ evt => this.onInputChange(evt.target.value)}/>
            </div>
        );
    }

    onInputChange (term) {
        console.log(JSON.stringify(this.props.onSearchTermChange, null, 2))
        this.setState({term});
        this.props.onSearchTermChange(term);
        console.log(term);
    }
}

export default SearchBar;