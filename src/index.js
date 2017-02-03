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
            videos: [],
            selectedVideo: null
        }
    }

    componentWillMount() {
        YTSearch({key: API_KEY, term: 'le-sang'}, (videos) => {
            if (videos.length >= 5) {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            }
        });
    }

    render() {
        return (
            <div className="container">
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                           videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);