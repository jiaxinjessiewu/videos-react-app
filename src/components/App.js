import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import { VideosList } from './VideosList';
import VideoDetail from './VideoDetail';
import { fetchVideos } from '../actions'; 
import '../styles/main.css';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchVideos('dogs');
    }
    render () {
        if(!this.props.videos && !this.props.selectedVideo) {
            return (
              <div>Loading...</div>
            );
        }

        return (
            <div className="ui contiainer main">
                <SearchBar/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.props.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideosList videos={this.props.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        videos      : state.VideosReducer.videos
    }
}
export default connect(mapStateToProps, { fetchVideos })(App);
