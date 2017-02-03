import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar.js';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyDsByJlVV1mOE5AY1GfPWlRuD4w8zk2iyw';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        }

        YTSearch({ key: API_KEY, term: 'le-sang'}, (videos) => {
            this.setState({
                videos
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);