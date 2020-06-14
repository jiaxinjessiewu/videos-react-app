import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos, selectVideo } from '../actions'; 

export const VideoDetail = () => {
    if (!this.props.video) {
        return <div> <h3>Search Videos</h3> </div>
    }
    const videoURL = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
    return (
      <div>
        <div className="ui embed">
            <iframe title="video player" src={videoURL} />
        </div>
        <div className="ui segment">
            <h4 className="ui header">{this.props.video.snippet.title}</h4>
            <p>{this.props.video.snippet.description}</p>
        </div>
      </div>  
    );
}

const mapStateToProps = (state) => {
  return { video : state.VideosReducer.selectVideo}
}

export default connect(mapStateToProps, { fetchVideos, selectVideo })(VideoDetail);