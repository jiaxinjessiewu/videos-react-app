import React from 'react';

import SearchBar from './SearchBar';
import VideosList from './VideosList';

import { finalURL } from '../apis/youtube';

class App extends React.Component {

    state = { videos : [], loading: false }
    
    onSearchVideo = keyWork => {
        let searchQuery = `&q=${keyWork}`;
        this.setState({loading : true})
        fetch(finalURL + searchQuery)
        .then(response => {
            return response.json();
        })
        .then(results => {
            this.setState({ videos: results.items, loading:false })
        })
        .catch(error => {
            console.log("youtube error: ",error)
        });
    };

    render () {
        return (
            <div className="ui contiainer">
                <SearchBar onFormSubmit={this.onSearchVideo}/>
                {this.state.loading ? 'loading' :  this.state.videos.length + ' Videos'}
                
                <div className="ui grid">
                    <div className="ui row">
                        <div className="five wide column">
                            <VideosList videos={[]}></VideosList>
                        </div>
                        <div className="eleven wide column"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;