import React, { Component } from 'react';

class VideoDetail extends Component {
    constructor(props) {
        super(props);
        //const vidId = this.props.video.id.videoId;
        //const vidUrl = `https://www.youtube.com/embed/${vidId}`;

    }

    render() {
        if(!this.props.video) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        else {
            const vidId = this.props.video.id.videoId;
            const vidUrl = `https://www.youtube.com/embed/${vidId}`;
            return (
                <div className="videoDetail">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={vidUrl}></iframe>
                    </div>
                    <div className="details">

                    </div>
                </div>
            );
        }
    }
}

export default VideoDetail;