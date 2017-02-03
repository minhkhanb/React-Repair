import React, { Component } from 'react';


class VideoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
           imageUrl: undefined
        };
    }

    componentDidMount() {
           this.setState({
              imageUrl: this.props.video.snippet.thumbnails.default.url
           });
    }

    render() {
        const {video, onVideoSelect} = this.props;
        return(
            <li onClick={() => onVideoSelect(video)} className="list-group-item videoListItem">
                <div className="video-list">
                    <div className="media-left">
                        <img src={this.state.imageUrl} alt="" className="media-obj"/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;