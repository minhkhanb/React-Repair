import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {onVideoSelect} = this.props;
        let that = this;
        return(
            <ul className="list-group videoList">
                {
                    this.props.videos.map((video) => {
                      return(
                          <VideoListItem onVideoSelect={onVideoSelect} video={video} key={video.etag} />
                      );
                    })
                }
            </ul>
        );
    }
}

export default VideoList;