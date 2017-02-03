import React, { Component } from 'react';

class VideoDetail extends Component {
    constructor(props) {
        super(props);
        //const vidId = this.props.video.id.videoId;
        //const vidUrl = `https://www.youtube.com/embed/${vidId}`;

    }

    render() {
        if (!this.props.video) {
            return (
                <div className="embed-responsive-16by9 embedBox">
                    <div className="loading">
                        <span>Loading...</span>
                    </div>
                </div>
            );
        }
        else {
            const vidId = this.props.video.id.videoId;
            const vidUrl = `https://www.youtube.com/embed/${vidId}`;
            return (
                <div>
                    <div className="videoDetail">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src={vidUrl}></iframe>
                        </div>
                        <div className="details">
                            <div>{this.props.video.snippet.title}</div>
                            <div>{this.props.video.snippet.description}</div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default VideoDetail;