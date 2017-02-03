import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar.js';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyDsByJlVV1mOE5AY1GfPWlRuD4w8zk2iyw';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        }
        this.sRender = false;
    }

    componentWillMount() {
        YTSearch({key: API_KEY, term: 'le-sang'}, (videos) => {
            if (videos.length >= 5) {
                this.sRender = true;
                this.setState({
                    videos
                });
            }
        });
    }

    shouldComponentUpdate() {
        return this.sRender;
    }

    render() {
        return (
            <div className="container">
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);