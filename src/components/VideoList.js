import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {
    render() {
        return(
            <ul className="list-group videoList">
                {
                    this.props.videos.map((video) => {
                      return(
                          <VideoListItem video={video} key={video.etag} />
                      );
                    })
                }
            </ul>
        );
    }
}

export default VideoList;