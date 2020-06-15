import React from 'react';
import { connect } from 'react-redux';

class VideoDetail extends React.Component {
  render () {
    if (!this.props.selectedVideo) {
      return <div> <h3>Search Videos</h3> </div>
    }
    const videoURL = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`

    return (
      <div>
        <div className="ui embed">
            <iframe title="video player" src={videoURL} />
        </div>
        <div className="ui segment">
            <h4 className="ui header">{this.props.selectedVideo.snippet.title}</h4>
            <p>{this.props.selectedVideo.snippet.description}</p>
        </div>
      </div>  
    );

  }
}

const mapStateToProps = (state) => {
  return { selectedVideo : state.VideosReducer.selectedVideo}
}

export default connect(mapStateToProps)(VideoDetail);