import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos, selectVideo } from '../actions'; 
// const VideoItem = (props) => {
class VideoItem extends React.Component {  // distructure the video out of props
    render() {
        return (
            <div className="video-item item" onClick={() => this.props.selectVideo(this.props.video)}>
                <img
                    alt={this.props.video.snippet.title}
                    className="ui image"
                    src = {this.props.video.snippet.thumbnails.high.url}
                />
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                </div>
            </div>
        );
    }
}
export default connect(null, { fetchVideos, selectVideo })(VideoItem);