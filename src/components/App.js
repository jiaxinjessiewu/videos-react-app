import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import { VideosList } from './VideosList';
import { VideoDetail } from './VideoDetail';

import { fetchVideos, selectVideo } from '../actions'; 

// import { finalURL } from '../apis/youtube';
import '../styles/main.css';

class App extends React.Component {

    state = { 
        videos         : [], 
        loading        : false,
        selected_video : null
    }

    componentDidMount() {
        // this.onSearchVideo('dogs');
        console.log("this.props: ",this.props)
        this.props.fetchVideos('dogs');
    }
    
    // onSearchVideo = keyWork => {
    //     let searchQuery = `&q=${keyWork}`;
    //     this.setState({loading : true})
    //     fetch(finalURL + searchQuery)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(results => {
    //         this.setState({ 
    //             videos         : results.items, 
    //             loading        :false,
    //             selected_video : results.items[0]
    //         })
    //     })
    //     .catch(error => {
    //         console.log("youtube error: ",error)
    //     });
    // };

    // onVideoSelect = (video) => {
    //     console.log("onVideoSelect. ", video)
    //     this.setState({ selected_video : video })
    // };

    // render () {
    //     return (
    //         <div className="ui contiainer main">
    //             <SearchBar onFormSubmit={this.onSearchVideo}/>
    //             {this.state.loading ? 'loading' :  ''}
    //             <div className="ui grid">
    //                 <div className="ui row">
    //                     <div className="eleven wide column">
    //                         <VideoDetail video={this.state.selected_video}/>
    //                     </div>
    //                     <div className="five wide column">
    //                         <VideosList 
    //                             videos={this.state.videos}
    //                             selectedVideo={this.onVideoSelect}
    //                         />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
    render () {
        if(!this.props.videos || !this.props.selectedVideo) {
            return (
              <div>Loading...</div>
            );
        }

        return (
            // <div className="ui contiainer main">
            //     <SearchBar onFormSubmit={this.onSearchVideo}/>
            //     {this.state.loading ? 'loading' :  ''}
            //     <div className="ui grid">
            //         <div className="ui row">
            //             <div className="eleven wide column">
            //                 <VideoDetail video={this.state.selected_video}/>
            //             </div>
            //             <div className="five wide column">
            //                 <VideosList 
            //                     videos={this.state.videos}
            //                     selectedVideo={this.onVideoSelect}
            //                 />
            //             </div>
            //         </div>
            //     </div>
            // </div>
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
    console.log("App state: ",state)
    return {
        videos : state.VideosReducer.videos,
        selectVideo : state.VideosReducer.selectVideo
    }
}
export default connect(mapStateToProps, { fetchVideos, selectVideo })(App);
